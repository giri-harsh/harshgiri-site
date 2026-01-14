import { useEffect, useRef } from "react";

export default function CanvasBG() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w = window.innerWidth;
    let h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;

    const particles = Array.from({ length: 220 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 3 + 1,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
    }));

    let scrollFactor = 0;

    const onScroll = () => {
      const vh = window.innerHeight;
      scrollFactor = Math.min(window.scrollY / vh, 1);
    };

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("scroll", onScroll, { passive: true });

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      const grad = ctx.createLinearGradient(0, 0, w, h);

      // Scroll-driven color morph
      const r1 = 11 + scrollFactor * 40;
      const g1 = 15 + scrollFactor * 25;
      const b1 = 26 + scrollFactor * 60;

      const r2 = 8;
      const g2 = 12 + scrollFactor * 20;
      const b2 = 40 + scrollFactor * 30;

      grad.addColorStop(0, `rgb(${r1}, ${g1}, ${b1})`);
      grad.addColorStop(1, `rgb(${r2}, ${g2}, ${b2})`);

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(180, 220, 255, 0.85)";
        ctx.fill();
      });

      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
}
