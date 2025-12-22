import { motion } from "framer-motion";
import "./featureShowcase.css";

const features = [
  {
    title: "Digital Modelling",
    subtitle: "Create digital models of your business to transform with ease",
    points: [
      "Define service and product hierarchies",
      "Digitally map business functions",
      "Model executive processes and controls",
      "Synchronised access across multiple channels",
      "Complete lifecycle management of work-units",
    ],
    image: "/images/digital-modeling.png",
  },
  {
    title: "Security",
    subtitle: "A solid framework that secures all access with confidence",
    points: [
      "Define executive roles and structures",
      "Configure and manage actions securely",
      "Control and visibility across all activities",
      "Secure access to all enterprise information",
    ],
    image: "/images/security.png",
  },
  {
    title: "Interaction",
    subtitle: "Improve operational effectiveness through contextual interaction",
    points: [
      "Interact with clients in service context",
      "Targeted communication to relevant groups",
      "Mass updates on key milestones",
      "Collaborate internally on deliverables",
    ],
    image: "/images/interaction.png",
  },
  {
    title: "Organisation",
    subtitle: "Structure your business for operational clarity",
    points: [
      "Multi-level service and product hierarchies",
      "Unified client information view",
      "Client grouping and associations",
      "Role-based executive processes",
      "Version control and dynamic process mapping",
    ],
    image: "/images/organisation.png",
  },
  {
    title: "Instrumentation",
    subtitle: "Clear instrumentation that brings predictability",
    points: [
      "Complete capacity visibility",
      "Real-time work assignment view",
      "Live status tracking across all work",
    ],
    image: "/images/instrumentation.png",
  },
];

export default function FeatureShowcase() {
  return (
    <section className="feature-showcase">
      {/* ================= SECTION HEADING ================= */}
      <motion.div
        className="feature-showcase-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2>Platform Capabilities</h2>
        <p>
          Foundational features that power digital modeling, secure execution,
          and continuous operational insight.
        </p>
      </motion.div>

      {/* ================= FEATURES ================= */}
      {features.map((f, i) => {
        const isEven = i % 2 === 0;

        return (
          <motion.div
            key={f.title}
            className={`feature-row ${isEven ? "normal" : "reverse"}`}
            initial={{ opacity: 0, x: isEven ? -120 : 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="feature-image">
              <img src={f.image} alt={f.title} />
            </div>

            <div className="feature-content">
              <h3>{f.title}</h3>
              <p className="subtitle">{f.subtitle}</p>

              <ul>
                {f.points.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        );
      })}
    </section>
  );
}
