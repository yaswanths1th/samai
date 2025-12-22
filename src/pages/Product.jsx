import { useState } from "react";
import { motion } from "framer-motion";
import "./product.css";

const TABS = [
  {
    key: "context",
    label: "Contextual AI",
    title: "Communicate with Context",
    subtitle: "Conversations grounded in real business context",
    desc:
      "Samai enables contextual intelligence that understands the active " +
      "process, user role, historical actions, and live data. Users can ask " +
      "questions, analyze situations, and take decisions aligned with real " +
      "business context — not just keywords.",
    image: "/images/communicate-with-context.png",
  },
  {
    key: "digital",
    label: "Digitalisation",
    title: "Digitalise Business Functions",
    subtitle: "Turn fragmented work into structured digital processes",
    desc:
      "Transform manual, document-driven, and ad-hoc business activities into " +
      "intelligent digital workflows. Samai converts documents, conversations, " +
      "and operational data into governed, executable processes that are easy " +
      "to understand and scale.",
    image: "/images/digitalise-business-functions.png",
  },
  {
    key: "orchestration",
    label: "Orchestration",
    title: "Orchestrate Business Processes",
    subtitle: "One orchestration layer across teams and systems",
    desc:
      "Design, execute, and monitor end-to-end business processes across people, " +
      "applications, and integrations. Samai coordinates tasks, approvals, " +
      "handoffs, and system actions reliably at enterprise scale.",
    image: "/images/end-to-end-orchestration.png",
  },
  {
    key: "analytics",
    label: "Analytics",
    title: "Analyze, Predict & Act",
    subtitle: "From operational data to continuous improvement",
    desc:
      "Gain real-time visibility into process performance. Samai analyzes " +
      "execution data to surface insights, predict outcomes, and recommend " +
      "next-best actions — continuously improving efficiency and results.",
    image: "/images/analyze-predict-act.png",
  },
];

export default function Product() {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  return (
    <main className="product-page">
      {/* ================= HERO ================= */}
      <section className="product-hero">
        <h1>A unified platform for business process intelligence</h1>
        <p>
          Samai brings together workflow modeling, orchestration, contextual AI,
          and analytics into a single platform built for modern enterprises.
        </p>
      </section>

      {/* ================= TABS ================= */}
      <section className="product-tabs">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            className={activeTab.key === tab.key ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab.label}
          </button>
        ))}
      </section>

      {/* ================= CONTENT ================= */}
      <section className="product-hero-visual">
        <motion.div
          key={activeTab.key + "-text"}
          className="product-text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h2>{activeTab.title}</h2>
          <p className="product-subtitle">{activeTab.subtitle}</p>
          <p className="product-desc">{activeTab.desc}</p>
        </motion.div>

        <motion.div
          key={activeTab.key + "-image"}
          className="product-mock"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img src={activeTab.image} alt={activeTab.title} />
        </motion.div>
      </section>

      {/* ================= VALUE ================= */}
      <section className="product-value">
        <h3>Why enterprises choose Samai</h3>
        <ul>
          <li>Designed for multi-tenant, role-based enterprise organizations</li>
          <li>Built with governance, compliance, and auditability at the core</li>
          <li>Scales seamlessly from small teams to global operations</li>
          <li>
            AI-enhanced decision-making without losing transparency or control
          </li>
        </ul>
      </section>
    </main>
  );
}
