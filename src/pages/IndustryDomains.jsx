import "../styles/global.css";

const DOMAINS = [
  {
    blockTitle: "Enterprise Operations",
    blockDesc:
      "Run core operational processes with built-in governance, visibility, and control Enterprise Operations brings structure and discipline to the most critical, cross-cutting processes of the organization. It ensures that financial controls, compliance obligations, and cross-functional coordination operate as well-governed, auditable workflows—not ad-hoc activities spread across tools.",

    title: "What enterprise operations enable",
    subtitle: "",
    points: [
      "Finance Operations & Internal Approvals Digitize finance workflows such as budget approvals, expense management, procure-to-pay, and reconciliations with defined controls, SLAs, and authorization hierarchies.",
      "Compliance Workflows with Audit Trails Design compliance processes with mandatory checks, validations, and approvals—capturing complete audit trails for every action, decision, and exception.",
      "Cross-Functional Operational Coordination Coordinate work seamlessly across departments—finance, legal, operations, HR, and IT—using shared process visibility and synchronized handoffs.",
      "Operational Visibility & Control Track the status, ownership, and performance of enterprise operations in real time—identify delays, risks, and deviations early.",
      "Governance by Design Embed policies, segregation of duties, and escalation rules directly into workflows, ensuring governance is enforced automatically.",
    ],
    image: "/images/enterpriseoperations.png",
  },
  {
    blockTitle: "Talent & Workforce Processes ",
    blockDesc:
      "Structure people processes across the entire employee lifecycle—with clarity, control, and insight brings discipline and consistency to how organizations hire, onboard, manage, and develop talent. By structuring workforce processes as governed workflows, HR and business leaders gain visibility, accountability, and data-driven control—from the first candidate interaction to ongoing performance and policy enforcement.",
    title: "What workforce management enables",
    subtitle: "",
    points: [
      "Hiring Pipelines & Onboarding Workflows Design end-to-end hiring processes—from requisition and screening to offer approvals and onboarding—ensuring consistent experience, faster cycle times, and compliance at every step.",
      "Workforce Analytics & Performance Processes Instrument employee lifecycle data to track productivity, utilization, performance reviews, goal alignment, and attrition—turning people data into actionable insights.",
      "Role-Based Access & Responsibility Control Define roles across HR, managers, approvers, and employees, ensuring each participant interacts with the process according to responsibility and authority.",
      "Policy-Driven Approvals & Governance Embed HR policies, approvals, and validations directly into workflows—leave requests, promotions, transfers, and exits—ensuring fairness, consistency, and auditability.",
      "Lifecycle Consistency Across Functions Maintain continuity across hiring, development, mobility, and exit processes—so every workforce event is traceable and governed.",
    ],
    image: "/images/talent.png",
  },
  {
    blockTitle: "Sales & Customer Operations ",
    blockDesc:
      "Run customer-facing processes with clarity, coordination, and real-time insight brings structure to how organizations sell, serve, and support customers. By modeling sales and service as governed workflows, teams gain end-to-end visibility—from first lead to fulfilled order and ongoing service—ensuring consistency, accountability, and faster outcomes.",
    title: "What sales & customer operations enable",
    subtitle: "",
    points: [
      "Lead-to-Order & Deal Approval Workflows Standardize the journey from lead capture to deal closure with defined stages, approvals, pricing controls, and SLAs—reducing cycle time and deal risk.",
      "Customer Communication & Service Coordination Coordinate sales, service, and operations teams around the same customer context—requests, updates, escalations, and resolutions stay aligned to the active case or order.",
      "CRM Process Intelligence & Visibility Go beyond records to understand how work flows—pipeline health, bottlenecks, handoffs, and conversion drivers—using process-level analytics.",
      "Cross-Functional Handoffs Seamlessly transition customers from sales to delivery, billing, and support with governed handoffs and shared ownership.",
      "Policy-Driven Controls Embed discount rules, approval thresholds, and compliance checks directly into sales and service workflows to protect margins and governance.",
    ],
    image: "/images/sales-and-customer.png",
  },
  {
    blockTitle: "IT & Service Management ",
    blockDesc:
      "Deliver reliable IT operations with automation, traceability, and control brings structure and predictability to IT & Service Management by turning incidents, changes, and requests into governed, end-to-end workflows. With built-in automation and full traceability, IT teams can resolve issues faster, reduce risk, and maintain service quality—even as complexity grows.",
    title: "What IT & Service Management enables",
    subtitle: "",
    points: [
      "Incident & Ticket Management Workflows Standardize how incidents and service requests are logged, prioritized, routed, escalated, and resolved—ensuring SLAs are met and accountability is clear.",
      "Change & Release Management Processes Manage changes with controlled approvals, impact assessments, and rollback plans—reducing outages and ensuring stability across environments.",
      "Knowledge Management Capture resolutions, runbooks, and best practices as part of the workflow—so teams learn continuously and resolve issues faster over time.",
      "Access & Permission Management Automate access requests, approvals, and revocations with policy-driven controls—supporting security and compliance without manual overhead.",
      "Service Visibility & Traceability Track the lifecycle of every ticket, change, and request with timestamps, ownership, and audit trails—supporting reporting, audits, and root-cause analysis.",
    ],
    image: "/images/it-and-service.png",
  },
  {
    blockTitle: "Supply Chain & Operations",
    blockDesc:
      "Drive operational efficiency across vendors, partners, and supply networks , Supply Chain & Operations are managed as connected, end-to-end processes—from procurement and vendor onboarding to execution monitoring and exception handling. By embedding governance, automation, and visibility into operational workflows, organizations can reduce delays, control risk, and maintain continuity, even in complex supply environments.",
    title: "What  supply chain operations enable",
    subtitle: "",
    points: [
      "Procurement & Purchase Approval Workflows Digitize procure-to-pay processes with defined approval hierarchies, budget controls, and SLAs—ensuring transparency, compliance, and faster turnaround.",
      "Vendor Onboarding & Management Processes Standardize vendor onboarding with checks for documentation, compliance, contracts, and performance criteria—creating a reliable and governed vendor ecosystem.",
      "Operational Execution Monitoring Track operational activities across suppliers, warehouses, and delivery stages in real time—understand what is running, delayed, or at risk.",
      "Exception Handling & Escalation Automatically detect delays, shortages, or deviations and trigger escalations, rerouting, or corrective actions—before issues impact customers or production.",
      "Cross-Partner Coordination Enable seamless collaboration between internal teams and external vendors using shared process context and governed interactions.",
    ],
    image: "/images/supply.png",
  },
];

export default function IndustryDomains() {
  return (
    <main className="industry-page">
      {/* ================= HERO ================= */}
      <section className="industry-hero">
        <h1>
          Built for Every <span className="product-title">Business</span> Domain
        </h1>
        <p className="industry-hero-subtitle">
          Samai adapts to diverse industries and functions while maintaining a
          consistent, governed process foundation across the enterprise.
        </p>
      </section>

      {/* ================= DOMAINS ================= */}
<section className="industry-sections">
  {DOMAINS.map((d, i) => (
    <section key={d.title}>
      {d.blockTitle && (
        <div className="industry-block-header">
          <h2>{d.blockTitle}</h2>
          <p>{d.blockDesc}</p>
        </div>
      )}

      <div className={`industry-section ${i % 2 !== 0 ? "reverse" : ""}`}>
        {/* TEXT */}
        <div className="industry-text">
          <h3>{d.title}</h3>
          {d.subtitle && <p className="industry-subtitle">{d.subtitle}</p>}
          <ul>
            {d.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>

        {/* IMAGE */}
        <div className="industry-image">
          <img src={d.image} alt={d.title} />
        </div>
      </div>
    </section>
  ))}
</section>

    </main>
  );
}
