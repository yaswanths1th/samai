import { useState } from "react";
import "../styles/global.css"

const CAPABILITIES = [
  {
    key: "enterprise",
    label: "Enterprise Operations",
    title: "Enterprise Operations",
    desc: "Core operational processes with governance and control",
    points: [
      "Finance operations and internal approvals",
      "Compliance workflows with audit trails",
      "Cross-functional operational coordination",
    ],
    image: "/images/enterprise-ops.png",
  },
  {
    key: "talent",
    label: "HR",
    title: "Talent & Workforce Processes",
    desc: "Structured people processes across the employee lifecycle",
    points: [
      "Hiring pipelines and onboarding workflows",
      "Workforce analytics and performance processes",
      "Role-based access and policy-driven approvals",
    ],
    image: "/images/hr-processes.png",
  },
  {
    key: "sales",
    label: "Sales",
    title: "Sales & Customer Operations",
    desc: "Customer-facing processes with clarity and insight",
    points: [
      "Lead-to-order and deal approval workflows",
      "Customer communication and service coordination",
      "CRM process intelligence and visibility",
    ],
    image: "/images/sales-ops.png",
  },
  {
    key: "it",
    label: "IT Ops & DevOps",
    title: "IT & Service Management",
    desc: "Reliable IT operations with automation and traceability",
    points: [
      "Incident and ticket management workflows",
      "Change and release management processes",
      "Knowledge and access management",
    ],
    image: "/images/it-ops.png",
  },
  {
    key: "supply",
    label: "Supply Chain",
    title: "Supply Chain & Operations",
    desc: "Operational efficiency across vendors and supply networks",
    points: [
      "Procurement and purchase approval workflows",
      "Vendor onboarding and management processes",
      "Operations monitoring and exception handling",
    ],
    image: "/images/supply-chain.png",
  },
];

export default function CapabilitiesSection() {
  const [active, setActive] = useState(CAPABILITIES[0]);

  return (
    <section className="capabilities-section">
      <h2>Built for every business domain</h2>
     <br></br>

      {/* Pills */}
      <div className="capability-tabs">
        {CAPABILITIES.map((c) => (
          <button
            key={c.key}
            className={`tab ${active.key === c.key ? "active" : ""}`}
            onClick={() => setActive(c)}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="capability-content">
        <div className="capability-visual">
          <img src={active.image} alt={active.title} />
        </div>

        <div className="capability-text">
          <h3>{active.title}</h3>
          <p className="capability-desc">{active.desc}</p>

          <ul>
            {active.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
