import React, { useState } from "react";
import "../styles/global.css";

export default function ScheduleDemo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const times = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const e = {};
    if (!formData.name) e.name = "Full name is required";
    if (!formData.email) e.email = "Email is required";
    if (!formData.company) e.company = "Company name is required";
    if (!formData.phone) e.phone = "Phone number is required";
    if (!formData.date) e.date = "Please select a date";
    if (!formData.time) e.time = "Please select a time";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length === 0) {
      setSubmitted(true);
    } else {
      setErrors(v);
    }
  };

  if (submitted) {
    return (
      <div className="success-message">
        <h2>Demo Confirmed</h2>
        <p>
          Thank you for scheduling a demo. Our team will contact you shortly with
          confirmation details.
        </p>
      </div>
    );
  }

  return (
    <main className="demo-page">
      {/* HERO */}
      <section className="hero">
        <span className="eyebrow">PRODUCT DEMO</span>
        <h1>See Our Platform in Action</h1>
        <p>
          Schedule a personalized walkthrough and discover how teams streamline
          operations with clarity and control.
        </p>
      </section>

      {/* FORM */}
      <section className="form-section">
        <form className="demo-form" onSubmit={handleSubmit} noValidate>

          {/* Row 1 */}
          <div className="form-row two">
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="john@company.com"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
          </div>

          {/* Row 2 */}
          <div className="form-row two">
            <div className="form-group">
              <label>Company Name</label>
              <input
                type="text"
                name="company"
                placeholder="Your Company Inc."
                value={formData.company}
                onChange={handleChange}
              />
              {errors.company && <span className="error">{errors.company}</span>}
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && <span className="error">{errors.phone}</span>}
            </div>
          </div>

          {/* Row 3 (Date + Time ONLY) */}
          <div className="form-row two">
            <div className="form-group">
              <label>Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
              {errors.date && <span className="error">{errors.date}</span>}
            </div>

            <div className="form-group">
              <label>Time</label>
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
              >
                <option value="">Select time</option>
                {times.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              {errors.time && <span className="error">{errors.time}</span>}
            </div>
          </div>

          {/* Message */}
          <div className="form-group">
            <label>Message (Optional)</label>
            <textarea
              name="message"
              placeholder="Tell us what you'd like to focus on during the demo"
              rows="4"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="cta-button">
            Schedule Demo
          </button>
        </form>
      </section>
    </main>
  );
}
