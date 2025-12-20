import React from 'react';
// Assuming the provided CSS file exists in the specified path
import '../../page-styles/About/Stories.css'; 
import Footer from '../../components/Footer/Footer';

// Component for a reusable section block
const StorySection = ({ title, children }) => (
  <section className="story-section">
    <h3 className="section-title">{title}</h3>
    {children}
  </section>
);

const StoriesPage = () => {
  return (
    // The main container uses a dark-themed class for the OpenAI-inspired look
    <div className="stories-page-container">
      <header className="stories-header">
        <h1 className="page-main-title">Stories</h1>
        <p className="page-subtitle">Real Experiences from the NexUP Journey</p>
      </header>

      <main className="stories-content">
        <p className="intro-paragraph">
          The NexUP Stories page is a space for human narratives — stories of building, learning, experimenting, and growing alongside the NexUP ecosystem.
          These stories reflect the process, not just the outcomes.
        </p>

        <StorySection title="Purpose of the Stories Page">
          <p>Stories exist to:</p>
          <ul className="story-list">
            <li>Share real journeys behind the platform</li>
            <li>Highlight people, not just technology</li>
            <li>Capture lessons learned along the way</li>
            <li>Show how NexUP is evolving through experience</li>
            <li>Inspire thoughtful engagement, not hype</li>
          </ul>
          <p className="note-emphasis">This page values **authenticity** over perfection.</p>
        </StorySection>

        <StorySection title="What You’ll Find Here">
          {/* --- Builder Stories --- */}
          <h4 className="subsection-title">Builder Stories</h4>
          <p>Experiences from people who are:</p>
          <ul className="story-list">
            <li>Designing systems</li>
            <li>Writing code</li>
            <li>Creating worlds</li>
            <li>Solving hard problems</li>
            <li>Learning through iteration</li>
          </ul>
          <p className="detail-text">These stories focus on **how** things are built, not just **what** is built.</p>

          {/* --- Creator & Explorer Stories --- */}
          <h4 className="subsection-title">Creator & Explorer Stories</h4>
          <p>Stories from users, creators, or early contributors who:</p>
          <ul className="story-list">
            <li>Experiment with NexUP tools</li>
            <li>Explore NexWorld concepts</li>
            <li>Build digital spaces or ideas</li>
            <li>Learn new ways of working and thinking</li>
          </ul>
          <p className="detail-text">These reflect discovery and creativity.</p>

          {/* --- Learning & Growth Stories --- */}
          <h4 className="subsection-title">Learning & Growth Stories</h4>
          <p>Narratives about:</p>
          <ul className="story-list">
            <li>Mistakes and lessons</li>
            <li>Challenges faced during development</li>
            <li>Decisions that shaped the platform</li>
            <li>Changes in thinking over time</li>
          </ul>
          <p className="detail-text">Growth is rarely linear — these stories reflect that **honestly**.</p>

          {/* --- Community Stories --- */}
          <h4 className="subsection-title">Community Stories</h4>
          <p>Stories highlighting:</p>
          <ul className="story-list">
            <li>Collaboration</li>
            <li>Shared problem-solving</li>
            <li>Community discussions</li>
            <li>Collective learning moments</li>
          </ul>
          <p className="detail-text">They show NexUP as a **shared effort**, not a closed system.</p>
        </StorySection>

        <StorySection title="What Stories Are Not">
          <p>To keep this page meaningful, Stories are not:</p>
          <ul className="story-list list-negative">
            <li>Marketing testimonials</li>
            <li>Promotional success claims</li>
            <li>Sales-driven narratives</li>
            <li>Announcements or press releases</li>
            <li>Pure opinion pieces without experience</li>
          </ul>
          <p className="note-emphasis">Stories must be **grounded in real experience**.</p>
        </StorySection>

        <StorySection title="Story Tone & Style">
          <p>All stories on NexUP follow these principles:</p>
          <ul className="story-list">
            <li>**Honest** and reflective</li>
            <li>Written in **clear, human language**</li>
            <li>Focused on **learning and insight**</li>
            <li>Respectful of privacy and context</li>
            <li>Free from exaggeration or hype</li>
          </ul>
          <p className="detail-text">Uncertainty and questions are welcome.</p>
        </StorySection>

        <StorySection title="Who Can Share Stories">
          <p>Stories may come from:</p>
          <ul className="story-list">
            <li>NexUP team members</li>
            <li>Builders and developers</li>
            <li>Designers and researchers</li>
            <li>Early users or contributors</li>
            <li>Collaborators aligned with NexUP values</li>
          </ul>
          <p className="detail-text">Not every story needs to be public — only those that add value and clarity.</p>
        </StorySection>

        <StorySection title="Review & Responsibility">
          <p>To maintain trust:</p>
          <ul className="story-list">
            <li>Stories are reviewed before publishing</li>
            <li>Sensitive details are handled carefully</li>
            <li>Personal data is protected</li>
            <li>Misleading or harmful content is not published</li>
          </ul>
          <p className="detail-text">Storytelling is treated as a **responsibility**.</p>
        </StorySection>
        
        <StorySection title="How Stories Support the Vision">
          <p>Stories help NexUP by:</p>
          <ul className="story-list">
            <li>Making abstract ideas concrete</li>
            <li>Showing the human side of technology</li>
            <li>Building trust through transparency</li>
            <li>Preserving institutional memory</li>
            <li>Encouraging thoughtful participation</li>
          </ul>
          <p className="detail-text">They act as a **living archive** of the journey.</p>
        </StorySection>

        <StorySection title="Future Direction">
          <p>As NexUP grows, the Stories page may expand to include:</p>
          <ul className="story-list">
            <li>Long-form narratives</li>
            <li>Visual or spatial storytelling</li>
            <li>In-world stories from NexWorld</li>
            <li>Reflections on major milestones</li>
            <li>Curated story collections</li>
          </ul>
          <p className="detail-text">The format may evolve, but the purpose remains the same.</p>
        </StorySection>

        <div className="final-note-block">
          <p>
            Technology shapes the future — but stories remind us **why** and **for whom** we build.
            The NexUP Stories page exists to capture those moments honestly, thoughtfully, and responsibly.
          </p>
        </div>
      </main>

      {/* Optional Footer Line */}
      <div className="footer-line-optional">
        Stories — Real journeys, real learning, from the NexUP ecosystem.
      </div>

      <Footer />
    </div>
  );
};
 export default StoriesPage;