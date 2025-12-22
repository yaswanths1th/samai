import { motion } from "framer-motion";
import "./product.css";

const productFeatures = [
  {
    title: "Digitalise Business Functions",
    subtitle: "Turn fragmented work into structured digital processes",
    desc: `Transform manual, document-driven, and ad-hoc business activities
           into intelligent digital workflows. Samai converts documents,
           conversations, and operational data into governed, executable
           processes that are easy to understand and scale.`,
    image: "/images/product-digitalise.png",
  },
  {
    title: "Communicate with Context",
    subtitle: "AI-driven conversations grounded in business reality",
    desc: `Samai enables contextual intelligence that understands the active
           process, user role, historical actions, and live data. Users can ask
           questions, analyze situations, and take decisions aligned with real
           business context — not just keywords.`,
    image: "/images/product-context.png",
  },
  {
    title: "Orchestrate Business Processes",
    subtitle: "One orchestration layer across teams and systems",
    desc: `Design, execute, and monitor end-to-end business processes across
           people, applications, and integrations. Samai coordinates tasks,
           approvals, handoffs, and system actions reliably at enterprise scale.`,
    image: "/images/product-orchestration.png",
  },
  {
    title: "Analyze, Predict & Act",
    subtitle: "From operational data to continuous improvement",
    desc: `Gain real-time visibility into process performance. Samai analyzes
           execution data to surface insights, predict outcomes, and recommend
           next-best actions — continuously improving efficiency and results.`,
    image: "/images/product-analytics.png",
  },
];

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

      {/* ================= INTERACTIVE FEATURES ================= */}
      <section className="product-feature-showcase">
        {productFeatures.map((f, i) => {
          const reverse = i % 2 !== 0;

          return (
            <motion.div
              key={f.title}
              className={`product-feature-row ${
                reverse ? "reverse" : ""
              }`}
              initial={{ opacity: 0, x: reverse ? 120 : -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="product-feature-image">
                <img src={f.image} alt={f.title} />
              </div>

              <div className="product-feature-content">
                <h2>{f.title}</h2>
                <p className="feature-subtitle">{f.subtitle}</p>
                <p>{f.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* ================= VALUE ================= */}
      <section className="product-value">
        <h2>Why enterprises choose Samai</h2>
        <ul>
          <li>Designed for multi-tenant, role-based enterprise organizations</li>
          <li>Built with governance, compliance, and auditability at the core</li>
          <li>Scales seamlessly from small teams to large global operations</li>
          <li>
            AI-enhanced decision-making without losing transparency or control
          </li>
        </ul>
      </section>
    </main>
  );
}
