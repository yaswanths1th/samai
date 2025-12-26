import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiChevronLeft,
  FiChevronRight,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import "../styles/global.css";

/* =========================
   DATA (UNCHANGED)
========================= */

const PRODUCT_BLOCKS = [
  {
    heroTitle: "Communicate with Context",
    heroDesc:
      "Enable conversations that understand processes, data, roles, and state—not just words. Communication is effective only when it is context-aware. “Communicate with Context” means every interaction—questions, approvals, escalations, and decisions—is grounded in the current process instance, the user’s role, the underlying data, and the stage of execution.",
    slides: [
      {
        title: "What contextual communication delivers",
        desc: [],
        points: [
          "Process-Aware Conversations — Ask questions and receive answers that are tied to a specific workflow, case, or transaction, eliminating ambiguity and guesswork.",
          "Role & Responsibility Awareness — Responses adapt based on who is asking. Executives see summaries, managers see exceptions, and operators see next actions.",
          "State & Stage Sensitivity — Communication changes based on where the process stands, whether pending approval, delayed, completed, or escalated.",
          "Data-Backed Responses — Every answer is supported by real-time process data, rules, and historical context, not static reports.",
          "Actionable Communication — Move from conversation to action instantly by approving, reassigning, escalating, or resolving within the same context.",
        ],
        image: "/images/product contextual_communication -1.png",
      },
      {
        title: "Where this is applied",
        desc: "",
        points: [
          "Executive dashboards & operational reviews",
          "Approval workflows & exception handling",
          "Customer and internal service processes",
          "Compliance, audit, and governance reviews",
        ],
        image: "/images/context-role-aware.png",
      },
      {
        title: "Business impact",
        desc: "",
        points: [
          "Faster decisions with full clarity",
          "Reduced miscommunication and rework",
          "Better accountability across processes",
          "Confident actions based on live context",
        ],
        image: "/images/context-actionable.png",
      },
    ],
  },

  {
    heroTitle: "Digitalise Business Functions",
    heroDesc:
      "Transform how work flows across your organization—end to end Digitalising business functions means converting manual, fragmented activities into structured, governed business processes. Using principles, organizations gain clarity, control, and consistency across how work is initiated, executed, approved, and improved.",
    slides: [
      {
        title: "What digitalisation delivers",
        desc: "",
        points: ["Process Definition & Standardisation - Clearly define how business functions operate—inputs, steps, decisions, and outcomes—ensuring consistency across teams and locations.", 
          "Workflow Automation Digitally execute processes such as approvals, reviews, and requests with rules, routing, and validations—reducing manual effort and errors", 
          "Structured Data Capture Convert documents, forms, emails, and spreadsheets into structured process data that can be tracked, analyzed, and reused.",
          "Visibility & Traceability Track every process instance in real time with full audit trails—know who did what, when, and why.", 
          "Continuous Process Improvement Measure performance, identify bottlenecks, and optimize workflows continuously using process insights and analytics"],
        image: "/images/digital-definition.png",
      },
      {
        title: "Typical business functions",
        desc: "",
        points: ["Finance approvals & reconciliations", "HR onboarding & employee lifecycle management", 
          "Procurement & vendor workflows",
        "Compliance & governance processes",
      "IT service & operational request handling"],
        image: "/images/digital-automation.png",
      },
      {
        title: "Business impact",
        desc: "",
        points: ["Faster execution with fewer handoffs", 
          "Reduced operational risk and rework", 
          "Improved compliance and governance","Scalable operations without added complexity"],
        image: "/images/digital-visibility.png",
      },
    ],
  },

  {
    heroTitle: "Enterprise Process Orchestration",
    heroDesc:
      "Grow operations, volume, and complexity—without losing control Scaling with confidence means your processes are designed to expand—across teams, locations, systems, and demand—while maintaining governance, performance, and visibility. As volumes increase,this ensures work scales predictably, not chaotically.",
    slides: [
      {
        title: "What confident scaling enables",
        desc: "",
        points: ["Standardized Process Foundations Create reusable, versioned process models that scale consistently across departments and geographies—no reinvention, no drift.", 
          "System & Team Expansion Easily extend workflows to new tools, integrations, partners, and teams without redesigning core processes.", 
          "Governance at Scale Apply rules, approvals, and controls uniformly—even as users, transactions, and data multiply.",
        "Performance Stability Under Load Maintain SLAs, throughput, and quality as volumes grow, supported by automation and capacity-aware routing.",
        "Change Without Disruption Introduce improvements, policy updates, and optimizations incrementally—without breaking running operations."],
        image: "/images/orchestration-coordination.png",
      },
      {
        title: "Where scaling confidence matters most",
        desc: "",
        points: ["Rapid business growth or market expansion", 
          "Multi-location or multi-entity operations", 
          "Mergers, acquisitions, and process consolidation",
        "Increasing transaction volumes and customer demand",
      "Platform and product-led scale initiatives"],
        image: "/images/orchestration-reliability.png",
      },
      {
        title: "Business impact",
        desc: "",
        points: ["Predictable growth with reduced operational risk",
           "Faster onboarding of teams and partners", 
           "Consistent outcomes across regions and functions",
          "Lower cost of scale through automation and reuse"],
        image: "/images/orchestration-governance.png",
      },
    ],
  },

  {
    heroTitle: "Process Analytics & Intelligence",
    heroDesc:
      "Run, monitor, and optimize business processes with clarity and control. Managing with efficiency means having complete operational visibility and the ability to act decisively at every stage of a process. It enables leaders and teams to oversee workflows, balance workloads, resolve issues early, and continuously improve performance—without adding management overhead.",
    slides: [
      {
        title: "What efficient management enables",
        desc: "",
        points: ["Real-Time Process Visibility Monitor live workflows across functions with clear status, SLAs, and ownership—know exactly what is running, delayed, or completed.", 
          "Exception-Driven Management Automatically highlight bottlenecks, delays, and deviations so teams focus only on processes that need attention.", 
          "Resource & Workload Optimization Balance tasks across teams and systems to prevent overload, reduce idle time, and improve throughput",
        "SLA & Performance Management Track turnaround times, compliance with SLAs, and process KPIs to ensure consistent delivery and service quality.",
      "Continuous Improvement Loop Use performance data and trends to refine workflows, remove inefficiencies, and standardize best practices."],
        image: "/images/analytics-visibility.png",
      },
      {
        title: "Where this delivers the most value",
        desc: "",
        points: ["Operations & service delivery management", 
          "Finance and approval-heavy workflows", 
          "HR and employee lifecycle processes"
        , "IT service and incident management"
      , "Customer-facing and internal service operations"
    ],
        image: "/images/analytics-prediction.png",
      },
      {
        title: "Business impact",
        desc: "",
        points: ["Faster cycle times and reduced delays", 
          "Lower operational costs through better utilization", 
          "Predictable outcomes and service quality",
        "Proactive control instead of reactive firefighting"],
        image: "/images/analytics-optimization.png",
      },
    ],
  },
];

