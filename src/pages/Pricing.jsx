import { useNavigate } from "react-router-dom";
import "./pricing.css";

export default function Pricing() {
  const navigate = useNavigate();

  const goToRegister = () => {
    navigate("/signup");
  };

  return (
    <div className="pricing-wrapper">
      {/* Header */}
      <div className="pricing-header">
        <h1>For Professionals & Enterprises</h1>
        <p>Simple monthly pricing. Upgrade or downgrade anytime.</p>
      </div>

      {/* Plans */}
      <div className="pricing-cards">
        {/* Starter */}
        <div className="pricing-card soft">
          <h3>Starter</h3>

          <div className="price">
            <span className="amount">$49</span>
            <span className="duration">/ month</span>
          </div>

          <ul>
            <li>Design and manage core business workflows</li>
            <li>Role-based task assignment and approvals</li>
            <li>Basic process visibility and tracking</li>
            <li>Standard security and access controls</li>
          </ul>

          <button className="btn secondary" onClick={goToRegister}>
            Get Started
          </button>
        </div>

        {/* Growth */}
        <div className="pricing-card popular">
          <div className="badge">Most Popular</div>

          <h3>Growth</h3>

          <div className="price">
            <span className="amount">$99</span>
            <span className="duration">/ month</span>
          </div>

          <ul>
            <li>Advanced process orchestration across teams</li>
            <li>Context-aware decision support and insights</li>
            <li>Analytics, reporting, and SLA tracking</li>
            <li>Priority support for business-critical workflows</li>
          </ul>

          <button className="btn primary" onClick={goToRegister}>
            Get Started
          </button>
        </div>

        {/* Enterprise */}
        <div className="pricing-card soft">
          <h3>Enterprise</h3>

          <div className="price">
            <span className="amount">$149</span>
            <span className="duration">/ month</span>
          </div>

          <ul>
            <li>End-to-end orchestration across systems and integrations</li>
            <li>Advanced analytics, insights, and predictive signals</li>
            <li>Enterprise-grade governance, auditability, and controls</li>
            <li>Dedicated success and onboarding support</li>
          </ul>

          <button className="btn secondary" onClick={goToRegister}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
