let sessionId = null;

/* ======================
   START SESSION
====================== */
export async function startSession() {
  const res = await fetch(
    "http://localhost:5000/api/public/session/start",
    { method: "POST" }
  );

  const data = await res.json();
  sessionId = data.sessionId;
  return sessionId;
}

/* ======================
   END SESSION SAFELY
====================== */
export function endSession() {
  if (!sessionId) return;

  navigator.sendBeacon(
    "http://localhost:5000/api/public/session/end",
    JSON.stringify({ sessionId })
  );
}

/* ======================
   GET SESSION ID
====================== */
export function getSessionId() {
  return sessionId;
}
