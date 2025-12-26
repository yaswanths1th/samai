import { motion } from "framer-motion";
import "../styles/global.css";

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
      "Interact within the context of your service/product",
      "Send targeted information to relevant groups",
      "Keep clients updated through mass communication",
      "Collaborate with colleagues on deliverables",
    ],
    image: "/images/interaction.png",
  },
];

export default function FeatureShowcase() {
  return (
    <section className="fs-root">
      <div className="fs-header">
        <h2>Platform capabilities for your evolving business</h2>
      </div>

      <div className="fs-list">
        {features.map((f, i) => {
          const reverse = i % 2 !== 0;

          return (
            <div
              key={f.title}
              className={`fs-row ${reverse ? "fs-reverse" : ""}`}
            >
              <motion.div
                className="fs-image"
                initial={{ opacity: 0, x: reverse ? 200 : -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <img src={f.image} alt={f.title} />
              </motion.div>

              <motion.div
                className="fs-content"
                initial={{ opacity: 0, x: reverse ? -120 : 120 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <h3>{f.title}</h3>
                <p>{f.subtitle}</p>
                <ul>
                  {f.points.map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
