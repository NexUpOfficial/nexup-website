// src/analytics/client.js

const API_BASE = "http://localhost:5000/api/public";

/**
 * Generic POST helper for analytics
 * Never breaks UI if backend is down
 */
export async function post(endpoint, payload) {
  try {
    await fetch(`${API_BASE}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    // silent fail — analytics must never affect UX
    console.warn("Analytics request failed:", endpoint);
  }
}
