import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/global.css";
import logoIcon from "../assets/android-chrome-512x512.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">
      {/* ================= LEFT ================= */}
      <div className="nav-left">
        <Link to="/" className="brand" onClick={closeMenu}>
          <img src={logoIcon} alt="Samai" className="brand-icon" />
          <span className="brand-text">Samai</span>
        </Link>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li>
            <NavLink
              to="/product"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Products
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/industry-domains"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Industry Domains
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/pricing"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Pricing
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/resources"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Resources
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/connect"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Let’s Connect
            </NavLink>
          </li>
        </ul>
      </div>

      {/* ================= RIGHT ================= */}
      <div className="nav-right">
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "nav-auth active" : "nav-auth"
          }
        >
          Login
        </NavLink>

        <NavLink
          to="/signup"
          className={({ isActive }) =>
            isActive ? "btn btn-primary nav-cta active" : "btn btn-primary nav-cta"
          }
        >
          Sign up
        </NavLink>

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
