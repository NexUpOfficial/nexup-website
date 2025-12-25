import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaMicrophone } from "react-icons/fa6";
import "../../page-styles/Search/Search.css";

// 💥 Performance FIX 11: Debounce Utility (180ms delay)
const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
};

// --- START: SearchPage Component ---
export default function SearchPage() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [placeholderIndex, setPlaceholderIndex] = useState(0);
    const [activeIndex, setActiveIndex] = useState(-1);
    const [isListening, setIsListening] = useState(false);
    const [recognitionSupported, setRecognitionSupported] = useState(true);
    
    // ✅ FIX: NEW state to control permanent layout shift (center -> top)
    const [hasInteracted, setHasInteracted] = useState(false);
    
    // 💥 FIX 7: State to manage placeholder rotation interval
    const [placeholderIntervalId, setPlaceholderIntervalId] = useState(null);

    const navigate = useNavigate();
    const recognitionRef = useRef(null);
    const inputRef = useRef(null);
    const wrapperRef = useRef(null); 

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

    // 💥 FIX 7: Placeholder rotation logic (Pauses when hasInteracted is true)
    useEffect(() => {
        if (placeholderIntervalId) clearInterval(placeholderIntervalId);

        // Only start the interval if the user HAS NOT interacted
        if (!hasInteracted) {
            const id = setInterval(() => {
                setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
            }, 2500);
            setPlaceholderIntervalId(id);
            return () => clearInterval(id);
        }
        
        return () => {
            if (placeholderIntervalId) clearInterval(placeholderIntervalId);
        };
    }, [hasInteracted, placeholders.length]);


    // Speech Recognition Setup
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
            setHasInteracted(true); // Voice interaction is permanent
        };

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            setQuery(transcript);
            runSearch(transcript); 
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

    const handleVoiceClick = () => {
        if (!recognitionSupported || !recognitionRef.current) return;

        if (isListening) {
            recognitionRef.current.stop();
        } else {
            recognitionRef.current.start();
            setIsListening(true);
            setHasInteracted(true); // Voice click initiates interaction
        }
    };

    // Auto-focus on mount
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    // 💥 FIX 4C: Implement Scroll-Into-View for active element
    useEffect(() => {
        if (activeIndex >= 0) {
            setTimeout(() => {
                const activeCard = document.querySelector(".search-card.active");
                if (activeCard) {
                    activeCard.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest',
                    });
                }
            }, 50); 
        }
    }, [activeIndex, results]);

    /* ============================
        Search Logic and Data
    ============================ */
    
    // ... (All pages data, levenshtein, and semanticSearch functions remain the same) ...
    const allPages = [
        { title: "Ecosystem", path: "/ecosystem", category: "Ecosystem", description: "Overview of the NexUP ecosystem." },
        { title: "NexWorld", path: "/ecosystem/nexworld", category: "Ecosystem", description: "Immersive virtual worlds inside NexUP." },
        { title: "NexNodes", path: "/ecosystem/nexnodes", category: "Ecosystem", description: "Distributed intelligence nodes across devices." },
        { title: "NexEngine", path: "/ecosystem/nexengine", category: "Ecosystem", description: "Core engine powering NexUP computations." },
        { title: "NexHousing", path: "/ecosystem/nexhousing", category: "Ecosystem", description: "Modular digital housing for virtual life." },
        { title: "Ecosystem Search", path: "/ecosystem/search", category: "Ecosystem", description: "Search within the NexUP ecosystem." },
        { title: "About", path: "/about", category: "About", description: "Learn what NexUP is building." },
        { title: "Vision", path: "/about/vision", category: "About", description: "Long-term vision and direction of NexUP." },
        { title: "Team", path: "/about/team", category: "About", description: "People behind NexUP." },
        { title: "Stories", path: "/about/stories", category: "About", description: "Stories and journeys across NexUP." },
        { title: "Company", path: "/about/company", category: "About", description: "Company information about NexUP." },
        { title: "Career", path: "/about/career", category: "About", description: "Careers and roles at NexUP." },
        { title: "News", path: "/about/news", category: "About", description: "Latest news and announcements." },
        { title: "Guidelines", path: "/support/guidelines", category: "Support", description: "Usage guidelines and rules." },
        { title: "Help", path: "/support/help", category: "Support", description: "Help and support resources." },
        { title: "Safety Approach", path: "/safety/approach", category: "Safety", description: "NexUP safety approach." },
        { title: "Privacy", path: "/safety/privacy", category: "Safety", description: "Privacy practices and policies." },
        { title: "Trust", path: "/safety/trust", category: "Safety", description: "Trust and safety mechanisms." },
        { title: "Transparency", path: "/safety/transparency", category: "Safety", description: "Transparency and reporting details." },
        { title: "DNS", path: "/dns", category: "Other", description: "DNS and account configuration." },
        { title: "Contact", path: "/contact", category: "Other", description: "Contact NexUP." },
        { title: "Login", path: "/login", category: "Other", description: "Sign in to your NexUP account." },
        { title: "Search", path: "/search", category: "Other", description: "Global NexUP search." },
        { title: "Home", path: "/", category: "Other", description: "Back to the home page." },
    ];

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

    const semanticSearch = (value) => {
        const q = value.trim().toLowerCase();
        if (!q) return [];

        const scored = allPages.map((page) => {
            const title = page.title.toLowerCase();
            const desc = page.description.toLowerCase();

            let score = Infinity;

            if (title.includes(q)) {
                score = 0;
            }
            else if (desc.includes(q)) {
                score = 1;
            }
            else {
                const dist = levenshtein(q, title);
                if (dist <= 2) {
                    score = 2 + dist;
                }
            }

            return { ...page, score };
        });

        return scored
            .filter((p) => p.score !== Infinity)
            .sort((a, b) => a.score - b.score);
    };

    // Core search logic executed immediately or after debounce
    const runSearch = (value) => {
        setQuery(value);
        setActiveIndex(-1);

        // Layout is controlled by setHasInteracted in handleSearch/onFocus/voice handlers

        if (!value.trim()) {
            setResults([]);
            return;
        }

        const matches = semanticSearch(value);
        setResults(matches);
        setActiveIndex(matches.length > 0 ? 0 : -1);
    };

    // 💥 FIX 11: Debounced search handler (180ms delay)
    const debouncedSearch = useCallback(debounce(runSearch, 180), []);

    const handleSearch = (value) => {
        setQuery(value); // Update the visual input immediately
        
        // 💡 Set interacted state on the very first keystroke
        if (value.length > 0) {
            setHasInteracted(true);
        }
        
        if (value.trim()) {
            debouncedSearch(value); 
        } else {
             // Immediate update for clearing the search
             runSearch(value);
        }
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

    // 💥 FIX 4A: Keyboard navigation with boundary stops
    const handleKeyDown = (e) => {
        if (results.length === 0) return;

        if (e.key === "ArrowDown") {
            e.preventDefault();
            setActiveIndex((prev) => 
                prev >= results.length - 1 ? (e.shiftKey ? 0 : results.length - 1) : prev + 1
            );
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setActiveIndex((prev) => 
                prev <= 0 ? (e.shiftKey ? results.length - 1 : 0) : prev - 1
            );
        } else if (e.key === "Enter") {
            e.preventDefault();
            // 💥 FIX 4B: Only submit if an index is selected (or first one is active)
            if (activeIndex >= 0) {
                submitSearch();
            }
        }
    };

    const groupedResults = results.reduce((acc, item) => {
        if (!acc[item.category]) acc[item.category] = [];
        acc[item.category].push(item);
        return acc;
    }, {});

    /* ============================
        Render
    ============================ */
    return (
        // ✅ FIX: Use hasInteracted to control CSS layout class
        <div className={`search-page ${!hasInteracted ? 'search-page-centered' : ''}`}>
            {/* INPUT + VOICE + ARROW */}
            <motion.div
                ref={wrapperRef}
                className="underline-input-wrapper"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                // ❌ REMOVED: All 'y' translation logic
                transition={{ duration: 0.35, ease: "easeInOut" }}
            >
                <div className="input-container">
                    {/* Real input */}
                    <input
                        ref={inputRef}
                        type="text"
                        value={query}
                        onChange={(e) => handleSearch(e.target.value)}
                        onKeyDown={handleKeyDown}
                        // 💡 Use onFocus to permanently set the layout shift
                        onFocus={() => setHasInteracted(true)} 
                        className="underline-input"
                    />

                    {/* Animated placeholder / Listening Status */}
                    {query.length === 0 && !hasInteracted && (
                        // Regular Rotation (Only show if user hasn't interacted)
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
                    
                    {/* 💥 FIX 5: Show Listening State (separate block for clean transition) */}
                    {isListening && query.length === 0 && (
                        <div className="placeholder-animated">
                            <motion.span 
                                key="listening"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                style={{ fontStyle: 'italic', color: '#a78bfa' }}
                            >
                                Listening... Speak now
                            </motion.span>
                        </div>
                    )}

                    {/* MIC BUTTON (🎤) */}
                    <button
                        className={`voice-btn ${isListening ? "listening" : ""}`}
                        onClick={handleVoiceClick}
                    >
                        <FaMicrophone color={isListening ? "black" : "white"} size={14} />
                    </button>

                    {/* SEND ARROW */}
                    <button
                        className="send-btn"
                        style={{ opacity: query.length > 0 ? 1 : 0.86 }}
                        onClick={submitSearch}
                        disabled={query.length === 0}
                    >
                        ↑
                    </button>
                </div>
            </motion.div>

            {/* RESULTS: Only render when interacted and matches exist */}
            <AnimatePresence>
                {(hasInteracted && query.length > 0 && results.length > 0) && (
                    <motion.div
                        className="search-results"
                        initial={{ opacity: 0, y: 10 }} 
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
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
                    </motion.div>
                )}

                {/* 💥 FIX 1: NO RESULTS STATE */}
                {(hasInteracted && query.length > 0 && results.length === 0) && (
                    <motion.div
                        className="no-results-state"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="no-results-icon">🕵️</div>
                        <div className="no-results-title">No results found for **"{query}"**</div>
                        <div className="no-results-tip">
                            Try searching for core topics like **"Ecosystem"**, **"Vision"**, or **"Privacy"**.
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}