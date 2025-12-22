import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* LEFT */}
      <div className="nav-left">
        <div className="logo">Samai</div>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/product">Product</Link></li>
          <li><Link to="/how-it-works">Industry Domains</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/connect">Let's Connect</Link></li>
        </ul>
      </div>

      {/* RIGHT */}
      <div className="nav-right">
        <Link to="/login" className="nav-auth">Login</Link>
        <Link to="/signup" className="btn-primary">Signup</Link>

        {/* Mobile toggle */}
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>
    </nav>
  );
}
