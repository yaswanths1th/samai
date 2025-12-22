import { Link } from "react-router-dom";
import "../styles/home.css";
import {
  FiSettings,
  FiMessageSquare,
  FiBarChart2,
  FiTrendingUp,
} from "react-icons/fi";

import CapabilitiesSection from "../components/CapabilitiesSection";
import FeatureShowcase from "../components/FeatureShowcase";
import ProcessBridge from "../components/ProcessBridge";

export default function Home() {
  return (
    <main className="home">
      {/* ================= HERO ================= */}
      <section className="hero-section reveal">
        <div className="hero-content">
          <span className="hero-eyebrow reveal delay-1">
            Business Process Intelligence
          </span>

          <h1 className="reveal delay-2">
            Design, automate, and orchestrate <br />
            <span>business processes</span> with clarity
          </h1>

          <p className="hero-subtitle reveal delay-3">
            Samai is a modern platform that brings workflow modeling,
            orchestration, AI-driven context, and real-time analytics together —
            so organizations can execute processes with confidence.
          </p>

          <div className="hero-actions reveal delay-4">
            <Link to="/schedule-demo" className="btn-primary">
              Schedule a Demo
            </Link>

            <Link to="/product" className="btn-secondary">
              Explore Product
            </Link>
          </div>
        </div>

        {/* ================= VALUE STRIP ================= */}
        <div className="value-strip">
          <div className="value-item reveal delay-1">
            <FiSettings className="value-icon" />
            <strong>Digitalise Business Functions</strong>
            <span>
              Transform manual, fragmented activities into streamlined,
              software-driven workflows that run faster and smarter.
            </span>
          </div>

          <div className="value-item reveal delay-2">
            <FiMessageSquare className="value-icon" />
            <strong>Communicate with Context</strong>
            <span>
              Enable conversations enriched with process data, history,
              and decisions — so everyone understands the what, why, and next.
            </span>
          </div>

          <div className="value-item reveal delay-3">
            <FiBarChart2 className="value-icon" />
            <strong>Manage with Efficiency</strong>
            <span>
              Streamline oversight and execution with tools that reduce effort,
              eliminate waste, and keep work moving forward.
            </span>
          </div>

          <div className="value-item reveal delay-4">
            <FiTrendingUp className="value-icon" />
            <strong>Scale with Confidence</strong>
            <span>
              Grow operations, users, and complexity without losing control,
              clarity, or reliability.
            </span>
          </div>
        </div>
      </section>

      {/* ================= WHAT SAMAI ENABLES ================= */}
      <section className="reveal">
        <CapabilitiesSection />
      </section>

      {/* ================= PROCESS BRIDGE ================= */}
      <section className="reveal">
        <ProcessBridge />
      </section>

      {/* ================= FEATURE SHOWCASE ================= */}
      <section className="reveal">
        <FeatureShowcase />
      </section>
    </main>
  );
}

/* ================= LOCAL COMPONENTS ================= */

function Problem({ title, desc }) {
  return (
    <div className="problem-card reveal">
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  );
}
