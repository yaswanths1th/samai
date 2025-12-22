import { Link } from "react-router-dom";
import "../styles/home.css";

export default function Home() {
  return (
    <main className="home">

      {/* ================= HERO ================= */}
      <section className="hero-section">
        <div className="hero-content">
          <span className="hero-eyebrow">Business Process Intelligence</span>

          <h1>
            Design, automate, and orchestrate <br />
            <span>business processes</span> with clarity
          </h1>

          <p className="hero-subtitle">
            Samai is a modern platform that brings workflow modeling,
            orchestration, AI-driven context, and real-time analytics together —
            so organizations can execute processes with confidence.
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

        {/* ================= VALUE STRIP ================= */}
        <div className="value-strip">
          <div className="value-item">
            <strong>Reduce Cycle Time</strong>
            <span>Automate approvals and decisions</span>
          </div>
          <div className="value-item">
            <strong>Improve Visibility</strong>
            <span>Know who did what and why</span>
          </div>
          <div className="value-item">
            <strong>Scale Reliably</strong>
            <span>Processes that grow with you</span>
          </div>
        </div>

        {/* ================= WHAT SAMAI ENABLES ================= */}
        <div className="capabilities-wrapper">
          <h2>What Samai enables</h2>
          <p className="section-subtitle">
            From design to execution to insight — Samai supports the full
            lifecycle of business processes.
          </p>

          <div className="capability-grid auto-scroll">
            <Capability
              title="Process Modeling"
              desc="Design workflows using structured steps, roles, approvals, and exception paths."
            />
            <Capability
              title="Context-Aware Intelligence"
              desc="AI understands the current process state, role, and data before responding."
            />
            <Capability
              title="Human & System Orchestration"
              desc="Coordinate people, systems, and integrations in a single execution flow."
            />
            <Capability
              title="Operational Analytics"
              desc="Track performance, bottlenecks, SLAs, and continuous improvement metrics."
            />

            {/* duplicate for infinite scroll */}
            <Capability
              title="Process Modeling"
              desc="Design workflows using structured steps, roles, approvals, and exception paths."
            />
            <Capability
              title="Context-Aware Intelligence"
              desc="AI understands the current process state, role, and data before responding."
            />
            <Capability
              title="Human & System Orchestration"
              desc="Coordinate people, systems, and integrations in a single execution flow."
            />
            <Capability
              title="Operational Analytics"
              desc="Track performance, bottlenecks, SLAs, and continuous improvement metrics."
            />
          </div>
        </div>
      </section>

      {/* ================= PROBLEMS ================= */}
      <section className="problems-section">
        <h2>Why businesses struggle with processes</h2>

        <div className="problems-grid">
          <Problem
            title="Manual Approvals"
            desc="Email-based approvals slow execution and increase errors."
          />
          <Problem
            title="Disconnected Systems"
            desc="Data is scattered across tools with no unified process view."
          />
          <Problem
            title="No Ownership"
            desc="Teams don’t know who is responsible at each step."
          />
          <Problem
            title="Lack of Insight"
            desc="Decisions are made without real-time process context."
          />
        </div>
      </section>

    </main>
  );
}

/* ================= COMPONENTS ================= */

function Capability({ title, desc }) {
  return (
    <div className="capability-card">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

function Problem({ title, desc }) {
  return (
    <div className="problem-card">
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  );
}
