import { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";

/* ====================================================
 * TITLE MAP (Single Source of Truth)
 * ==================================================== */
const TITLE_MAP = {
  "/": "NexUP",

  /* ================= Ecosystem ================= */
  "/ecosystem": "Ecosystem",
  "/ecosystem/nexworld": "NexWorld",
  "/ecosystem/nexnodes": "NexNodes",
  "/ecosystem/nexengine": "NexEngine",
  "/ecosystem/nexhousing": "NexHousing",
  "/ecosystem/nexsearch": "NexSearch",

  /* ================= Vision ================= */
  "/vision": "Vision",
  "/vision/nexworld": "Vision · NexWorld",
  "/vision/nexnodes": "Vision · NexNodes",
  "/vision/nexengine": "Vision · NexEngine",
  "/vision/nexhousing": "Vision · NexHousing",
  "/vision/nexsearch": "Vision · NexSearch",

  /* ================= Approach ================= */
  "/approach": "Approach",
  "/approach/architecture": "Approach · Architecture",
  "/approach/scalability": "Approach · Scalability",
  "/approach/rollout": "Approach · Rollout",

  /* ================= System Docs ================= */
  "/systemdocs": "System Docs",
  "/systemdocs/overview": "Overview",
  "/systemdocs/governance": "Governance",
  "/systemdocs/security": "Security",
  "/systemdocs/privacy": "Privacy",
  "/systemdocs/cookies": "Cookies",
  "/systemdocs/transparency": "Transparency",
  "/systemdocs/terms": "Terms",

  /* ================= About ================= */
  "/about": "About NexUP",
  "/about/vision": "About · Vision",
  "/about/team": "Team",
  "/about/stories": "Stories",
  "/about/company": "Company",
  "/about/career": "Careers",
  "/about/news": "News",

  /* ================= Support ================= */
  "/support": "Support",
  "/support/guidelines": "Guidelines",
  "/support/help": "Help Center",

  /* ================= Safety ================= */
  "/safety": "Safety",
  "/safety/approach": "Safety · Approach",
  "/safety/privacy": "Privacy Policy",
  "/safety/security": "Security",
  "/safety/trust": "Trust",
  "/safety/transparency": "Transparency",
  "/safety/cookies": "Cookies Policy",

  /* ================= Auth & Misc ================= */
  "/login": "Login",
  "/search": "Search",
  "/contact": "Contact Us",
  "/feedback": "Feedback",
  "/dns": "DNS",

  /* ================= Sections ================= */
  "/sections/roadmap": "Roadmap",
  "/sections/terms": "Terms & Conditions",
};

/* ====================================================
 * HOOK
 * ==================================================== */
export default function useBrowserTitle({
  isOffline = false,
  isNotFound = false,
} = {}) {
  const { pathname } = useLocation();

  const title = useMemo(() => {
    if (isOffline) return "Offline";
    if (isNotFound) return "Page Not Found";

    // Exact match first
    if (TITLE_MAP[pathname]) {
      return TITLE_MAP[pathname];
    }

    // Longest prefix match (for nested routes)
    const matchedKey = Object.keys(TITLE_MAP)
      .filter(
        key =>
          key !== "/" &&
          pathname.startsWith(key)
      )
      .sort((a, b) => b.length - a.length)[0];

    return matchedKey ? TITLE_MAP[matchedKey] : "NexUP";
  }, [pathname, isOffline, isNotFound]);

  useEffect(() => {
    document.title =
      pathname === "/"
        ? "NexUP"
        : `${title} | NexUP`;
  }, [title, pathname]);

  return title; // usable for Header / Breadcrumbs
}
