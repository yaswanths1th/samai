import "./product.css";

export default function Product() {
  return (
    <main className="product-page">

      {/* ================= HERO ================= */}
      <section className="product-hero">
        <h1>A unified platform for business process intelligence</h1>
        <p className="product-hero-subtitle">
          Samai brings together workflow modeling, orchestration, contextual AI,
          and analytics into a single platform built for modern enterprises.
        </p>
      </section>

      {/* ================= PRODUCT SNAPSHOT ================= */}
      <section className="product-features">
        <div className="feature-card">
          <h3>Digitalise Business Functions</h3>
          <p className="feature-subtitle">
            Turn fragmented work into structured digital processes
          </p>
          <p>
            Transform manual, document-driven, and ad-hoc business activities
            into intelligent digital workflows. Samai converts documents,
            conversations, and operational data into governed, executable
            processes that are easy to understand and scale.
          </p>
        </div>

        <div className="feature-card">
          <h3>Communicate with Context</h3>
          <p className="feature-subtitle">
            AI-driven conversations grounded in business reality
          </p>
          <p>
            Samai enables contextual intelligence that understands the active
            process, user role, historical actions, and live data. Users can ask
            questions, analyze situations, and take decisions aligned with real
            business context — not just keywords.
          </p>
        </div>

        <div className="feature-card">
          <h3>Orchestrate Business Processes</h3>
          <p className="feature-subtitle">
            One orchestration layer across teams and systems
          </p>
          <p>
            Design, execute, and monitor end-to-end business processes across
            people, applications, and integrations. Samai coordinates tasks,
            approvals, handoffs, and system actions reliably at enterprise scale.
          </p>
        </div>

        <div className="feature-card">
          <h3>Analyze, Predict & Act</h3>
          <p className="feature-subtitle">
            From operational data to continuous improvement
          </p>
          <p>
            Gain real-time visibility into process performance. Samai analyzes
            execution data to surface insights, predict outcomes, and recommend
            next-best actions — continuously improving efficiency and results.
          </p>
        </div>
      </section>

      {/* ================= VALUE ================= */}
      <section className="product-value">
        <h2>Why enterprises choose Samai</h2>
        <ul>
          <li>Designed for multi-tenant, role-based enterprise organizations</li>
          <li>Built with governance, compliance, and auditability at the core</li>
          <li>Scales seamlessly from small teams to large global operations</li>
          <li>AI-enhanced decision-making without losing transparency or control</li>
        </ul>
      </section>

    </main>
  );
}
