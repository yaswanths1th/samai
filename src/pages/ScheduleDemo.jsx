import { useEffect, useMemo, useState } from "react";
import Toast from "../components/Toast";
import DemoReview from "../components/DemoReview";
import "../styles/demo.css";

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

// helpers
const to24h = (slot) => {
  // "09:00 AM" -> 9, "02:00 PM" -> 14
  const [time, mer] = slot.split(" ");
  let [h] = time.split(":").map(Number);
  if (mer === "PM" && h !== 12) h += 12;
  if (mer === "AM" && h === 12) h = 0;
  return h;
};

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

  const [showReview, setShowReview] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [errors, setErrors] = useState({});

  // today (yyyy-mm-dd) for min date
  const todayStr = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d.toISOString().slice(0, 10);
  }, []);

  // Reset slot when date changes
  useEffect(() => {
    setForm((f) => ({ ...f, slot: "" }));
  }, [form.date]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // Determine disabled slots (same-day past times)
  const disabledSlots = useMemo(() => {
    if (!form.date) return new Set();
    const selected = new Date(form.date);
    const now = new Date();
    const sameDay =
      selected.toDateString() === now.toDateString();

    if (!sameDay) return new Set();

    const currentHour = now.getHours();
    return new Set(
      TIME_SLOTS.filter((s) => to24h(s) <= currentHour)
    );
  }, [form.date]);

  const validateForReview = () => {
    const e = {};
    if (!form.name) e.name = "Name is required";
    if (!form.email) e.email = "Email is required";
    if (!form.company) e.company = "Company is required";
    if (!form.date) e.date = "Please select a date";
    if (!form.slot) e.slot = "Please select a time slot";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const confirmSend = () => {
    const subject = `Demo Request from ${form.name} (${form.company})`;
    const body = `
Name: ${form.name}
Email: ${form.email}
Company: ${form.company}
Role: ${form.role}
Date: ${form.date}
Time Slot: ${form.slot}

Use Case:
${form.message}
`;

    window.location.href = `mailto:info@samai.ai?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setShowReview(false);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
  };

  return (
    <main className="demo-page">
      <h1>Schedule a Demo</h1>
      <p>Choose a date and an available time slot. We’ll confirm shortly.</p>

      <form className="demo-form" onSubmit={(e) => e.preventDefault()}>
        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
        />
        {errors.name && <span className="err">{errors.name}</span>}

        <input
          name="email"
          type="email"
          placeholder="Work Email"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <span className="err">{errors.email}</span>}

        <input
          name="company"
          placeholder="Company Name"
          value={form.company}
          onChange={handleChange}
        />
        {errors.company && <span className="err">{errors.company}</span>}

        <input
          name="role"
          placeholder="Role / Designation"
          value={form.role}
          onChange={handleChange}
        />

        {/* Date */}
        <div className="date-section">
          <label>Select a date</label>
          <input
            type="date"
            name="date"
            min={todayStr}
            value={form.date}
            onChange={handleChange}
          />
          {errors.date && <span className="err">{errors.date}</span>}
        </div>

        {/* Slots */}
        <div className="slots-section">
          <label>Select a time slot</label>
          <div className="slots-grid">
            {TIME_SLOTS.map((slot) => {
              const disabled = disabledSlots.has(slot);
              const active = form.slot === slot;
              return (
                <button
                  type="button"
                  key={slot}
                  className={`slot-btn ${active ? "active" : ""}`}
                  disabled={disabled}
                  onClick={() =>
                    !disabled && setForm({ ...form, slot })
                  }
                  title={
                    disabled
                      ? "This slot has passed"
                      : "Select slot"
                  }
                >
                  {slot}
                </button>
              );
            })}
          </div>
          {errors.slot && <span className="err">{errors.slot}</span>}
        </div>

        <textarea
          name="message"
          placeholder="Briefly describe your use case"
          rows="4"
          value={form.message}
          onChange={handleChange}
        />

        <button
          className="btn-primary"
          type="button"
          onClick={() => {
            if (validateForReview()) setShowReview(true);
          }}
        >
          Review & Send
        </button>
      </form>

      {showReview && (
        <DemoReview
          data={form}
          onCancel={() => setShowReview(false)}
          onConfirm={confirmSend}
        />
      )}

      <Toast
        show={showToast}
        message="Demo request email opened successfully. Our team will contact you shortly."
      />
    </main>
  );
}
