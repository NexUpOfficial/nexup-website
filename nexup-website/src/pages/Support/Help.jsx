// Help.jsx

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { FiSearch, FiGlobe, FiHome, FiTool, FiMessageSquare, FiMenu, FiX, FiChevronLeft, FiLoader, FiUser, FiMail, FiClipboard, FiFile, FiHash } from 'react-icons/fi';
import { FaCheck } from 'react-icons/fa'; 
import "../../page-styles/Support/Help.css";
import Footer from "../../components/Footer/Footer";

// --- Data Structures (Mock Articles - EXPANDED CONTENT) ---
// Help.jsx (Lines 11 through 108 - Replacing the entire mockArticles block)

// --- Data Structures (Mock Articles - EXPANDED CONTENT) ---
const mockArticles = {
  nexup: [
    { id: 'nu1', title: "How to create a NexUP account", short: "A step-by-step guide to setting up your account.", steps: ["1. Go to the NexUP homepage.", "2. Click 'Sign Up' in the top right corner.", "3. Fill in your details and verify your email."], keywords: ['signup', 'register', 'new user'], causes: ['Account details not filled completely.', 'Verification link expired.'] },
    { id: 'nu2', title: "I can't log in to NexUP", short: "Troubleshooting steps for common login issues.", steps: ["1. Check your password for typos or caps lock.", "2. Use the 'Forgot Password' link to reset your password.", "3. Clear your browser cache and cookies, then try again."], keywords: ['login', 'sign in', 'access denied'], causes: ['Incorrect credentials.', 'VPN usage blocking access.', 'Expired session token.'] },
    { id: 'nu3', title: "NexUP website not working", short: "Solutions if the main website fails to load.", steps: ["1. Check your internet connection.", "2. Try accessing the site from a different browser.", "3. Check our status page for known outages."], keywords: ['down', 'error', 'broken'], causes: ['Local network congestion.', 'Browser incompatibility.', 'Server maintenance (check status page).'] },
    { id: 'nu4', title: "How to reset NexUP password", short: "Secure method for regaining access to your account.", steps: ["1. Navigate to the login page.", "2. Click 'Forgot Password'.", "3. Enter your email and follow the instructions sent to your inbox."], keywords: ['password reset', 'forgot credential', 'security'], causes: ['Old password stored in browser cache.', 'Spam filter blocking reset email.'] },
    { id: 'nu5', title: "Email verification not received", short: "Fixing missing confirmation emails.", steps: ["1. Check your spam or junk folder.", "2. Add 'support@nexup.io' to your safe senders list.", "3. Request a new verification email."], keywords: ['verification', 'email', 'confirm'], causes: ['Typo in email address during signup.', 'Aggressive spam filter settings.'] },
    { id: 'nu6', title: "How to change account email", short: "Updating your primary login email address.", steps: ["1. Go to Account Settings.", "2. Navigate to 'Security & Identity'.", "3. Enter the new email and confirm with a link sent to both old and new addresses."], keywords: ['update email', 'change contact'], causes: ['Failure to verify new email address.', 'Security lock preventing immediate change.'] },
    { id: 'nu7', title: "NexUP account suspended – why?", short: "Understanding and resolving an account suspension.", steps: ["1. Review our Terms of Service for common violations (e.g., spamming).", "2. Check your email for a formal notice and instructions.", "3. Reply to the support ticket referenced in the notice to appeal."], keywords: ['banned', 'suspended', 'violation'], causes: ['Violation of Terms of Service.', 'Automated flag for suspicious activity (e.g., rapid failed logins).'] },
    { id: 'nu8', title: "Supported browsers for NexUP", short: "Ensuring compatibility for optimal performance.", steps: ["1. Use the latest versions of Chrome, Firefox, Edge, or Safari.", "2. Clear cache regularly.", "3. Ensure WebGL support is enabled in your browser settings."], keywords: ['compatibility', 'browser', 'webgl'], causes: ['Outdated browser version.', 'Using a non-standard or unsupported browser.'] },
  ],
  nexworld: [
    { id: 'nw1', title: "World loads but objects are missing", short: "Immediate steps for non-loading assets.", steps: ["1. Check the Asset Manager in NexEngine to ensure objects are published.", "2. Verify asset paths in the world configuration file.", "3. Clear local world cache and try loading again."], keywords: ['assets', 'missing texture', 'geometry error'], causes: ['Asset failure during the last publish.', 'Corrupted local cache file.', 'Server-side asset linking issue.'] },
    { id: 'nw2', title: "World stuck on loading screen", short: "Troubleshooting infinite loading states.", steps: ["1. Check your internet bandwidth and stability.", "2. Disable any browser extensions that might interfere with WebGL.", "3. Try accessing the world using a different network (e.g., mobile hotspot)."], keywords: ['infinite loading', 'stuck', 'performance'], causes: ['Network bottleneck.', 'Excessive high-resolution textures in the world.', 'Insufficient local GPU memory.'] },
    { id: 'nw3', title: "Invited users cannot enter world", short: "Resolving issues with access permissions.", steps: ["1. Confirm the invited user has a valid NexUP account.", "2. Re-send the invitation link.", "3. Check the world's access list and ensure the user's ID is explicitly whitelisted."], keywords: ['invitation', 'access denied', 'permissions'], causes: ['User account is suspended.', 'Invitation link expired.', 'World capacity limit reached.'] },
    { id: 'nw4', title: "World permissions not updating", short: "Fixing delayed permission changes.", steps: ["1. Apply and save the changes in NexEngine.", "2. Wait 5 minutes for server propagation.", "3. Kick all users from the world to force a re-check of permissions upon re-entry."], keywords: ['roles', 'moderator', 'guest access'], causes: ['Server replication delay.', 'Client-side caching of old permission settings.'] },
    { id: 'nw5', title: "Public world not appearing in search", short: "Making your world discoverable.", steps: ["1. Ensure visibility settings are explicitly set to 'Public'.", "2. Add descriptive and unique tags to the world metadata.", "3. Wait 1 hour after publishing for indexing to complete."], keywords: ['discovery', 'public', 'search ranking'], causes: ['World is still marked as Private/Unlisted.', 'Missing required metadata tags.'] },
    { id: 'nw6', title: "Lag or low FPS inside world", short: "Optimizing in-world performance.", steps: ["1. Reduce graphics settings in the world menu.", "2. Check if your device meets the minimum system requirements.", "3. Identify and remove high-polygon assets using NexEngine's diagnostic tool."], keywords: ['fps', 'lagging', 'slow'], causes: ['Over-optimization of assets.', 'Outdated device drivers.', 'Too many simultaneous physics calculations in the scene.'] },
    { id: 'nw7', title: "World version mismatch issue", short: "Synchronizing client and server versions.", steps: ["1. Clear your browser or client cache.", "2. Ensure you have the latest NexUP client installed.", "3. If you are the creator, re-publish the world from the latest NexEngine version."], keywords: ['update error', 'outdated', 'sync'], causes: ['Client is running an older cached version.', 'Creator failed to finalize the latest publish build.'] },
    { id: 'nw8', title: "How to duplicate an existing world", short: "Creating a copy for testing or backup.", steps: ["1. Go to the 'My Worlds' dashboard.", "2. Select the world and choose 'Duplicate'.", "3. Give the copy a new name; the new world will be listed instantly."], keywords: ['copy world', 'backup', 'clone'], causes: ['Insufficient cloud storage space for duplication.'] },
    { id: 'nw9', title: "World deleted accidentally – recovery", short: "Steps to restore a recently deleted world.", steps: ["1. Check the 'Trash' folder in your 'My Worlds' dashboard.", "2. Select the world and click 'Restore'.", "3. Note: Worlds are permanently deleted after 30 days in the Trash."], keywords: ['restore', 'trash', 'lost world'], causes: ['Permanent deletion time limit exceeded.'] },
  ],
  nexengine: [
    { id: 'ne1', title: "Publish failed due to asset errors", short: "Troubleshooting common asset-related build issues.", steps: ["1. Verify all imported assets are fully loaded and not corrupted.", "2. Re-import or fix any assets flagged in the NexEngine console.", "3. Check file path consistency (no special characters)."], keywords: ['build failure', 'asset errors', 'compile'], causes: ['Missing dependency files.', 'Asset format incompatibility.', 'Network interruption during upload phase.'] },
    { id: 'ne2', title: "Unsupported file formats in NexEngine", short: "Understanding compatible asset types.", steps: ["1. Use recommended formats: `.gltf`/`.glb` for 3D, `.png`/`.jpg` for textures.", "2. Convert incompatible files using an external tool.", "3. Refer to the NexEngine documentation for the full list of supported formats."], keywords: ['format issue', 'import error', 'conversion'], causes: ['Attempting to import proprietary file types.', 'File size exceeding maximum limit.'] },
    { id: 'ne3', title: "Build takes too long to complete", short: "Optimizing build times for large worlds.", steps: ["1. Run NexEngine's 'Build Optimizer' tool before publishing.", "2. Reduce the complexity of lighting and shadow calculations.", "3. Ensure your local machine has sufficient RAM and SSD speed."], keywords: ['slow build', 'long wait', 'optimization'], causes: ['Excessive unoptimized geometry.', 'Running background processes consuming resources.', 'Slow connection to the build server.'] },
    { id: 'ne4', title: "AI generation not responding", short: "Fixing unresponsive generative AI tools.", steps: ["1. Check your API key status and billing information.", "2. Ensure your prompt adheres to the AI's content guidelines.", "3. Restart NexEngine and try a simpler prompt."], keywords: ['ai tool', 'generative failure', 'api error'], causes: ['Expired or invalid API key.', 'Network blocking connection to AI services.', 'Overly complex or ambiguous prompt input.'] },
    { id: 'ne5', title: "Version compatibility issues", short: "Resolving conflicts between NexEngine versions.", steps: ["1. Always use the latest stable version of NexEngine.", "2. Do not mix assets from different major engine versions.", "3. If a project opens in an older version, immediately upgrade and re-save it."], keywords: ['update conflict', 'downgrade', 'legacy project'], causes: ['Opening a project saved in a newer engine version.', 'Automatic project file corruption during an update.'] },
    { id: 'ne6', title: "Import errors from external tools", short: "Troubleshooting assets prepared in third-party software.", steps: ["1. Ensure the asset is correctly exported as `.gltf`.", "2. Check that all materials and textures are properly embedded or linked.", "3. Reduce polygon count and re-export."], keywords: ['blender import', 'fbx error', 'external asset'], causes: ['Incorrect scale or rotation during export.', 'Missing textures not exported with the model.'] },
    { id: 'ne7', title: "How to optimize worlds before publish", short: "Essential steps for best performance.", steps: ["1. Merge unnecessary meshes to reduce draw calls.", "2. Use texture atlases instead of multiple small textures.", "3. Cull objects that are out of the camera's view (frustum culling)."], keywords: ['optimization guide', 'performance tips', 'build quality'], causes: ['High draw calls.', 'Excessive light sources.', 'Lack of LOD (Level of Detail) implementation.'] },
    { id: 'ne8', title: "Engine crashes on startup", short: "Immediate solutions for application failure.", steps: ["1. Check your GPU driver version and update if necessary.", "2. Try running NexEngine in safe mode.", "3. Delete the configuration file (usually in the AppData folder) and restart."], keywords: ['crash', 'startup error', 'application fail'], causes: ['Corrupted configuration file.', 'Incompatible GPU drivers.', 'Insufficient power supply or overheating.'] },
    { id: 'ne9', title: "Permission denied during publish", short: "Fixing access issues when saving or uploading.", steps: ["1. Run NexEngine as Administrator.", "2. Check your firewall/antivirus settings for blocking access.", "3. Ensure the project folder is not marked as 'read-only' in your OS."], keywords: ['access error', 'read only', 'upload fail'], causes: ['OS locking the project files.', 'Antivirus software interference.', 'Incorrect user permissions on the destination folder.'] },
    { id: 'ne10', title: "Recommended system requirements", short: "Hardware specifications for smooth operation.", steps: ["1. Verify your CPU meets or exceeds the minimum spec.", "2. Ensure you have a dedicated GPU with modern drivers.", "3. Check RAM (16GB minimum recommended for development)."], keywords: ['specs', 'hardware', 'requirements'], causes: ['Using integrated graphics instead of dedicated GPU.', 'Running out of physical memory (RAM).'] },
  ],
  nexhousing: [
    { id: 'nh1', title: "What happens when subscription expires", short: "Consequences of an inactive NexHousing subscription.", steps: ["1. Access to your custom space will be revoked (read-only mode).", "2. Your layout and custom assets will be saved for 90 days.", "3. After 90 days, your space will be cleared, and assets archived."], keywords: ['expiry', 'cancellation', 'lost data'], causes: ['Failed payment transaction.', 'Automatic renewal disabled.'] },
    { id: 'nh2', title: "Housing space limit reached", short: "Solutions for managing storage capacity.", steps: ["1. Purchase a higher-tier subscription for increased space.", "2. Delete unused or temporary assets from your housing inventory.", "3. Optimize textures and models to reduce file sizes."], keywords: ['storage full', 'capacity', 'upgrade'], causes: ['Too many high-resolution assets.', 'Storing multiple unused backup layouts.'] },
    { id: 'nh3', title: "Transfer housing ownership", short: "Process for moving ownership to another NexUP user.", steps: ["1. Ensure the recipient has an active NexHousing subscription.", "2. Go to the Housing Management tab and select 'Transfer Ownership'.", "3. Enter the recipient's NexUP ID and confirm the transfer via email."], keywords: ['sell home', 'change owner', 'give access'], causes: ["Recipient's account is not eligible for housing ownership.", 'Pending legal or financial dispute on the property.'] }, // <-- COMMA ADDED HERE
    { id: 'nh4', title: "Shared housing access issues", short: "Fixing problems when inviting others to your space.", steps: ["1. Confirm the invited user accepted the shared access link.", "2. Check the specific permissions granted (View, Modify, Admin).", "3. Ensure your housing is not set to 'Private - Creator Only'."], keywords: ['guest access', 'sharing', 'friend entry'], causes: ['The invite link expired.', 'User was blocked previously.', 'Incorrect permission levels set.'] },
    { id: 'nh5', title: "Housing not syncing with world", short: "Resolving inconsistencies between home and world view.", steps: ["1. Force a manual sync in the Housing Management panel.", "2. Clear your local NexUP cache.", "3. Check for any pending world updates that might affect housing integrity."], keywords: ['sync error', 'data mismatch', 'old version'], causes: ['World server is under heavy load.', 'Unstable internet connection during the save process.'] },
    { id: 'nh6', title: "Privacy settings for housing", short: "Controlling visibility and access to your space.", steps: ["1. Navigate to the 'Privacy and Security' menu.", "2. Choose from Public, Shared (Invite Only), or Private (Creator Only).", "3. Save settings; changes are effective immediately."], keywords: ['security', 'private mode', 'visibility'], causes: ['Conflicting permissions set by a co-administrator.'] },
    { id: 'nh7', title: "Temporary vs permanent housing", short: "Understanding the different types of allocated space.", steps: ["1. Temporary housing is granted for trials and events and expires after 7 days.", "2. Permanent housing requires an active subscription or lifetime license.", "3. You cannot transfer assets out of temporary housing."], keywords: ['trial period', 'license type', 'limited access'], causes: ['Trial period ended.', 'License key not properly applied to account.'] },
    { id: 'nh8', title: "Reset housing layout", short: "Reverting your space to the default template.", steps: ["1. Go to Housing Management.", "2. Select 'Reset Layout to Default'.", "3. WARNING: This action cannot be undone and deletes all custom placed assets."], keywords: ['factory reset', 'delete layout', 'start over'], causes: ['Accidental button press (requires secondary confirmation).'] },
  ],
};

