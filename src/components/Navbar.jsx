import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import logoIcon from "../assets/android-chrome-512x512.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">
      {/* LEFT */}
      <div className="nav-left">
        <Link to="/" className="brand">
          <img
            src={logoIcon}
            alt="Samai"
            className="brand-icon"
          />
          <span className="brand-text">Samai</span>
        </Link>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li><Link to="/product" onClick={closeMenu}>Product</Link></li>
          <li><Link to="/industry-domains" onClick={closeMenu}>Industry Domains</Link></li>
          <li><Link to="/pricing" onClick={closeMenu}>Pricing</Link></li>
          <li><Link to="/product" onClick={closeMenu}>Resources</Link></li>

          <li><Link to="/connect" onClick={closeMenu}>Let’s Connect</Link></li>
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
    </header>
  );
}
