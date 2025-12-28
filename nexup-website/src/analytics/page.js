import { getSessionId } from "./session";

let currentPath = null;

export function trackPageEnter(path) {
  const sessionId = getSessionId();
  if (!sessionId) return;

  currentPath = path;

  fetch("http://localhost:5000/api/public/page/enter", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ sessionId, path }),
  });
}

export function trackPageLeave() {
  const sessionId = getSessionId();
  if (!sessionId || !currentPath) return;

  fetch("http://localhost:5000/api/public/page/leave", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ sessionId, path: currentPath }),
  });

  currentPath = null;
}

/**
 * Used on tab close / refresh
 */
export function forceClosePage() {
  const sessionId = getSessionId();
  if (!sessionId || !currentPath) return;

  navigator.sendBeacon(
    "http://localhost:5000/api/public/page/leave",
    JSON.stringify({ sessionId, path: currentPath })
  );

  currentPath = null;
}