const productSections = [
  { id: 'nexup', title: 'NexUP (Website & Account)', icon: FiGlobe },
  { id: 'nexworld', title: 'NexWorld', icon: FiHome },
  { id: 'nexengine', title: 'NexEngine', icon: FiTool },
  { id: 'nexhousing', title: 'NexHousing', icon: FiMenu },
];

const popularQuestions = [
    { text: "World loads but objects are missing", targetId: 'nw1' },
    { text: "Publish failed due to asset errors", targetId: 'ne1' },
    { text: "I can't log in to NexUP", targetId: 'nu2' },
    { text: "Invited users cannot enter world", targetId: 'nw3' },
    { text: "Lag or low FPS inside world", targetId: 'nw6' },
];


// --- Sub-Components ---

// 3. Article Layout
const ArticleView = ({ article, onBack, onArticleClick }) => (
  <div className="help-article help-glass-panel">
    <button className="help-back-button" onClick={onBack}>
      <FiChevronLeft size={20} /> Back to Help Center
    </button>
    <h1 className="help-article-title">{article.title}</h1>
    <p className="help-article-short-explanation">{article.short}</p>

    <hr className="help-article-divider" />

    <div className="help-article-steps-section">
      <h3 className="help-article-steps-heading help-gradient-text">Steps to fix / understand</h3>
      <ul className="help-article-steps-list">
        {article.steps.map((step, index) => (
          <li key={index}>
            <FaCheck className="help-check-icon" />
            {step}
          </li>
        ))}
      </ul>
    </div>

    <hr className="help-article-divider" />
    
    {/* 4. ARTICLE UX IMPROVEMENT: Common Causes Block */}
    <div className="help-article-common-causes">
        <h3 className="help-causes-heading"><FiHash size={18} /> Common Causes</h3>
        <ul className="help-causes-list">
            {article.causes.map((cause, index) => (
                <li key={index}>{cause}</li>
            ))}
        </ul>
    </div>
    
    <hr className="help-article-divider" />

    {/* 5. CONTACT CTA LOGIC: Show only inside article bottom */}
    <div className="help-article-contact-prompt">
      <p>
        **If this didn't solve your issue,** we're here to help.
      </p>
      <button className="help-contact-button help-glow-trail-btn" onClick={() => onBack('contact')}>
        Contact NexUP Support
      </button>
    </div>
  </div>
);

