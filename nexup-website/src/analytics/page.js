// src/analytics/page.js

import { v4 as uuidv4 } from 'uuid';
import { sendBeacon, getSessionId, getCurrentPageData, setCurrentPageData } from './config.js';

/**
 * Sends the final duration for the current page view and ends it.
 */
export const closeCurrentPageView = () => {
    const { pageViewId, startTime } = getCurrentPageData();
    const sessionId = getSessionId();

    if (!pageViewId || !sessionId || !startTime) {
        return; // Nothing to close
    }

    const durationMs = Date.now() - startTime.getTime();
    
    // NOTE: For simplicity in this implementation, we are only tracking PageView
    // Start and deriving duration from the session end (server-side).
    // If you need per-page duration, you'd send an update/end beacon here.
    
    // For now, we only log and clear the current page state:
    console.log(`Analytics: Closed Page View ${pageViewId}. Duration: ${durationMs}ms`);
    setCurrentPageData(null, null); // Clear state
};

/**
 * Starts a new page view event. This should be called on every route change.
 */
export const startNewPageView = () => {
    const sessionId = getSessionId();
    if (!sessionId) {
        console.warn("Analytics: Cannot start page view, session not initialized.");
        return;
    }
    
    // 1. Close the *previous* page view first (important for single-page apps)
    closeCurrentPageView();

    // 2. Define the new page view details
    const newPageViewId = uuidv4();
    const startTime = new Date();
    const path = window.location.pathname;
    
    // Get the referrer (if available, useful for first page)
    const referrer = document.referrer; 

    // 3. Send the page view beacon to the backend
    const data = {
        sessionId: sessionId,
        pageViewId: newPageViewId,
        path: path,
        title: document.title,
        referrer: referrer,
        timestamp: startTime.toISOString(),
    };
    sendBeacon('/page/view', data);
    
    // 4. Update the current page state
    setCurrentPageData(newPageViewId, startTime);
    console.log(`Analytics: Started New Page View: ${path}`);
};

// Expose the function that was causing the error for the cleanup logic in AnalyticManage.jsx
export const forceClosePage = closeCurrentPageView;