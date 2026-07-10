import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

function Nav() {
  const navigate = useNavigate();
  const location = useLocation();

  function goToSection(id) {
    if (location.pathname === "/") {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate(`/#${id}`);
    }
  }

  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-900">
      <Link to="/" className="text-base font-medium">
        Boj.py
      </Link>
      <div className="flex gap-5 text-sm text-gray-700">
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => goToSection(link.id)}
            className="hover:text-gray-900"
          >
            {link.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