// 4. Contact Support Form (Kept the same structure/classes from last iteration)
const ContactForm = ({ onBack }) => {
  const [formData, setFormData] = useState({
    name: '', email: '', product: 'NexUP', issue: '', attachment: null,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeInput, setActiveInput] = useState(null);
  const formRef = useRef(null);
  const glowRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
        console.log("Submitting form:", formData); 
        setIsLoading(false);
        setIsSubmitted(true);
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({ ...prev, [name]: files ? files[0] : value, }));
  };

  const handleMouseMove = (e) => {
    if (formRef.current && glowRef.current) {
        const rect = formRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        glowRef.current.style.transform = `translate(calc(${x}px - 75px), calc(${y}px - 75px))`; 
    }
  };


  if (isSubmitted) {
    return (
      <div className="help-contact-form-container submitted help-glass-panel">
        <h2 className="help-form-heading help-gradient-text">✅ Request Acknowledged</h2>
        <p>Your support request has been successfully submitted. We will connect you to an agent shortly.</p>
        <button className="help-back-button" onClick={() => onBack()}>
          <FiChevronLeft size={20} /> Back to Help Center
        </button>
      </div>
    );
  }

  return (
    <div className="help-contact-form-container help-glass-panel" ref={formRef} onMouseMove={handleMouseMove}>
      <div className="help-glow-top" />
      <div className="help-glow-bottom" />
      <div className="help-holo-sheen" />

      <button className="help-back-button" onClick={() => onBack()}>
        <FiChevronLeft size={20} /> Back to Help Center
      </button>
      <div className="help-auth-header">
        <h2>Initiate Support Protocol</h2>
        <p>Log your issue for immediate processing by the NexUP AI core.</p>
      </div>
      
      <form onSubmit={handleSubmit} className="help-auth-form">
        
        <div className={`help-input-group ${activeInput === 'name' ? 'focus' : ''}`}>
            <FiUser className="help-input-icon" />
            <input 
                type="text" 
                name="name" 
                placeholder="Name"
                value={formData.name} 
                onChange={handleChange} 
                onFocus={() => setActiveInput('name')}
                onBlur={() => setActiveInput(null)}
                required 
            />
            <div className="help-input-border-glow"></div>
        </div>
        
        <div className={`help-input-group ${activeInput === 'email' ? 'focus' : ''}`}>
            <FiMail className="help-input-icon" />
            <input 
                type="email" 
                name="email" 
                placeholder="Email Address"
                value={formData.email} 
                onChange={handleChange} 
                onFocus={() => setActiveInput('email')}
                onBlur={() => setActiveInput(null)}
                required 
            />
            <div className="help-input-border-glow"></div>
        </div>
        
        <div className={`help-input-group help-select-group ${activeInput === 'product' ? 'focus' : ''}`}>
            <FiClipboard className="help-input-icon" />
            <select 
                name="product" 
                value={formData.product} 
                onChange={handleChange} 
                onFocus={() => setActiveInput('product')}
                onBlur={() => setActiveInput(null)}
                required
            >
                <option value="NexUP">NexUP (Website & Account)</option>
                <option value="NexWorld">NexWorld</option>
                <option value="NexEngine">NexEngine</option>
                <option value="NexHousing">NexHousing</option>
            </select>
            <div className="help-input-border-glow"></div>
        </div>
        
        <div className={`help-input-group help-textarea-group ${activeInput === 'issue' ? 'focus' : ''}`}>
            <FiMessageSquare className="help-input-icon" style={{top: '18px', transform: 'none'}} />
            <textarea 
                name="issue" 
                placeholder="Issue description"
                value={formData.issue} 
                onChange={handleChange} 
                onFocus={() => setActiveInput('issue')}
                onBlur={() => setActiveInput(null)}
                rows="5" 
                style={{paddingLeft: '44px', paddingTop: '14px'}}
                required
            ></textarea>
            <div className="help-input-border-glow"></div>
        </div>
        
        <div className="help-input-group help-file-upload-group">
            <label className="help-file-upload-label">
                <FiFile size={16} /> Attachment (Optional)
                <input type="file" name="attachment" onChange={handleChange} />
            </label>
        </div>
        
        <button type="submit" className="help-glow-trail-btn" disabled={isLoading}>
            <span 
                className="help-glow-effect" 
                ref={glowRef} 
                style={{
                    transform: 'translate(-50%, -50%)', 
                    transition: 'transform 0.1s ease-out'
                }} 
            />
            {isLoading ? (
                <>
                    <FiLoader className="help-spinner" /> 
                    Processing Data...
                </>
            ) : (
                'Contact NexUP Support'
            )}
        </button>
      </form>
    </div>
  );
};


