import { useState } from "react";
import "./scheduleDemo.css";

const TIME_SLOTS = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
];

export default function ScheduleDemo() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    date: "",
    slot: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setError("");
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const isValid =
    form.name &&
    form.email &&
    form.company &&
    form.date &&
    form.slot;

  const subject = `Demo Request – ${form.company || "Samai"}`;

  const body = `
Name: ${form.name}
Email: ${form.email}
Company: ${form.company}
Role: ${form.role || "N/A"}

Preferred Date: ${form.date}
Preferred Time: ${form.slot}

Use Case:
${form.message || "Not specified"}
`;

  const mailtoLink = `mailto:info@samai.ai?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return (
    <div className="demo-wrapper">
      {/* Header */}
      <section className="demo-hero">
        <h1>Schedule a Demo</h1>
        <p>
          See how Samai helps organizations design, orchestrate, and optimize
          business processes.
        </p>
      </section>

      {/* Form */}
      <section className="demo-card">
        {error && <div className="demo-error">{error}</div>}

        <div className="form-grid">
          <div className="form-group">
            <label>Full Name *</label>
            <input
              name="name"
              placeholder="John Doe"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Work Email *</label>
            <input
              type="email"
              name="email"
              placeholder="john@company.com"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Company *</label>
            <input
              name="company"
              placeholder="Company name"
              value={form.company}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Role</label>
            <input
              name="role"
              placeholder="Your role"
              value={form.role}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Preferred Date *</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Preferred Time *</label>
          <div className="slot-grid">
            {TIME_SLOTS.map((slot) => (
              <button
                key={slot}
                type="button"
                className={`slot-btn ${
                  form.slot === slot ? "active" : ""
                }`}
                onClick={() => setForm({ ...form, slot })}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label>Use Case</label>
          <textarea
            name="message"
            placeholder="Briefly describe your requirements"
            rows="4"
            value={form.message}
            onChange={handleChange}
          />
        </div>

        {/* THIS IS THE KEY CHANGE */}
        {isValid ? (
          <a
            href={mailtoLink}
            className="submit-btn"
          >
            Request Demo
          </a>
        ) : (
          <button
            className="submit-btn disabled"
            onClick={() =>
              setError("Please fill all required fields")
            }
          >
            Request Demo
          </button>
        )}

        <p className="demo-note">
          This will open your email application. Please click{" "}
          <strong>Send</strong> to complete the request.
        </p>
      </section>
    </div>
  );
}
