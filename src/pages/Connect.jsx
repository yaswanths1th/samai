import { useState } from "react";
import "../styles/connect.css";

export default function Connect() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you. Our team will get back to you shortly.");
    setForm({ name: "", email: "", company: "", message: "" });
  };

  return (
    <main className="connect-page">
      {/* HERO */}
      <section className="connect-hero">
        <h1>Let’s Connect</h1>
        <p>
          Reach out to Samai for demos, enterprise pricing, partnerships,
          or technical support.
        </p>
      </section>

      {/* CONTENT */}
      <section className="connect-container">
        {/* LEFT */}
        <div className="connect-left">
          <h2>Contact Information</h2>

          <div className="info-block">
            <strong>General</strong>
            <span>info@samai.ai</span>
          </div>

          <div className="info-block">
            <strong>Sales</strong>
            <span>sales@samai.ai</span>
          </div>

          <div className="info-block">
            <strong>Support</strong>
            <span>support@samai.ai</span>
          </div>

          <div className="info-block">
            <strong>Phone</strong>
            <span>+91 9XXXXXXXXX</span>
          </div>

          {/* MAP */}
          {/*<div className="map-box">
            <iframe
              title="Samai Location"
              src="https://www.google.com/maps?q=India&output=embed"
              loading="lazy"
            />
          </div>*/}
        </div>

        {/* RIGHT */}
        <div className="connect-right">
          <h2>Send us a message</h2>

          <form onSubmit={handleSubmit}>
            <label>
              Full Name
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Work Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Company
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
              />
            </label>

            <label>
              Message
              <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                required
              />
            </label>

            <button type="submit">Submit Request</button>
          </form>
        </div>
      </section>
    </main>
  );
}
