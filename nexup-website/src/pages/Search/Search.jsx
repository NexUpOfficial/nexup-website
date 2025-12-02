// src/pages/Search/Search.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../../page-styles/Search/Search.css";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isListening, setIsListening] = useState(false);
  const [recognitionSupported, setRecognitionSupported] = useState(true);

  const navigate = useNavigate();
  const recognitionRef = useRef(null);

  /* ============================
      Rotating placeholders
  ============================ */
  const placeholders = [
    "Explore NexUP",
    "Discover NexWorld",
    "Search across NexNodes",
    "Find digital spaces",
    "Navigate NexEngine",
    "Uncover NexHousing",
    "Search innovations",
    "Explore virtual worlds",
    "Find intelligent systems",
    "Search everything in NexUP",
  ];

  // ✅ FIX: Add useEffect to rotate the placeholder index over time
  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
    }, 2500); // change every 2.5 sec

    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures it runs once on mount

  /* ============================
      Speech Recognition Setup
  ============================ */
  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      setRecognitionSupported(false);
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.continuous = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;

      console.log("VOICE RESULT:", transcript); // 🔥 Debug

      // 👉 Put voice text into search bar
      setQuery(transcript);
      handleSearch(transcript);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.onerror = (err) => {
      console.log("VOICE ERROR:", err);
      setIsListening(false);
    };

    recognitionRef.current = recognition;
  }, []);

  const MicIcon = ({ active }) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill={active ? "black" : "none"}
      stroke={active ? "black" : "white"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 1a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
      <path d="M19 10a7 7 0 0 1-14 0" />
      <line x1="12" y1="17" x2="12" y2="23" />
      <line x1="8" y1="23" x2="16" y2="23" />
    </svg>
  );

  const handleVoiceClick = () => {
    if (!recognitionSupported || !recognitionRef.current) return;

    if (isListening) {
      recognitionRef.current.stop();
    } else {
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  /* ============================
      All pages (with categories)
  ============================ */
  const allPages = [
    // Ecosystem
    {
      title: "Ecosystem",
      path: "/ecosystem",
      category: "Ecosystem",
      description: "Overview of the NexUP ecosystem.",
    },
    {
      title: "NexWorld",
      path: "/ecosystem/nexworld",
      category: "Ecosystem",
      description: "Immersive virtual worlds inside NexUP.",
    },
    {
      title: "NexNodes",
      path: "/ecosystem/nexnodes",
      category: "Ecosystem",
      description: "Distributed intelligence nodes across devices.",
    },
    {
      title: "NexEngine",
      path: "/ecosystem/nexengine",
      category: "Ecosystem",
      description: "Core engine powering NexUP computations.",
    },
    {
      title: "NexHousing",
      path: "/ecosystem/nexhousing",
      category: "Ecosystem",
      description: "Modular digital housing for virtual life.",
    },
    {
      title: "Ecosystem Search",
      path: "/ecosystem/search",
      category: "Ecosystem",
      description: "Search within the NexUP ecosystem.",
    },

    // About
    {
      title: "About",
      path: "/about",
      category: "About",
      description: "Learn what NexUP is building.",
    },
    {
      title: "Vision",
      path: "/about/vision",
      category: "About",
      description: "Long-term vision and direction of NexUP.",
    },
    {
      title: "Team",
      path: "/about/team",
      category: "About",
      description: "People behind NexUP.",
    },
    {
      title: "Stories",
      path: "/about/stories",
      category: "About",
      description: "Stories and journeys across NexUP.",
    },
    {
      title: "Company",
      path: "/about/company",
      category: "About",
      description: "Company information about NexUP.",
    },
    {
      title: "Career",
      path: "/about/career",
      category: "About",
      description: "Careers and roles at NexUP.",
    },
    {
      title: "News",
      path: "/about/news",
      category: "About",
      description: "Latest news and announcements.",
    },

    // Support
    {
      title: "Guidelines",
      path: "/support/guidelines",
      category: "Support",
      description: "Usage guidelines and rules.",
    },
    {
      title: "Help",
      path: "/support/help",
      category: "Support",
      description: "Help and support resources.",
    },

    // Safety
    {
      title: "Safety Approach",
      path: "/safety/approach",
      category: "Safety",
      description: "NexUP safety approach.",
    },
    {
      title: "Privacy",
      path: "/safety/privacy",
      category: "Safety",
      description: "Privacy practices and policies.",
    },
    {
      title: "Trust",
      path: "/safety/trust",
      category: "Safety",
      description: "Trust and safety mechanisms.",
    },
    {
      title: "Transparency",
      path: "/safety/transparency",
      category: "Safety",
      description: "Transparency and reporting details.",
    },

    // Other
    {
      title: "DNS",
      path: "/dns",
      category: "Other",
      description: "DNS and account configuration.",
    },
    {
      title: "Contact",
      path: "/contact",
      category: "Other",
      description: "Contact NexUP.",
    },
    {
      title: "Login",
      path: "/login",
      category: "Other",
      description: "Sign in to your NexUP account.",
    },
    {
      title: "Search",
      path: "/search",
      category: "Other",
      description: "Global NexUP search.",
    },
    {
      title: "Home",
      path: "/",
      category: "Other",
      description: "Back to the home page.",
    },
  ];

  /* ============================
      Matching + a bit of fuzzy
  ============================ */

  const levenshtein = (a, b) => {
    const s = a.toLowerCase();
    const t = b.toLowerCase();
    const m = s.length;
    const n = t.length;
    if (!m) return n;
    if (!n) return m;

    const dp = Array.from({ length: m + 1 }, () =>
      new Array(n + 1).fill(0)
    );

    for (let i = 0; i <= m; i++) dp[i][0] = i;
    for (let j = 0; j <= n; j++) dp[0][j] = j;

    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const cost = s[i - 1] === t[j - 1] ? 0 : 1;
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1,
          dp[i][j - 1] + 1,
          dp[i - 1][j - 1] + cost
        );
      }
    }
    return dp[m][n];
  };

  // STRICTER: only show cards that really match
  const semanticSearch = (value) => {
    const q = value.trim().toLowerCase();
    if (!q) return [];

    const scored = allPages.map((page) => {
      const title = page.title.toLowerCase();
      const desc = page.description.toLowerCase();

      let score = Infinity;

      // 1️⃣ Exact / partial match in title
      if (title.includes(q)) {
        score = 0;
      }
      // 2️⃣ Partial match in description
      else if (desc.includes(q)) {
        score = 1;
      }
      // 3️⃣ Small fuzzy match for typos (e.g., "nexwrl")
      else {
        const dist = levenshtein(q, title);
        if (dist <= 2) {
          // Accept only if really close
          score = 2 + dist; // 2, 3, 4
        }
      }

      return { ...page, score };
    });

    // Only keep real matches (score !== Infinity)
    return scored
      .filter((p) => p.score !== Infinity)
      .sort((a, b) => a.score - b.score);
  };

  const handleSearch = (value) => {
    setQuery(value);

    if (!value.trim()) {
      setResults([]);
      setActiveIndex(-1);
      return;
    }

    const matches = semanticSearch(value);
    setResults(matches);
    setActiveIndex(matches.length > 0 ? 0 : -1);
  };

  const submitSearch = () => {
    if (results.length > 0) {
      const target =
        activeIndex >= 0 && results[activeIndex]
          ? results[activeIndex]
          : results[0];
      navigate(target.path);
    }
  };

  /* ============================
      Keyboard navigation
  ============================ */
  const handleKeyDown = (e) => {
    if (results.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) =>
        prev < 0 ? 0 : (prev + 1) % results.length
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) =>
        prev <= 0 ? results.length - 1 : prev - 1
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      submitSearch();
    }
  };

  /* ============================
      Group results by category
  ============================ */
  const groupedResults = results.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  /* ============================
      Render
  ============================ */
  return (
    <div className="search-page">
      {/* INPUT + VOICE + ARROW */}
      <motion.div
        className="underline-input-wrapper"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35 }}
      >
        <div className="input-container">
          {/* Real input */}
          <input
            type="text"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            onKeyDown={handleKeyDown}
            className="underline-input"
          />

          {/* Animated placeholder */}
          {query.length === 0 && (
            <div className="placeholder-animated">
              <AnimatePresence mode="wait">
                <motion.span
                  key={placeholderIndex}
                  initial={{ y: -12, opacity: 0, scale: 0.92 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  exit={{ y: 12, opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                >
                  {placeholders[placeholderIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          )}

          {/* MIC BUTTON (🎤) */}
          <button
            className={`voice-btn ${isListening ? "listening" : ""}`}
            onClick={handleVoiceClick}
          >
            <MicIcon active={isListening} />
          </button>


          {/* SEND ARROW */}
          <button
            className="send-btn"
            style={{ opacity: query.length > 0 ? 1 : 0.86 }}
            onClick={submitSearch}
          >
            ↑
          </button>
        </div>
      </motion.div>

      {/* RESULTS: Only render when match exists */}
      {query.length > 0 && results.length > 0 && (
        <div className="search-results">
          {Object.entries(groupedResults).map(
            ([category, items]) => (
              <div key={category} className="category-block">
                <div className="category-title">{category}</div>
                <div className="category-grid">
                  {items.map((item) => {
                    const globalIndex = results.indexOf(item);
                    const isActive = globalIndex === activeIndex;

                    return (
                      <motion.div
                        key={item.path}
                        className={`search-card ${
                          isActive ? "active" : ""
                        }`}
                        onClick={() => navigate(item.path)}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.18 }}
                      >
                        <div className="card-title">
                          {item.title}
                        </div>
                        <div className="card-desc">
                          {item.description}
                        </div>
                        <div className="card-meta">
                          <span className="chip">
                            {item.category}
                          </span>
                          <span className="chip-link">Go →</span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}