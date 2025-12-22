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
            <li>Core workflow management</li>
            <li>Limited users & processes</li>
            <li>Email support</li>
            <li>Standard security</li>
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
            <li>Advanced orchestration</li>
            <li>Analytics & reporting</li>
            <li>Role-based access control</li>
            <li>Priority support</li>
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
            <li>Unlimited workflows</li>
            <li>Advanced AI insights</li>
            <li>Dedicated success manager</li>
            <li>Enterprise-grade SLAs</li>
          </ul>

          <button className="btn secondary" onClick={goToRegister}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
