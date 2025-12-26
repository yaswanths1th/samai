import { useState } from "react";
import "../styles/global.css"

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.company || !form.email || !form.password) {
      setError("All fields are required");
      return;
    }

    setLoading(true);

    // TEMP: simulate API call
    setTimeout(() => {
      setLoading(false);
      alert("Signup API will be connected here");
    }, 1400);
  };

  return (
    <div className="signup-page">
      <div className="signup-card">
        <h1>Create your account</h1>
        <p className="subtitle">
          Start managing your business with <strong>Samai</strong>
        </p>

        {error && <div className="error-box">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full name</label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Company name</label>
            <input
              type="text"
              name="company"
              placeholder="Acme Inc."
              value={form.company}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Work email</label>
            <input
              type="email"
              name="email"
              placeholder="you@company.com"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Create a strong password"
              value={form.password}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="signup-btn"
            disabled={loading}
          >
            {loading ? "Creating account..." : "Create Account"}
          </button>
        </form>

        <div className="signup-footer">
          <span>Already have an account?</span>
          <span className="link">Login</span>
        </div>
      </div>
    </div>
  );
}
