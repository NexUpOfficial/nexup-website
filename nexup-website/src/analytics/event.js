// src/analytics/event.js

import { post } from "./client";
import { getSessionId } from "./session";

/**
 * Track any user event
 */
export function trackEvent({
  name,
  page,
  type = "click",
  metadata = {},
}) {
  const sessionId = getSessionId();
  if (!sessionId) return;

  post("/event", {
    sessionId,
    name,
    type,
    page,
    metadata,
  });
}
