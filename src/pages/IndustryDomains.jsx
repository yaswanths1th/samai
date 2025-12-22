import "./industryDomains.css";

export default function IndustryDomains() {
  return (
    <div className="industry-page">
      {/* Hero */}
      <section className="industry-hero">
        <h1>Built for every business domain</h1>
        <p>
          Samai adapts to different industries and business functions while
          maintaining a consistent, governed process foundation across the
          organization.
        </p>
      </section>

      {/* Domains */}
      <section className="industry-grid">
        <div className="industry-card">
          <h3>Human Resources</h3>
          <p className="industry-subtitle">
            Structured people processes with compliance built-in
          </p>
          <ul>
            <li>
              Employee onboarding, role changes, and exit workflows with
              approvals and audit trails
            </li>
            <li>
              Leave, attendance, and policy approvals aligned to organizational
              hierarchies
            </li>
            <li>
              Compliance workflows for labor laws, certifications, and internal
              controls
            </li>
          </ul>
        </div>

        <div className="industry-card">
          <h3>Finance</h3>
          <p className="industry-subtitle">
            Controlled financial operations with full visibility
          </p>
          <ul>
            <li>
              Expense, reimbursement, and invoice approvals with budget checks
            </li>
            <li>
              Capital and operational budget reviews with multi-level
              authorization
            </li>
            <li>
              Audit-ready workflows for controls, reconciliations, and reporting
            </li>
          </ul>
        </div>

        <div className="industry-card">
          <h3>Operations</h3>
          <p className="industry-subtitle">
            Reliable execution across teams and vendors
          </p>
          <ul>
            <li>
              Internal service requests routed to the right teams with SLAs
            </li>
            <li>
              Vendor coordination, approvals, and exception handling
            </li>
            <li>
              Operational workflows designed for scale and process consistency
            </li>
          </ul>
        </div>

        <div className="industry-card">
          <h3>IT & Support</h3>
          <p className="industry-subtitle">
            Faster resolution with governed access and automation
          </p>
          <ul>
            <li>
              Ticket intake, categorization, escalation, and resolution tracking
            </li>
            <li>
              Access provisioning and de-provisioning tied to roles and policies
            </li>
            <li>
              Incident, change, and problem management with traceability
            </li>
          </ul>
        </div>
      </section>

      {/* Footer Value */}
      <section className="industry-footer">
        <h2>One platform, many domains</h2>
        <p>
          Whether it’s people, finance, operations, or technology, Samai provides
          a unified process layer that adapts to each domain without creating
          silos or fragmentation.
        </p>
      </section>
    </div>
  );
}
