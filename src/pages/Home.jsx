import { Link } from "react-router-dom";
import "../styles/home.css";

export default function Home() {
  return (
    <>
      <main className="home">
        {/* Hero */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>
              Design, automate, and orchestrate <br />
              <span>business processes</span> with clarity
            </h1>

            <p>
              Samai is a context-aware business process management platform that
              helps organizations digitize workflows, coordinate decisions, and
              gain real-time operational intelligence.
            </p>

            <div className="hero-actions">
              <Link to="/schedule-demo" className="btn-primary">
                Schedule a Demo
              </Link>

              <Link to="/product" className="btn-secondary">
                Explore Product
              </Link>
            </div>
          </div>
        </section>

        {/* Problems */}
        <section className="problems-section">
          <h2>Why businesses struggle with processes</h2>
          <ul className="problem-list">
            <li>Manual approvals slow down operations</li>
            <li>Disconnected systems create data silos</li>
            <li>No visibility into who is doing what and why</li>
            <li>Decisions are made without process context</li>
          </ul>
        </section>

        {/* Capabilities */}
        <section className="capabilities-section">
          <h2>What Samai enables</h2>

          {/* AUTO SCROLL CONTAINER */}
          <div className="capability-grid auto-scroll">
            {/* original cards */}
            <Capability title="Digitalise Business Functions" />
            <Capability title="Communicate with Context" />
            <Capability title="Orchestrate Business Processes" />
            <Capability title="Analyze, Predict, and Act" />

            {/* duplicate cards for infinite scroll */}
            <Capability title="Digitalise Business Functions" />
            <Capability title="Communicate with Context" />
            <Capability title="Orchestrate Business Processes" />
            <Capability title="Analyze, Predict, and Act" />
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
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
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href="mailto:info@samai.ai">
                Gmail
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                Facebook
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                Twitter
              </a>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} Samai. All rights reserved.
        </div>
      </footer>
    </>
  );
}

/* Small helper component */
function Capability({ title }) {
  return (
    <div className="capability-card">
      <h3>{title}</h3>
      <p>
        Transform manual activities into intelligent, traceable,
        and automated business workflows.
      </p>
    </div>
  );
}
