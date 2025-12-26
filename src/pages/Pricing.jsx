import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/global.css";

export default function Pricing() {
  const navigate = useNavigate();
  const [sticky, setSticky] = useState(false);
  const [billing, setBilling] = useState("monthly");

  useEffect(() => {
    const onScroll = () => {
      setSticky(window.scrollY > 720);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const price = (monthly, yearly) =>
    billing === "monthly" ? monthly : yearly;

  return (
    <main className="pricing-cards-page">
      {/* ================= HERO ================= */}
      <section className="pricing-cards-hero">
        <h1>Simple pricing for serious operations</h1>
        <p>
          Choose a plan that fits your team today — and scales as your
          operational complexity grows.
        </p>

        {/* ===== Billing Toggle ===== */}
        <div className="billing-toggle">
          <button
            className={billing === "monthly" ? "active" : ""}
            onClick={() => setBilling("monthly")}
          >
            Monthly
          </button>
          <button
            className={billing === "yearly" ? "active" : ""}
            onClick={() => setBilling("yearly")}
          >
            Yearly <span>Save 20%</span>
          </button>
        </div>
      </section>

      {/* ================= PRICING CARDS ================= */}
      <section className="pricing-cards-grid">
        {/* STARTER */}
        <div className="pricing-card">
          <h3>Starter</h3>
          <div className="price">
            ₹{price(1499, 1199)} <span>/ user / month</span>
          </div>
          <button className="btn-secondary full" onClick={() => navigate("/signup")}>
            Get Started
          </button>
          <div className="features">
            <h4>Process Essentials</h4>
            <ul>
              <li>Basic digital process modelling</li>
              <li>Workflow execution engine</li>
              <li>Task & approval flows</li>
              <li>Role-based access control</li>
              <li>Basic dashboards</li>
              <li>Email notifications</li>
              <li>Up to 5 active process models</li>
              <li>Single production environment</li>
              <li>Community support</li>
            </ul>
          </div>
        </div>

        {/* PROFESSIONAL */}
        <div className="pricing-card highlight">
          <div className="badge">Most Popular</div>
          <h3>Professional</h3>
          <div className="price">
            ₹{price(3499, 2799)} <span>/ user / month</span>
          </div>
          <button className="btn-primary full" onClick={() => navigate("/signup")}>
            Start Free Trial
          </button>
          <div className="features">
            <h4>Everything in Starter, plus</h4>
            <ul>
              <li>Advanced modelling & hierarchies</li>
              <li>
                Process versioning & lifecycle
                <Tooltip text="Track changes, approvals, and history of every process." />
              </li>
              <li>Context-aware interactions</li>
              <li>
                SLA tracking & alerts
                <Tooltip text="Real-time alerts when workflows breach SLAs." />
              </li>
              <li>Custom dashboards & reports</li>
              <li>Audit logs & compliance</li>
              <li>API access & integrations</li>
              <li>Multi-level approvals</li>
              <li>Staging + production environments</li>
              <li>Priority email & chat support</li>
            </ul>
          </div>
        </div>

        {/* SCALE */}
        <div className="pricing-card">
          <h3>Enterprise</h3>
          <div className="price">
            ₹{price(14999, 11999)} <span>/ user / month</span>
          </div>
          <button className="btn-secondary full" onClick={() => navigate("/signup")}>
            Get Started
          </button>
          <div className="features">
            <h4>Enterprise Execution</h4>
            <ul>
              <li>Unlimited process models</li>
              <li>
                Enterprise-grade security (SSO, SCIM)
                <Tooltip text="Integrate with enterprise identity providers." />
              </li>
              <li>Advanced role & policy engine</li>
              <li>Real-time process instrumentation</li>
              <li>Cross-domain orchestration</li>
              <li>Process simulations & impact analysis</li>
              <li>Multi-tenant & multi-region support</li>
              <li>Data retention & governance policies</li>
              <li>Custom SLAs</li>
              <li>Dedicated success manager</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= ROI STRIP ================= */}
      <section className="roi-strip">
        <div>
          <strong>32%</strong>
          <span>Faster process execution</span>
        </div>
        <div>
          <strong>27%</strong>
          <span>Reduction in operational cost</span>
        </div>
        <div>
          <strong>99.9%</strong>
          <span>Workflow reliability</span>
        </div>
      </section>

      {/* ================= FEATURE COMPARISON ================= */}
      <section className="comparison-section">
        <div className={`comparison-header ${sticky ? "sticky" : ""}`}>
          <div />
          <div>Starter<br /><span>₹{price(1499, 1199)}</span></div>
          <div className="highlight">Professional<br /><span>₹{price(3499, 2799)}</span></div>
          <div>Enterprise<br /><span>₹{price(14999, 11999)}</span></div>
        </div>

        <div className="comparison-table">
          <FeatureGroup title="Process Modelling">
            <Feature name="Visual workflow designer" values={[1, 1, 1]} />
            <Feature name="Process versioning" values={[0, 1, 1]} />
            <Feature name="Reusable templates" values={[0, 1, 1]} />
          </FeatureGroup>

          <FeatureGroup title="Execution & Control">
            <Feature name="Workflow execution engine" values={[1, 1, 1]} />
            <Feature name="Multi-level approvals" values={[0, 1, 1]} />
            <Feature name="SLA tracking & alerts" values={[0, 1, 1]} />
          </FeatureGroup>

          <FeatureGroup title="Security & Governance">
            <Feature name="Role-based access control" values={[1, 1, 1]} />
            <Feature name="Audit logs & compliance" values={[0, 1, 1]} />
            <Feature name="SSO & SCIM" values={[0, 0, 1]} />
          </FeatureGroup>

          <FeatureGroup title="Intelligence">
            <Feature name="Operational dashboards" values={[1, 1, 1]} />
            <Feature name="Advanced analytics" values={[0, 1, 1]} />
            <Feature name="Contextual AI assistant" values={[0, 0, 1]} />
          </FeatureGroup>
        </div>
      </section>

      {/* ================= ENTERPRISE VALUE ================= */}
     
    </main>
  );
}

/* ================= COMPONENTS ================= */

function FeatureGroup({ title, children }) {
  return (
    <>
      <div className="feature-group">{title}</div>
      {children}
    </>
  );
}

function Feature({ name, values }) {
  return (
    <div className="feature-row">
      <div className="feature-name">{name}</div>
      {values.map((v, i) => (
        <div key={i} className="feature-cell">
          {v ? <span className="check">✓</span> : "—"}
        </div>
      ))}
    </div>
  );
}

function Tooltip({ text }) {
  return (
    <span className="tooltip">
      ⓘ
      <span className="tooltip-text">{text}</span>
    </span>
  );
}
