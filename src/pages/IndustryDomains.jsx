import "./industryDomains.css";

export default function IndustryDomains() {
  return (
    <main className="industry-page">

      {/* ================= HERO ================= */}
      <section className="industry-hero">
        <h1>Built for every business domain</h1>
        <p className="industry-hero-subtitle">
          Samai adapts to diverse industries and functions while maintaining a
          consistent, governed process foundation across the enterprise.
        </p>
      </section>

      {/* ================= DOMAINS ================= */}
      <section className="industry-grid">

        <div className="industry-card">
          <h3>Enterprise Operations</h3>
          <p className="industry-subtitle">
            Core operational processes with governance and control
          </p>
          <ul>
            <li>Finance operations and internal approvals</li>
            <li>Compliance workflows with audit trails</li>
            <li>Cross-functional operational coordination</li>
          </ul>
        </div>

        <div className="industry-card">
          <h3>Talent & Workforce Processes</h3>
          <p className="industry-subtitle">
            Structured people processes across the employee lifecycle
          </p>
          <ul>
            <li>Hiring pipelines and onboarding workflows</li>
            <li>Workforce analytics and performance processes</li>
            <li>Role-based access and policy-driven approvals</li>
          </ul>
        </div>

        <div className="industry-card">
          <h3>Sales & Customer Operations</h3>
          <p className="industry-subtitle">
            Customer-facing processes with clarity and insight
          </p>
          <ul>
            <li>Lead-to-order and deal approval workflows</li>
            <li>Customer communication and service coordination</li>
            <li>CRM process intelligence and visibility</li>
          </ul>
        </div>

        <div className="industry-card">
          <h3>IT & Service Management</h3>
          <p className="industry-subtitle">
            Reliable IT operations with automation and traceability
          </p>
          <ul>
            <li>Incident and ticket management workflows</li>
            <li>Change and release management processes</li>
            <li>Knowledge and access management</li>
          </ul>
        </div>

        <div className="industry-card">
          <h3>Supply Chain & Operations</h3>
          <p className="industry-subtitle">
            Operational efficiency across vendors and supply networks
          </p>
          <ul>
            <li>Procurement and purchase approval workflows</li>
            <li>Vendor onboarding and management processes</li>
            <li>Operations monitoring and exception handling</li>
          </ul>
        </div>

      </section>

      {/* ================= FOOTER VALUE ================= */}
      <section className="industry-footer">
        <h2>One platform, many domains</h2>
        <p>
          Whether it’s enterprise operations, workforce management, customer
          processes, IT services, or supply chain execution, Samai provides a
          unified process intelligence layer without creating silos or
          fragmentation.
        </p>
      </section>

    </main>
  );
}
