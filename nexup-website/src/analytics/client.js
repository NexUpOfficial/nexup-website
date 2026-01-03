// nexup-website/src/AnalyticManage.jsx

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // If using React Router

import { startSession, resetSession } from './analytics/session.js';
import { startNewPageView, forceClosePage } from './analytics/page.js';

const AnalyticManage = () => {
    const location = useLocation();

    // 1. Initialize Session on Component Mount
    useEffect(() => {
        startSession();

        // Optional: Add a global listener for CTAs
        document.addEventListener('click', handleGlobalClick);

        // Cleanup: Use the forceClosePage fix here when the component unmounts
        return () => {
            forceClosePage();
            document.removeEventListener('click', handleGlobalClick);
        };
    }, []);

    // 2. Track Page View on Route Change
    useEffect(() => {
        // Called whenever the path/hash changes
        startNewPageView();
    }, [location.pathname, location.search]);

    // Simple global click handler to track button actions
    const handleGlobalClick = (event) => {
        // Look for elements that look like buttons or links
        const target = event.target.closest('button, a, [role="button"]');
        if (target) {
            // Use your trackEvent or trackCTAClick here
            // Example: trackCTAClick(target.innerText || target.getAttribute('aria-label'), target.href);
        }
    };
    
    // This component renders nothing; it's purely for side effects.
    return null; 
};

export default AnalyticManage;