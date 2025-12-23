import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export default function ScrollRestoration() {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // 🚫 DO NOTHING on refresh / back / forward
    if (navigationType === "POP") return;

    // ✅ ONLY scroll to top on internal navigation
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname, navigationType]);

  return null;
}
