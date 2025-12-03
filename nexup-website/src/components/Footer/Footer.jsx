import { Link } from "react-router-dom";
import {
  FaYoutube,
  FaGithub,
  FaInstagram,
  FaXTwitter,
  FaSnapchat,
  FaLinkedin
} from "react-icons/fa6";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="nx-footer">

      <div className="nx-footer-wrapper">

        {/* NexUP Brand Section */}
        <div className="nx-footer-brand">
          <h3>NexUP</h3>
          <p>
            A unified platform for next-generation AR, VR and intelligent digital ecosystems.
          </p>
        </div>

        {/* Footer Columns */}
        <div className="nx-footer-columns">

          {/* Ecosystem */}
          <div className="nx-col">
            <h4>Ecosystem</h4>
            <Link to="/ecosystem/nexworld">NexWorld</Link>
            <Link to="/ecosystem/nexnodes">NexNode</Link>
            <Link to="/ecosystem/nexengine">NexEngine</Link>
            <Link to="/ecosystem/nexhousing">NexHousing</Link>
            <Link to="/ecosystem/Nexsearch">NexSearch Engine</Link>
          </div>

          {/* About */}
          <div className="nx-col">
            <h4>About</h4>
            <Link to="/about/vision">Vision</Link>
            <Link to="/about/team">Team</Link>
            <Link to="/about/stories">Stories</Link>
            <Link to="/about/company">Company</Link>
            <Link to="/about/career">Careers</Link>
            <Link to="/about/news">News</Link>
          </div>

          {/* Support */}
          <div className="nx-col">
            <h4>Support</h4>
            <Link to="/support/guidelines">Guidelines</Link>
            <Link to="/support/help">Help / Support</Link>
            <Link to="/contact">Contact</Link>
          </div>

          {/* Account */}
          <div className="nx-col">
            <h4>Account</h4>
            <Link to="/login">Login</Link>
            <Link to="/dns">DNS</Link>
            <Link to="/search">Global Search</Link>
          </div>

          {/* Safety */}
          <div className="nx-col">
            <h4>Safety</h4>
            <Link to="/safety/approach">Safety Approach</Link>
            <Link to="/safety/privacy">Privacy</Link>
            <Link to="/safety/trust">Trust</Link>
            <Link to="/safety/transparency">Transparency</Link>
          </div>

        </div>

        {/* Social Icons */}
        <div className="nx-footer-social">
  <a
    href="https://youtube.com"
    target="_blank"
    rel="noopener noreferrer"
    className="youtube"
  >
    <FaYoutube />
  </a>

  <a
    href="https://github.com"
    target="_blank"
    rel="noopener noreferrer"
    className="github"
  >
    <FaGithub />
  </a>

  <a
    href="https://instagram.com"
    target="_blank"
    rel="noopener noreferrer"
    className="instagram"
  >
    <FaInstagram />
  </a>

  <a
    href="https://twitter.com"
    target="_blank"
    rel="noopener noreferrer"
    className="x"
  >
    <FaXTwitter />
  </a>

  <a
    href="https://snapchat.com"
    target="_blank"
    rel="noopener noreferrer"
    className="snapchat"
  >
    <FaSnapchat />
  </a>

  <a
    href="https://linkedin.com"
    target="_blank"
    rel="noopener noreferrer"
    className="linkedin"
  >
    <FaLinkedin />
  </a>
</div>



      </div>

      <div className="nx-footer-bottom">
        © {new Date().getFullYear()} NexUP. Designed for a connected digital future.
      </div>

    </footer>
  );
}
