import { useState } from "react";
import "../styles/connect.css";

export default function Connect() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been submitted. Our team will contact you.");
  };

  return (
    <div className="connect-wrapper">
      {/* Header */}
      <section className="connect-hero">
        <h1>Connect with Samai</h1>
        <p>
          Talk to our team about product demos, enterprise pricing, partnerships,
          or technical support.
        </p>
      </section>

      {/* Content */}
      <section className="connect-content">
        {/* Left: Contact Info */}
        <div className="connect-info">
          <div className="info-card">
            <h3>General Inquiries</h3>
            <p>info@samai.ai</p>
          </div>

          <div className="info-card">
            <h3>Sales & Partnerships</h3>
            <p>sales@samai.ai</p>
          </div>

          <div className="info-card">
            <h3>Technical Support</h3>
            <p>support@samai.ai</p>
          </div>

          <div className="info-card">
            <h3>Phone</h3>
            <p>+91 9XXXXXXXXX</p>
          </div>
        </div>

        {/* Right: Form */}
        <div className="connect-form">
          <h2>Send us a message</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Work Email</label>
              <input
                type="email"
                name="email"
                placeholder="john@company.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Company</label>
              <input
                type="text"
                name="company"
                placeholder="Company name"
                value={form.company}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                placeholder="Tell us how we can help you"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="submit-btn">
              Submit Request
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
