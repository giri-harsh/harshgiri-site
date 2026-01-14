import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const coreRef = useRef(null);
  const nameRef = useRef(null);
  const [maskPos, setMaskPos] = useState({ x: 50, y: 50 });

  useEffect(() => {
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

      coreRef.current.style.opacity = opacity.toFixed(3);
      coreRef.current.style.transform =
        `translate3d(calc(var(--mx) * 24px), calc(var(--my) * 24px), 0) scale(${scale.toFixed(3)})`;
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("ousemove", handleMove);
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
<a href="#projects" className="btn">Projects</a>

  <a href="#contact" className="btn">Contact Me</a>
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
    </section>
  );
}
