import { Link } from "react-router-dom";
import "../styles/global.css";
import {
  FiVideo,
  FiCalendar,
  FiBookOpen,
  FiHelpCircle,
  FiLayers,
  FiCpu,
  FiFileText,
} from "react-icons/fi";

export default function Resources() {
  return (
    <main className="resources-page">

      {/* ================= HERO ================= */}
      <section className="resources-hero">
        <h1>Resources</h1>
        <p>
          Learn how to design, automate, and optimize business processes with
          clarity, control, and intelligence.
        </p>
      </section>

      {/* ================= GRID ================= */}
      <section className="resources-grid">

        <ResourceCard
          variant="pink"
          icon={<FiVideo />}
          title="Videos"
          desc="Product walkthroughs and real use-cases showing how structured processes replace manual work."
          linkText="Watch videos"
        />

        <ResourceCard
          variant="blue"
          icon={<FiCalendar />}
          title="Webinars"
          desc="Expert-led sessions on process modeling, governance, and enterprise workflow orchestration."
          linkText="Find a webinar"
        />

        <ResourceCard
          variant="peach"
          icon={<FiFileText />}
          title="Information Hub"
          desc="Deep insights on business process intelligence, decision flows, and operational visibility."
          linkText="Explore insights"
          large
        />

        <ResourceCard
          variant="lavender"
          icon={<FiBookOpen />}
          title="Case Studies"
          desc="See how teams improve cycle time, compliance, and cross-functional coordination."
          linkText="Read the cases"
        />

        <ResourceCard
          variant="lightblue"
          icon={<FiHelpCircle />}
          title="Help Center"
          desc="Guides and answers covering process design, execution, governance, and optimization."
          linkText="Get help"
        />

        <ResourceCard
          variant="lightblue"
          icon={<FiLayers />}
          title="Templates"
          desc="Pre-built approval flows, onboarding processes, ITSM workflows, and more."
          linkText="Workflow examples"
        />

        <ResourceCard
          variant="peach"
          icon={<FiCpu />}
          title="Developers"
          desc="APIs and integrations to embed contextual intelligence into enterprise processes."
          linkText="Developer docs"
        />

      </section>
    </main>
  );
}

/* ================= CARD ================= */

function ResourceCard({
  icon,
  title,
  desc,
  linkText,
  variant,
  large,
}) {
  return (
    <div className={`resource-card ${variant} ${large ? "large" : ""}`}>
      <div className="resource-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <Link to="#" className="resource-link">
        {linkText} →
      </Link>
    </div>
  );
}
