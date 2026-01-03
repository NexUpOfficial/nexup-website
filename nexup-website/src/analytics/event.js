// src/analytics/event.js

import { sendBeacon, getSessionId } from './config.js';
import { getCurrentPageData } from './config.js';


/**
 * Tracks a custom event/action on the website.
 * @param {string} eventName - The name of the event (e.g., 'CTA_Clicked', 'Form_Submitted')
 * @param {object} properties - Custom data relevant to the event (e.g., { btnText: 'Sign Up', formId: 'contact' })
 */
export const trackEvent = (eventName, properties = {}) => {
    const sessionId = getSessionId();
    if (!sessionId) {
        console.warn(`Analytics: Cannot track event '${eventName}', session not initialized.`);
        return;
    }
    
    const { pageViewId } = getCurrentPageData();

    const eventData = {
        sessionId: sessionId,
        eventName: eventName,
        timestamp: new Date().toISOString(),
        properties: {
            ...properties,
            path: window.location.pathname,
            pageViewId: pageViewId, // Link event to the current page view
        }
    };

    sendBeacon('/event/track', eventData);
    console.log(`Analytics: Tracked Event: ${eventName}`, properties);
};

/**
 * Helper to easily track a CTA click.
 * @param {string} btnText - The visible text on the button.
 * @param {string} targetUrl - The destination URL (if applicable).
 */
export const trackCTAClick = (btnText, targetUrl) => {
    trackEvent('CTA_CLICK', {
        buttonText: btnText,
        targetUrl: targetUrl,
    });
};