// --- Main Component ---

const Help = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSection, setActiveSection] = useState('nexup');
  const [activeArticle, setActiveArticle] = useState(null); 
  const [showContact, setShowContact] = useState(false);
  const [isTyping, setIsTyping] = useState(true); 

  // --- Logic for Sidebar Count & Article Grouping ---
  const articleCounts = useMemo(() => {
    return productSections.reduce((acc, section) => {
        acc[section.id] = (mockArticles[section.id] || []).length;
        return acc;
    }, {});
  }, []);

  const getArticleById = (id) => {
    for (const key in mockArticles) {
        const article = mockArticles[key].find(a => a.id === id);
        if (article) return article;
    }
    return null;
  };

  // --- Logic Fix: Determine which articles to display ---
  let sectionsToRender = useMemo(() => {
    let isSearchMode = searchTerm.length > 0;
    const lowerSearchTerm = searchTerm.toLowerCase();

    if (isSearchMode) {
      // Search Mode: Filter articles across ALL sections based on search term
      return productSections.map(section => {
        const articles = mockArticles[section.id] || [];
        return {
          ...section,
          articles: articles.filter(article => {
            const matchesTitle = article.title.toLowerCase().includes(lowerSearchTerm);
            const matchesShort = article.short.toLowerCase().includes(lowerSearchTerm);
            const matchesSteps = article.steps.some(step => step.toLowerCase().includes(lowerSearchTerm));
            const matchesKeywords = article.keywords && article.keywords.some(k => k.toLowerCase().includes(lowerSearchTerm));

            return matchesTitle || matchesShort || matchesSteps || matchesKeywords;
          }),
        };
      }).filter(section => section.articles.length > 0);
    } else {
      // Normal Mode: Show articles ONLY for the active sidebar section
      const activeData = productSections.find(s => s.id === activeSection);
      if (activeData) {
        return [{ 
          ...activeData, 
          articles: mockArticles[activeSection] || [] 
        }];
      }
      return [];
    }
  }, [searchTerm, activeSection]);


  const handleBack = (mode) => {
    if (mode === 'contact') {
      setShowContact(true);
      setActiveArticle(null); 
    } else {
      setActiveArticle(null);
      setShowContact(false);
    }
  };
  
  const handlePopularQuestionClick = (targetId) => {
    setSearchTerm(''); // Clear search just in case
    const article = getArticleById(targetId);
    if (article) {
        setActiveArticle(article);
        // Find the product id and set active section for visual consistency
        const sectionId = productSections.find(s => mockArticles[s.id].some(a => a.id === targetId))?.id;
        if (sectionId) setActiveSection(sectionId);
    }
  }


  useEffect(() => {
    // 6. REMOVE / DELAY LOGIC
    const introSeen = localStorage.getItem("helpIntroSeen");
    if (introSeen) {
        setIsTyping(false);
        return;
    }

    const timer = setTimeout(() => {
        setIsTyping(false);
        localStorage.setItem("helpIntroSeen", true);
    }, 1500); 
    return () => clearTimeout(timer);
  }, []);


  // --- Conditional Renders ---
  
  if (showContact) {
    return <ContactForm onBack={handleBack} />;
  }

  if (activeArticle) {
    return (
        <div className="help-page help-article-view">
            <div className="help-cyber-grid" />
            <div className="help-glow-top" />
            <div className="help-glow-bottom" />
            <ArticleView article={activeArticle} onBack={handleBack} onArticleClick={handlePopularQuestionClick} />
        </div>
    );
  }

  if (isTyping) {
    return (
        <div className="help-ai-greeting-screen">
            <p className="help-ai-text">
                <span className="help-typing-effect">
                    [System Status: Online] Initializing NexUP Help Protocol...
                </span>
            </p>
            <div className="help-loader-line"></div>
            <button className="help-skip-btn" onClick={() => { setIsTyping(false); localStorage.setItem("helpIntroSeen", true); }}>
                Skip 
            </button>
        </div>
    );
  }

  // --- Main Help Center View ---

  return (
    <div className="help-page">
      <div className="help-cyber-grid" />
      <div className="help-glow-top" />
      <div className="help-glow-bottom" />

      <div className="help-center-container">
        
        {/* Header and Search */}
        <header className="help-header">
          <h1 className="help-title">
            NexUP <span className="help-gradient-text">Help Center</span>
          </h1>
          <p className="help-sub">
            Access the knowledge base. Find solutions, connect to support, and optimize your experience.
          </p>
          <div className="help-search-bar-container help-glass-panel">
            <FiSearch className="help-search-icon" size={20} />
            <input
              type="text"
              placeholder="Search steps, causes, or keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="help-search-input"
            />
          </div>
        </header>
        
        {/* OPTIONAL: POPULAR QUESTIONS */}
        <div className="help-popular-questions">
            <h3 className="help-popular-heading">Popular Questions</h3>
            <div className="help-popular-grid">
                {popularQuestions.map((q, index) => (
                    <div 
                        key={index} 
                        className="help-popular-link help-glass-panel"
                        onClick={() => handlePopularQuestionClick(q.targetId)}
                    >
                        {q.text}
                    </div>
                ))}
            </div>
        </div>


        {/* Main Content (Flex Layout) */}
        <div className="help-content-wrapper-flex">
          
          <aside className="help-product-sidebar help-glass-panel">
            <h2 className="help-sidebar-heading help-gradient-text">Products</h2>
            {productSections.map(section => {
              const IconComponent = section.icon; 
              const count = articleCounts[section.id];
              return (
                <button
                  key={section.id}
                  className={`help-sidebar-item ${activeSection === section.id && !searchTerm ? 'active' : ''}`}
                  onClick={() => {
                    setActiveSection(section.id);
                    setSearchTerm(''); // Clear search when selecting a new category
                  }}
                >
                  <IconComponent size={20} />
                  <span>{section.title.split('(')[0].trim()} ({count})</span> 
                </button>
              );
            })}
          </aside>

          <main className="help-articles-main">
            
            {searchTerm.length > 0 && (
                <h2 className="help-articles-heading">
                    <FiSearch size={20} className="help-section-icon" />
                    Search Results for <span className="help-gradient-text">"{searchTerm}"</span>
                </h2>
            )}

            {/* Render Articles */}
            {sectionsToRender.map(section => {
              const SectionIcon = section.icon;
              
              return (
                <div key={section.id} className="help-section-block help-glass-panel">
                  <h2 className="help-section-title">
                    <SectionIcon size={24} className="help-section-icon" />
                    <span className="help-gradient-text">{section.title}</span>
                  </h2>
                  <div className="help-articles-list">
                    {section.articles.map(article => (
                      <div 
                        key={article.id} 
                        className="help-article-link" 
                        onClick={() => setActiveArticle(article)}
                      >
                        {article.title}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
            
            {sectionsToRender.length === 0 && searchTerm.length > 0 && (
                <div className="help-no-results-message">
                    <FiX size={30} style={{color: '#FF3B30'}} />
                    <p>No results found for "<span className="help-gradient-text">{searchTerm}</span>". Try refining your search or contact support.</p>
                </div>
            )}

            {/* 5. CONTACT CTA LOGIC: Removed from landing page, only in articles/no-search */}
            {sectionsToRender.length === 0 && searchTerm.length > 0 && (
                <div className="help-contact-support-main-cta help-glass-panel">
                    <FiMessageSquare size={30} className="help-check-icon help-pulse" />
                    <p>Did not find what you need? We can help you directly.</p>
                    <button className="help-contact-button help-glow-trail-btn" onClick={() => setShowContact(true)}>
                        Contact NexUP Support
                    </button>
                </div>
            )}
          </main>
        </div>
     <Footer />
      </div>
    </div>
  );
};

export default Help;