// src/analytics/config.js

// Global state for tracking the current session and page
let currentSessionId = null;
let currentPageViewId = null;
let currentPageStartTime = null;

// The base URL for the NexNodes backend (must match your app.js)
export const API_BASE_URL = 'http://localhost:5000/api/public';

// A simple utility to send data to the backend
export const sendBeacon = (endpoint, data) => {
    const url = `${API_BASE_URL}${endpoint}`;
    
    // Use sendBeacon for reliable, non-blocking requests (especially session end)
    const success = navigator.sendBeacon(url, JSON.stringify(data));
    
    if (!success) {
        // Fallback for browsers that don't support sendBeacon or if payload is too large
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
            keepalive: true // Essential for reliable session end
        }).catch(err => console.error(`Analytics fetch error for ${endpoint}:`, err));
    }
    return success;
};

// --- Location and Device Utilities ---

// NOTE: IP address and Geo-location are best done server-side, 
// but we collect initial data points here.
export const getClientDetails = () => {
    const screen = window.screen;
    const nav = navigator;
    
    // Simple device type detection
    let deviceType = 'Desktop';
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(nav.userAgent)) {
        deviceType = 'Tablet';
    } else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-P|inux/i.test(nav.userAgent)) {
        deviceType = 'Mobile';
    }
    
    return {
        // This is client-side data. IP/Country will be enriched on the backend.
        // We use a simple placeholder for country/city based on browser locale.
        country: nav.language.split('-').pop() || 'Unknown', 
        city: 'Unknown (IP-based)', 
        
        userAgent: nav.userAgent,
        deviceType: deviceType,
        screenResolution: `${screen.width}x${screen.height}`,
        language: nav.language,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    };
};


// --- Session and Page State Getters/Setters ---

export const getSessionId = () => currentSessionId;
export const setSessionId = (id) => { currentSessionId = id; };

export const getCurrentPageData = () => ({
    pageViewId: currentPageViewId,
    startTime: currentPageStartTime,
});
export const setCurrentPageData = (viewId, startTime) => {
    currentPageViewId = viewId;
    currentPageStartTime = startTime;
};