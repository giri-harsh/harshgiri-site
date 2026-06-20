import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const coreRef = useRef(null);
  const nameRef = useRef(null);
  const [maskPos, setMaskPos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    // Disable parallax on touch devices
    const isTouch = window.matchMedia("(hover: none)").matches;

    const handleMove = e => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      if (coreRef.current) {
        coreRef.current.style.setProperty("--mx", x.toFixed(3));
        coreRef.current.style.setProperty("--my", y.toFixed(3));
      }

      if (nameRef.current) {
        const rect = nameRef.current.getBoundingClientRect();
        const nx = ((e.clientX - rect.left) / rect.width) * 100;
        const ny = ((e.clientY - rect.top) / rect.height) * 100;
        setMaskPos({ x: nx, y: ny });
      }
    };

    const handleScroll = () => {
      if (!coreRef.current) return;

      const heroHeight = window.innerHeight;
      const scrolled = Math.min(window.scrollY, heroHeight);
      const progress = scrolled / heroHeight;

      const opacity = 1 - progress;
      const scale = 1 - progress * 0.08;

      if (isTouch) {
        // On touch devices, only fade — no translate
        coreRef.current.style.opacity = opacity.toFixed(3);
        coreRef.current.style.transform = `scale(${scale.toFixed(3)})`;
      } else {
        coreRef.current.style.opacity = opacity.toFixed(3);
        coreRef.current.style.transform =
          `translate3d(calc(var(--mx) * 24px), calc(var(--my) * 24px), 0) scale(${scale.toFixed(3)})`;
      }
    };

    if (!isTouch) {
      window.addEventListener("mousemove", handleMove);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="hero hero-center">
      <div ref={coreRef} className="hero-core">

        <div className="name-zone">
          <h1
            ref={nameRef}
            className="hero-name"
            style={{
              backgroundPosition: `${maskPos.x}% ${maskPos.y}%`
            }}
          >
            Harsh Giri
          </h1>
        </div>

        <div className="hero-content">
          <h2 className="hero-role">
            Data Science Engineer | ML Model Development & Deployment
          </h2>

          <p className="hero-desc">
            Engineered production-grade ML systems delivering 92 percent accuracy,
            sub-30ms inference, and real-world scale reliability.
          </p>

          <div className="cta">
  <a
    className="btn"
    href="https://resume.harshgiri.site"
    target="_blank"
    rel="noreferrer"
  >
    Resume
  </a>

  <a href="#projects" className="btn">
    Projects
  </a>

  <a href="#contact" className="btn">
    Contact Me
  </a>

  <a
    className="btn"
    href="https://deploy.harshgiri.site"
    target="_blank"
    rel="noreferrer"
  >
    Deployments
  </a>
</div>

        </div>

      </div>

      <style>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 100px 20px 60px;
          text-align: center;
        }

        .hero-core {
          --mx: 0;
          --my: 0;
          will-change: transform, opacity;
          max-width: 860px;
          width: 100%;
        }

        .hero-name {
          font-size: clamp(42px, 10vw, 100px);
          font-weight: 800;
          margin: 0;
          background: linear-gradient(135deg, #ffffff 0%, #7aa2ff 50%, #6cf2c2 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          transition: background-position 0.1s ease;
        }

        .hero-role {
          font-size: clamp(14px, 3vw, 20px);
          color: rgba(255,255,255,0.75);
          font-weight: 400;
          margin: 16px 0 0;
          line-height: 1.5;
        }

        .hero-desc {
          font-size: clamp(13px, 2.5vw, 16px);
          color: rgba(255,255,255,0.55);
          margin: 16px auto 0;
          max-width: 600px;
          line-height: 1.7;
        }

        .cta {
          margin-top: 32px;
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 44px;
          padding: 10px 22px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.2);
          color: #ffffff;
          text-decoration: none;
          font-size: 14px;
          background: rgba(255,255,255,0.06);
          transition: background 0.2s, border-color 0.2s;
          white-space: nowrap;
        }

        @media (hover: hover) {
          .cta .btn:hover {
            background: rgba(255,255,255,0.12);
            border-color: rgba(255,255,255,0.4);
            color: #ffffff;
            box-shadow: none;
            transform: none;
          }
        }

        .cta .btn:active {
          background: rgba(255,255,255,0.15);
        }
      `}</style>
    </section>
  );
}