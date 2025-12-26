import { Link } from "react-router-dom";

import {
  FiSettings,
  FiMessageSquare,
  FiBarChart2,
  FiTrendingUp,
} from "react-icons/fi";

import CapabilitiesSection from "../components/CapabilitiesSection";
import FeatureShowcase from "../components/FeatureShowcase";
import ProcessBridge from "../components/ProcessBridge";

import "../styles/global.css";

export default function Home() {
  return (
    <main className="home">

      {/* ================= HERO ================= */}
      <section className="hero-section">
        <div className="hero-grid">

          {/* LEFT */}
          <div className="hero-content">
            <span className="hero-eyebrow">
              Business Process Intelligence
            </span>

            <h1>
              Empower Your <br />
              <span>Business </span> to break Barriers
            </h1>

            <p className="hero-subtitle">
              Unleash your full potential to innovate, adapt, and transform confidently and at scale
            </p>

            <div className="hero-actions">
              <Link to="/schedule-demo" className="btn btn-primary">
                Schedule a demo
              </Link>
              <Link to="/product" className="btn btn-secondary">
                Explore product
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hero-visual">
            <img
              src="/images/hero-dashboard.png"
              alt="Samai platform overview"
            />
          </div>
        </div>
      </section>

      {/* ================= VALUE STRIP ================= */}
      <section className="value-section">
        <div className="value-strip">

          <div className="value-item">
            <FiSettings className="value-icon" />
            <strong>Digitalise Business Functions</strong>
            <span>
              Transform manual, fragmented activities into streamlined,
              software-driven workflows.
            </span>
          </div>

          <div className="value-item">
            <FiMessageSquare className="value-icon" />
            <strong>Communicate with Context</strong>
            <span>
              Enable conversations enriched with process data, history,
              and decisions.
            </span>
          </div>

          <div className="value-item">
            <FiBarChart2 className="value-icon" />
            <strong>Manage with Efficiency</strong>
            <span>
              Streamline oversight and execution while reducing effort
              and waste.
            </span>
          </div>

          <div className="value-item">
            <FiTrendingUp className="value-icon" />
            <strong>Scale with Confidence</strong>
            <span>
              Grow operations and complexity without losing control
              or clarity.
            </span>
          </div>

        </div>
      </section>

      {/* ================= FEATURE SHOWCASE ================= */}
      <FeatureShowcase />

      {/* ================= PROCESS BRIDGE ================= */}
      <ProcessBridge />

      {/* ================= CAPABILITIES ================= */}
      <CapabilitiesSection />

    </main>
  );
}
