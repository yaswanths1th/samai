import { useState } from "react";
import "../styles/global.css";

export default function Login() {
  const [form, setForm] = useState({
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

    if (!form.email || !form.password) {
      setError("Please enter email and password");
      return;
    }

    setLoading(true);

    // TEMP: simulate API call
    setTimeout(() => {
      setLoading(false);
      alert("Login API will be connected here");
    }, 1200);
  };

  return (
    <main className="login-page">
      <section className="login-card">
        <header className="login-header">
          <h1>Welcome back</h1>
          <p className="subtitle">
            Sign in to continue to <strong>Samai</strong>
          </p>
        </header>

        {error && <div className="error-box">{error}</div>}

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="you@company.com"
              value={form.email}
              onChange={handleChange}
              autoComplete="username"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
              autoComplete="current-password"
            />
          </div>

          <button
            type="submit"
            className="login-btn"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Login"}
          </button>
        </form>

        <footer className="login-footer">
          <span className="muted">Forgot password?</span>
          <span className="link">Contact support</span>
        </footer>
      </section>
    </main>
  );
}