/* =========================
   BLOCK COMPONENT
========================= */

function ProductBlock({ heroTitle, heroDesc, slides }) {
  const [[slideIndex, direction], setSlide] = useState([0, 0]);
  const slide = slides[slideIndex];

  const prev = () =>
    setSlide(([i]) => [i === 0 ? slides.length - 1 : i - 1, -1]);

  const next = () =>
    setSlide(([i]) => [i === slides.length - 1 ? 0 : i + 1, 1]);

  return (
    <section className="product-block">
      <div className="block-hero">
        <h2>{heroTitle}</h2>
        <p>{heroDesc}</p>
      </div>

      <div className="enterprise-carousel">
        <button className="nav-arrow left" onClick={prev}>
          <FiChevronLeft />
        </button>

        <button className="nav-arrow right" onClick={next}>
          <FiChevronRight />
        </button>

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={slideIndex}
            className="carousel-content"
            custom={direction}
            variants={{
              enter: (dir) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
              center: { x: 0, opacity: 1 },
              exit: (dir) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.45, ease: "easeInOut" }}
          >
            <div className="carousel-text">
              <h3>{slide.title}</h3>

              {Array.isArray(slide.desc) && slide.desc.length > 0
                ? slide.desc.map((p, i) => <p key={i}>{p}</p>)
                : slide.desc && <p>{slide.desc}</p>}

              <ul>
                {slide.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>

            <div className="carousel-image">
              <img src={slide.image} alt={slide.title} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* =========================
   PAGE
========================= */

export default function Product() {
  const [openImpact, setOpenImpact] = useState(null);

  return (
    <main className="product-page">
      <section className="product-hero">
        <h1>Unified Platform for <br></br><span className="product-title">Business </span> Process Intelligence</h1>
        <p>
          Samai brings together Contextual Communication, Digitalisation,
          Orchestration, and Analytics into a single platform built for modern
          enterprises.
        </p>
      </section>

      {PRODUCT_BLOCKS.map((block, idx) => (
        <ProductBlock key={idx} {...block} />
      ))}

     
    </main>
  );
}
