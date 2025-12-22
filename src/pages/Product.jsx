import "./product.css";

export default function Product() {
  return (
    <div className="product-page">
      {/* Hero Section */}
      <section className="product-hero">
        <h1>A unified platform for business process intelligence</h1>
        <p>
          Samai brings together workflow modeling, orchestration, AI-driven
          context, and analytics into a single platform designed for modern
          enterprises.
        </p>
      </section>

      {/* Product Features Bar */}
      <section className="product-features">
        <div className="feature-card">
          <h3>Business Process Modeling</h3>
          <p className="feature-subtitle">
            Design processes with structure and precision
          </p>
          <p>
            Create workflows using clearly defined steps, decisions, and
            conditions. Model approvals, parallel paths, escalations, and
            exceptions so business logic is explicit and auditable.
          </p>
        </div>

        <div className="feature-card">
          <h3>Context-Aware Intelligence</h3>
          <p className="feature-subtitle">
            Intelligence grounded in real business context
          </p>
          <p>
            Samai’s AI understands the active process, user role, historical
            actions, and live data. Recommendations and responses are always
            relevant, compliant, and explainable.
          </p>
        </div>

        <div className="feature-card">
          <h3>Process Orchestration</h3>
          <p className="feature-subtitle">
            Humans, systems, and integrations working together
          </p>
          <p>
            Orchestrate tasks across people, applications, and services.
            Coordinate approvals, automate handoffs, trigger integrations, and
            ensure reliable execution at enterprise scale.
          </p>
        </div>

        <div className="feature-card">
          <h3>Analytics & Insights</h3>
          <p className="feature-subtitle">
            Visibility that drives continuous improvement
          </p>
          <p>
            Monitor process performance with real-time metrics. Identify
            bottlenecks, measure SLA adherence, and uncover optimization
            opportunities using actionable insights.
          </p>
        </div>
      </section>

      {/* Value Section */}
      <section className="product-value">
        <h2>Why enterprises choose Samai</h2>
        <ul>
          <li>Designed for multi-tenant, role-based organizations</li>
          <li>Built for compliance, auditability, and governance</li>
          <li>Scales from small teams to large enterprises</li>
          <li>AI-enhanced without sacrificing control or transparency</li>
        </ul>
      </section>
    </div>
  );
}
