import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Samai</div>

      <button
        className="menu-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
        <li><Link to="/product" onClick={() => setOpen(false)}>Product</Link></li>
        <li><Link to="/how-it-works" onClick={() => setOpen(false)}>How It Works</Link></li>
        <li><Link to="/industry-domains" onClick={() => setOpen(false)}>Industries</Link></li>
        <li><Link to="/pricing" onClick={() => setOpen(false)}>Pricing</Link></li>
        <li><Link to="/login" onClick={() => setOpen(false)}>Login</Link></li>
        <li><Link to="/signup" onClick={() => setOpen(false)} className="btn-primary">
          Signup
        </Link></li>
      </ul>
    </nav>
  );
}
