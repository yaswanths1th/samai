import { Link } from "react-router-dom";
import "../styles/home.css";

export default function Home() {
  return (
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
