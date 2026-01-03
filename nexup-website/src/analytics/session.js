// src/analytics/session.js

import { v4 as uuidv4 } from 'uuid'; // npm install uuid
import { sendBeacon, getClientDetails, getSessionId, setSessionId } from './config.js';
import { closeCurrentPageView, startNewPageView } from './page.js';

// Constant for local storage key
const SESSION_KEY = 'nexup_session_id';
const SESSION_EXPIRATION_MS = 30 * 60 * 1000; // 30 minutes of inactivity

/**
 * Initializes the session or resumes a paused one.
 */
export const startSession = () => {
    let sessionId = localStorage.getItem(SESSION_KEY);
    const now = Date.now();
    
    // Check if the existing session ID is valid or too old
    let isNewSession = true;
    if (sessionId) {
        const lastActive = localStorage.getItem('last_active');
        if (lastActive && (now - parseInt(lastActive, 10)) < SESSION_EXPIRATION_MS) {
            isNewSession = false; // Session is resumed
        } else {
            // Expired session - remove old ID to force a new one
            localStorage.removeItem(SESSION_KEY);
            sessionId = null;
        }
    }

    if (!sessionId) {
        // Generate a brand new session ID
        sessionId = uuidv4();
        localStorage.setItem(SESSION_KEY, sessionId);
        
        // Send the start beacon only for NEW sessions
        const clientDetails = getClientDetails();
        const data = {
            sessionId: sessionId,
            startTime: new Date().toISOString(),
            ...clientDetails,
        };
        sendBeacon('/session/start', data);
        console.log(`Analytics: Started new session: ${sessionId}`);
    } else {
        console.log(`Analytics: Resuming session: ${sessionId}`);
    }

    setSessionId(sessionId);
    // Always update last active time to keep the session alive
    localStorage.setItem('last_active', now.toString());
};


/**
 * Sends a signal to the backend when the user leaves the site.
 * This is called on beforeunload event.
 */
export const endSession = () => {
    const sessionId = getSessionId();
    if (!sessionId) return;
    
    // 1. Close the current page view first (to get final page duration)
    closeCurrentPageView(); 
    
    // 2. Send the session end beacon
    const data = {
        sessionId: sessionId,
        endTime: new Date().toISOString(),
        // Duration will be calculated server-side based on start_time
    };

    // Use sendBeacon for guaranteed delivery on window close
    sendBeacon('/session/end', data);
    
    // Do NOT clear localStorage here, as the user might return soon (resume logic handles expiry)
    console.log(`Analytics: Ending session: ${sessionId}`);
};

/**
 * Resets the session storage completely (e.g., for logout or debugging).
 */
export const resetSession = () => {
    localStorage.removeItem(SESSION_KEY);
    localStorage.removeItem('last_active');
    setSessionId(null);
    closeCurrentPageView();
    console.log("Analytics: Session reset completely.");
};


// Set up the session end listener (Crucial for time-on-site)
window.addEventListener('beforeunload', endSession);

// On navigation, we update the activity time to keep the session alive
window.addEventListener('mousemove', () => localStorage.setItem('last_active', Date.now().toString()), { once: true });
window.addEventListener('keypress', () => localStorage.setItem('last_active', Date.now().toString()), { once: true });