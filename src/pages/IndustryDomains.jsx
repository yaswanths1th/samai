import "./industryDomains.css";

const DOMAINS = [
  {
    title: "Enterprise Operations",
    subtitle: "Core operational processes with governance and control",
    points: [
      "Finance operations and internal approvals",
      "Compliance workflows with audit trails",
      "Cross-functional operational coordination",
    ],
    image: "/images/enterpriseoperations.png",
  },
  {
    title: "Talent & Workforce Processes",
    subtitle: "Structured people processes across the employee lifecycle",
    points: [
      "Hiring pipelines and onboarding workflows",
      "Workforce analytics and performance processes",
      "Role-based access and policy-driven approvals",
    ],
    image: "/images/talent.png",
  },
  {
    title: "Sales & Customer Operations",
    subtitle: "Customer-facing processes with clarity and insight",
    points: [
      "Lead-to-order and deal approval workflows",
      "Customer communication and service coordination",
      "CRM process intelligence and visibility",
    ],
    image: "/images/sales-and-customer.png",
  },
  {
    title: "IT & Service Management",
    subtitle: "Reliable IT operations with automation and traceability",
    points: [
      "Incident and ticket management workflows",
      "Change and release management processes",
      "Knowledge and access management",
    ],
    image: "/images/it-and-service.png",
  },

{
    title: "Supply Chain & Operations",
    subtitle: "Operational efficiency across vendors and supply networks",
    points: [
      "Procurement and purchase approval workflows",
      "Vendor onboarding and management processes",
      "Operations monitoring and exception handling",
    ],
    image: "/images/supply.png",
  },


];

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
      <section className="industry-sections">
        {DOMAINS.map((d, i) => (
          <section
            key={d.title}
            className={`industry-section ${i % 2 !== 0 ? "reverse" : ""}`}
          >
            <div className="industry-text">
              <h3>{d.title}</h3>
              <p className="industry-subtitle">{d.subtitle}</p>
              <ul>
                {d.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>

            <div className="industry-image">
              <img src={d.image} alt={d.title} />
            </div>
          </section>
        ))}
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
