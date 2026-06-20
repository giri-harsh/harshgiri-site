import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const links = [
    { label: "Resume", href: "https://resume.harshgiri.site" },
    { label: "Projects", href: "https://project.harshgiri.site" },
    { label: "Contact", href: "#contact" },
    { label: "Deployments", href: "https://deploy.harshgiri.site" },
  ];

  return (
    <nav className="nav">
      <div className="brand">Harsh Giri</div>

      {/* Desktop links */}
      <div className="links">
        {links.map((l) => (
          <a key={l.label} href={l.href}>{l.label}</a>
        ))}
      </div>

      {/* Hamburger button */}
      <button
        className="hamburger"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span className={`bar ${open ? "bar1-open" : ""}`} />
        <span className={`bar ${open ? "bar2-open" : ""}`} />
        <span className={`bar ${open ? "bar3-open" : ""}`} />
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="mobile-menu">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
          background: rgba(9, 13, 28, 0.85);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .brand {
          font-weight: 700;
          font-size: 18px;
          color: #ffffff;
          z-index: 101;
        }

        .links {
          display: none;
          gap: 28px;
        }

        @media (min-width: 768px) {
          .links {
            display: flex;
          }
        }

        .links a {
          color: rgba(255,255,255,0.75);
          text-decoration: none;
          font-size: 14px;
          transition: color 0.2s;
        }

        .links a:hover {
          color: #ffffff;
        }

        .hamburger {
          display: flex;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          z-index: 101;
        }

        @media (min-width: 768px) {
          .hamburger {
            display: none;
          }
        }

        .bar {
          display: block;
          width: 24px;
          height: 2px;
          background: #ffffff;
          border-radius: 2px;
          transition: transform 0.3s, opacity 0.3s;
        }

        .bar1-open { transform: translateY(7px) rotate(45deg); }
        .bar2-open { opacity: 0; }
        .bar3-open { transform: translateY(-7px) rotate(-45deg); }

        .mobile-menu {
          position: fixed;
          top: 57px;
          left: 0;
          right: 0;
          background: rgba(9, 13, 28, 0.97);
          backdrop-filter: blur(12px);
          display: flex;
          flex-direction: column;
          padding: 20px;
          gap: 4px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .mobile-menu a {
          color: rgba(255,255,255,0.85);
          text-decoration: none;
          font-size: 16px;
          padding: 14px 8px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          transition: color 0.2s;
          min-height: 44px;
          display: flex;
          align-items: center;
        }

        .mobile-menu a:last-child {
          border-bottom: none;
        }

        .mobile-menu a:hover {
          color: #ffffff;
        }
      `}</style>
    </nav>
  );
}