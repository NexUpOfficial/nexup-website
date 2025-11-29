// src/hooks/useHeaderHeight.js
import { useEffect, useState } from "react";

export default function useHeaderHeight() {
  const [height, setHeight] = useState(72); // fallback default

  useEffect(() => {
    const header = document.querySelector(".header");
    if (header) setHeight(header.offsetHeight);

    const resize = () => {
      const h = document.querySelector(".header")?.offsetHeight;
      if (h) setHeight(h);
    };

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  return height;
}
