// src/analytics/AnalyticManage.jsx (FIXED Imports)

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; 

// --- CRITICAL FIX: Imports are relative to the current directory (src/analytics/) ---
import { startSession, resetSession } from './session.js'; // Note: './session.js'
import { startNewPageView, forceClosePage } from './page.js'; // Note: './page.js'
import { trackCTAClick } from './event.js';

/**
 * @component AnalyticsManager
 * This component runs the tracking logic, monitoring component mount/unmount and route changes.
 */
const AnalyticsManager = () => {
    const location = useLocation();

    // 1. Initialization and Cleanup (Runs once)
    useEffect(() => {
        startSession();

        // Optional: Global listener for general user interaction/activity
        document.addEventListener('click', handleGlobalClick);

        // Cleanup: Use the forceClosePage fix when the component unmounts
        return () => {
            document.removeEventListener('click', handleGlobalClick);
            // This is primarily for browser close (set up in session.js), but good practice here.
            forceClosePage(); 
        };
    }, []); 

    // 2. Route Change Tracking (Runs on every URL change)
    useEffect(() => {
        // Track the current page view whenever the location changes
        startNewPageView();
        
        // Ensure the browser tab title is updated here (as per your structure)
        document.title = getTitleForPath(location.pathname); // You need to implement getTitleForPath

    }, [location.pathname, location.search]); 

    // 3. Simple Global Event Handler for CTAs
    const handleGlobalClick = (event) => {
        const target = event.target.closest('button, a, [data-analytics-id]');
        
        if (target) {
            const buttonText = target.innerText || target.getAttribute('aria-label') || target.tagName;
            const targetUrl = target.href || 'no-link';

            // Send a custom event for any meaningful interaction
            trackCTAClick(buttonText, targetUrl);
        }
    };
    
    // Placeholder function (You need to define a proper logic to map path to title)
    const getTitleForPath = (path) => {
        // Example logic:
        if (path === '/') return 'Home | NexUp';
        if (path === '/about') return 'About Us | NexUp';
        return 'NexUp'; // Default
    };

    return null;
};

export default AnalyticsManager;