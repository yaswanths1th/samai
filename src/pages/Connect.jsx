import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiUser,
  FiMessageSquare,
  FiCheckCircle,
} from "react-icons/fi";
import "../styles/global.css";

export default function Connect() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });

    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <main className="connect-page">
      {/* HERO */}
      <section className="connect-hero">
        <h1>Let’s start a conversation</h1>
        <p>
          Connect with Samai for demos, enterprise pricing, partnerships,
          or technical support.
        </p>
      </section>

      {/* CONTENT */}
      <section className="connect-wrapper">
        {/* INFO PANEL */}
        <aside className="contact-info-panel">
          <h2>Contact Information</h2>

          <div className="info-grid">
            <div className="info-card">
              <FiPhone />
              <div>
                <h4>Phone</h4>
                <p>+91 80004 12345</p>
              </div>
            </div>

            <div className="info-card">
              <FiMail />
              <div>
                <h4>Email</h4>
                <p>info@samai.ai</p>
                <p>sales@samai.ai</p>
              </div>
            </div>

            <div className="info-card">
              <FiMapPin />
              <div>
                <h4>Location</h4>
                <p>Bangalore, India</p>
              </div>
            </div>

            <div className="info-card">
              <FiClock />
              <div>
                <h4>Business Hours</h4>
                <p>Mon – Fri</p>
                <p>09:00 AM – 06:00 PM</p>
              </div>
            </div>
          </div>
        </aside>

        {/* FORM PANEL */}
        <section className="contact-form-panel">
          <h2>Send us a message</h2>

          {submitted && (
            <div className="success-message">
              <FiCheckCircle />
              <span>
                Message sent successfully. We’ll get back to you shortly.
              </span>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="input-group">
                <FiUser />
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <FiUser />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={form.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="input-group">
                <FiPhone />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Mobile number"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-group">
                <FiMail />
                <input
                  type="email"
                  name="email"
                  placeholder="Work email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="input-group textarea">
              <FiMessageSquare />
              <textarea
                rows="4"
                name="message"
                placeholder="Tell us how we can help"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-actions">
  <button type="submit" className="submit-btn">
    Send Message
  </button>

  <button
    type="button"
    className="secondary-btn"
    onClick={() => navigate("/schedule-demo")}
  >
    Schedule a Demo
  </button>
</div>

          </form>
        </section>
      </section>
    </main>
  );
}
