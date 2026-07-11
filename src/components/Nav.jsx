import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

function Nav() {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  function goToSection(id) {
    setOpen(false);
    if (location.pathname === "/") {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate(`/#${id}`);
    }
  }

  return (
    <nav className="relative flex items-center justify-between px-5 sm:px-8 py-4 border-b border-gray-900 dark:border-gray-100">
      <Link to="/" onClick={() => setOpen(false)} className="text-base font-medium">
        Boj.py
      </Link>

      <div className="flex items-center gap-2 sm:gap-4">
        {/* Desktop links */}
        <div className="hidden sm:flex gap-5 text-sm text-gray-700 dark:text-gray-300">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => goToSection(link.id)}
              className="hover:text-gray-900 dark:hover:text-white"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Theme toggle */}
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          className="border border-gray-900 dark:border-gray-100 rounded p-1.5 flex items-center justify-center"
        >
          {theme === "dark" ? (
            <Sun size={18} aria-hidden="true" />
          ) : (
            <Moon size={18} aria-hidden="true" />
          )}
        </button>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="sm:hidden border border-gray-900 dark:border-gray-100 rounded p-1.5"
        >
          {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="sm:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-950 border-b border-gray-900 dark:border-gray-100 flex flex-col z-10">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => goToSection(link.id)}
              className="text-left text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-5 py-3 border-t border-gray-200 dark:border-gray-800 first:border-t-0"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Nav;
