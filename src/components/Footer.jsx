import { Link } from "react-router-dom";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        
        {/* Brand */}
        <div className="footer-column">
          <h3 className="footer-logo">Samai</h3>
          <p className="footer-desc">
            A modern business process modeling platform for clarity,
            automation, and operational intelligence.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/product">Product</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/schedule-demo">Schedule Demo</Link></li>
            <li><Link to="/connect">Contact</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/security">Security</Link></li>
            <li><Link to="/support">Support</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div className="footer-column">
          <h4>Connect With Us</h4>
          <div className="footer-socials">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="mailto:info@samai.ai">Gmail</a>
            <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Samai. All rights reserved.
      </div>
    </footer>
  );
}
