// src/components/ScrollRestoration.jsx
import { useEffect, useRef } from "react"; // 💡 Import useRef
import { useLocation } from "react-router-dom";

const scrollPositions = {};

export default function ScrollRestoration() {
  const location = useLocation();
  const isInitialMount = useRef(true); // 💡 Use a ref to track initial mount

  useEffect(() => {
    const key = location.key;
    
    // 1. On initial load (after F5), do nothing and let the browser restore scroll.
    if (isInitialMount.current) {
        isInitialMount.current = false;
        
        // IMPORTANT: We still need to capture the scroll position before the component unmounts
        // (This cleanup function will run when the component unmounts or before the next effect runs)
        return () => {
            scrollPositions[key] = window.scrollY;
        };
    }

    // 2. On subsequent navigation (history push/pop), restore scroll or go to top
    if (scrollPositions[key] !== undefined) {
      window.scrollTo(0, scrollPositions[key]);
    } else {
      // If the route is brand new (not back/forward), scroll to top
      window.scrollTo(0, 0); 
    }

    return () => {
      scrollPositions[key] = window.scrollY;
    };
  }, [location]);

  return null;
}