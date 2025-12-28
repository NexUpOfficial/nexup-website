import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/* analytics core */
import { startSession, endSession } from "./session";
import {
  trackPageEnter,
  trackPageLeave,
  forceClosePage,
} from "./page";

export default function AnalyticManage() {
  const location = useLocation();
  const endedRef = useRef(false); // 👈 prevents double end

  /* ===============================
     SESSION LIFECYCLE
  ================================ */
  useEffect(() => {
    startSession();

    const handleUnload = () => {
      if (endedRef.current) return;
      endedRef.current = true;

      forceClosePage();
      endSession();
    };

    window.addEventListener("beforeunload", handleUnload);

    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") {
        handleUnload();
      }
    });

    return () => {
      handleUnload();
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, []);

  /* ===============================
     PAGE TRACKING
  ================================ */
  useEffect(() => {
    trackPageEnter(location.pathname);

    return () => {
      trackPageLeave();
    };
  }, [location.pathname]);

  return null;
}
