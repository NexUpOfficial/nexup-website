import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../page-styles/NotFound.css";

export default function NotFound() {
  const location = useLocation();
  const navigate = useNavigate();

  const [isOnline, setIsOnline] = useState(navigator.onLine);

  /* ---------------------------------------------
     Context-aware copy
  --------------------------------------------- */
  const pathname = location.pathname.toLowerCase();

  const getContextMessage = () => {
    if (pathname.startsWith("/systemdocs")) {
      return "System documentation is unavailable right now.";
    }
    if (pathname.startsWith("/ecosystem")) {
      return "This ecosystem page could not be reached.";
    }
    return "The page you’re looking for doesn’t exist or was moved.";
  };

  /* ---------------------------------------------
     Offline analytics logging (NexNodes)
  --------------------------------------------- */
  const logOfflineEvent = () => {
    try {
      fetch("https://nexnodes.nexup.com/analytics/offline", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          path: location.pathname,
          timestamp: Date.now(),
          userAgent: navigator.userAgent,
        }),
        keepalive: true,
      });
    } catch {
      /* silent fail – never block UI */
    }
  };

  /* ---------------------------------------------
     Online / Offline listeners
  --------------------------------------------- */
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);

      const lastPath = sessionStorage.getItem("nx:lastPath");
      navigate(lastPath || "/", { replace: true });
    };

    const handleOffline = () => {
      setIsOnline(false);
      sessionStorage.setItem("nx:lastPath", location.pathname);
      logOfflineEvent();
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    if (!navigator.onLine) {
      handleOffline();
    }

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [location.pathname, navigate]);

  return (
    <main className="nx-notfound nx-fade-in">
      <div className="nx-notfound-content">
        {/* SVG Illustration */}
        {!isOnline && (
          <svg
            className="nx-offline-svg"
            width="120"
            height="80"
            viewBox="0 0 120 80"
            fill="none"
          >
            <path
              d="M20 60h80a12 12 0 0 0 0-24 20 20 0 0 0-39-6 16 16 0 0 0-41 10"
              stroke="#555"
              strokeWidth="2"
              fill="none"
            />
            <line x1="30" y1="20" x2="90" y2="70" stroke="#444" strokeWidth="2" />
          </svg>
        )}

        <h1>{isOnline ? "404" : "Offline"}</h1>

        <h2>
          {isOnline ? "Page not found" : "You’re offline"}
        </h2>

        <p>
          {isOnline
            ? getContextMessage()
            : "Your internet connection is unavailable. We’ll reconnect automatically when it’s back."}
        </p>

        <div className="nx-notfound-actions">
          <Link to="/" className="nx-btn-primary">
            Go to Home
          </Link>

          <button
            className="nx-btn-secondary"
            onClick={() => window.location.reload()}
          >
            Retry
          </button>
        </div>

        <div className="nx-notfound-support">
          <span>Need help?</span>
          <Link to="/support/help">Help Center</Link>
        </div>
      </div>
    </main>
  );
}
