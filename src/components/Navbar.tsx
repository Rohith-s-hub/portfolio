import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import CommandPalette from "./CommandPalette";
import GitHubIcon from "./icons/GitHubIcon";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/blog", label: "Blog" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/now", label: "Now" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35 }}
        className={`site-header ${scrolled ? "scrolled" : ""}`}
      >
        <div className="section-shell site-header__inner">
          <Link to="/" className="logo" aria-label="Rohith home">
            <div className="logo-mark">R</div>
            <div className="logo-copy">
              <div className="logo-name">Rohith</div>
              <div className="logo-tag">AI • Full-stack • Security</div>
            </div>
          </Link>

          <nav className="site-nav" aria-label="Main navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => `site-link ${isActive ? "active" : ""}`}
              >
                {link.label}
              </NavLink>
            ))}
            <CommandPalette />
            <a
              href="https://github.com/Rohith-s-hub"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="nav-icon"
            >
              <GitHubIcon className="h-[18px] w-[18px]" />
            </a>
            <ThemeToggle />
            <Link to="/resume" className="cta cta--small">Resume</Link>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="nav-menu-toggle" aria-label="Toggle menu">
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-[#0a0a0a]/40 backdrop-blur-sm md:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="fixed left-4 right-4 top-20 z-50 overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--paper)] shadow-[0_30px_70px_rgba(0,0,0,0.18)] md:hidden"
            >
              <nav className="space-y-1 p-2">
                {navLinks.map((link, i) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === "/"}
                    className={({ isActive }) =>
                      `flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-all ${
                        isActive ? "bg-[var(--panel-alt)] text-[var(--ink)]" : "text-[var(--muted)] hover:bg-[var(--panel-alt)] hover:text-[var(--ink)]"
                      }`
                    }
                  >
                    <span>{link.label}</span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--muted)]">0{i + 1}</span>
                  </NavLink>
                ))}
              </nav>
              <div className="border-t border-[var(--line)] p-3">
                <Link to="/resume" className="flex w-full items-center justify-center rounded-xl bg-[var(--ink)] px-5 py-3 text-sm font-semibold text-white">
                  View resume
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
