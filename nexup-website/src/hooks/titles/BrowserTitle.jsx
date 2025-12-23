import { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";

/* ====================================================
 * TITLE MAP (Single Source of Truth)
 * ==================================================== */
const TITLE_MAP = {
  "/": "NexUP",

  /* Ecosystem */
  "/ecosystem": "Ecosystem",
  "/ecosystem/nexworld": "NexWorld",
  "/ecosystem/nexnodes": "NexNodes",
  "/ecosystem/nexengine": "NexEngine",
  "/ecosystem/nexhousing": "NexHousing",
  "/ecosystem/nexsearch": "NexSearch",

  /* About */
  "/about": "About NexUP",
  "/about/vision": "Vision",
  "/about/team": "Team",
  "/about/stories": "Stories",
  "/about/company": "Company",
  "/about/career": "Careers",
  "/about/news": "News",

  /* Support */
  "/support": "Support",
  "/support/guidelines": "Guidelines",
  "/support/help": "Help & Support",

  /* Safety */
  "/safety": "Safety",
  "/safety/approach": "Safety Approach",
  "/safety/privacy": "Privacy Policy",
  "/safety/trust": "Trust",
  "/safety/transparency": "Transparency",
  "/safety/cookies": "Cookies Policy",

  /* Auth & Misc */
  "/login": "Login",
  "/search": "Search",
  "/contact": "Contact Us",
  "/feedback": "Feedback",
  "/dns": "DNS",

  /* Legal / Sections */
  "/sections/roadmap": "Roadmap",
  "/sections/terms": "Terms & Conditions",
};

/* ====================================================
 * HOOK
 * ==================================================== */
export default function useBrowserTitle() {
  const { pathname } = useLocation();

  const title = useMemo(() => {
    return TITLE_MAP[pathname] || "NexUP";
  }, [pathname]);

  useEffect(() => {
    if (pathname === "/") {
      document.title = "NexUP";
    } else {
      document.title = `${title} | NexUP`;
    }
  }, [title, pathname]);

  return title; // useful for Header UI
}
