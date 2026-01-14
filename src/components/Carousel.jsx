import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Send } from "lucide-react";

const cards = [
  {
    title: "Neural Architecture Search",
    description:
      "Engineered an AutoML pipeline that pioneered RL-driven topology search, improving validation accuracy by 14.2% at scale.",
    img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200",
  },
  {
    title: "Multi-Modal Fusion",
    description:
      "Spearheaded a transformer-based fusion engine combining vision and NLP streams, cutting inference latency by 37ms.",
    img: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1200",
  },
  {
    title: "Efficient Training",
    description:
      "Architected distributed training with FSDP + AMP, reducing epoch time by 46% across 8-GPU clusters.",
    img: "https://images.unsplash.com/photo-1555949963-0b2f0b8f6c94?q=80&w=1200",
  },
  {
    title: "Model Compression",
    description:
      "Deployed quantized models using INT8 pipelines, shrinking memory footprint by 62% with sub-1% accuracy loss.",
    img: "https://images.unsplash.com/photo-1555949963-8f7f1cdb5f9b?q=80&w=1200",
  },
];

export default function Carousel() {
  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["110vw", "0vw", "0vw"]
  );

  return (
    <div
      ref={scrollRef}
      style={{
        position: "relative",
        height: "300vh",
        width: "100%",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          overflow: "hidden",
          background: "transparent",
          zIndex: 0,
        }}
      >
        <div className="projects-head">
          <h2 className="projects-title">Selected Production-Ready Projects</h2>
          <p className="projects-sub">
            End-to-end ML systems from research to production
          </p>
        </div>


        <motion.div
          style={{
            x,
            display: "flex",
            gap: "2.2rem",
            paddingLeft: "6vw",
            paddingRight: "6vw",
            willChange: "transform",
          }}
        >
          {cards.map((card, i) => (
            <div
              key={i}
              className="glow-card"
              onMouseMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty(
                  "--px",
                  `${e.clientX - r.left}px`
                );
                e.currentTarget.style.setProperty(
                  "--py",
                  `${e.clientY - r.top}px`
                );
              }}
            >
              <img src={card.img} alt="" />
              <h3>{card.title}</h3>
              <p>{card.description}</p>

              <div className="card-actions">
                <a className="cbtn">GitHub</a>
                <a className="cbtn primary">Live</a>
              </div>
            </div>
          ))}
        </motion.div>
        <div className="projects-footer">
  <a
    href="https://project.harshgiri.site"
    className="cbtn primary view-all"
    target="_blank"
    rel="noreferrer"
  >
    <span>View All Projects</span>
    <Send size={18} />
  </a>
</div>

      </div>

      <style>{`
        .projects-head {
  width: 100%;
  text-align: center;
  margin-bottom: 48px;
}

.projects-title {
  font-family: "Inter", system-ui, sans-serif;
  font-size: clamp(28px, 4vw, 44px);
  font-weight: 700;
  letter-spacing: 0.4px;
  color: #ffffff;
  margin: 0;
}

.projects-sub {
  margin-top: 10px;
  font-size: clamp(14px, 1.6vw, 18px);
  color: rgba(255,255,255,0.75);
  letter-spacing: 0.2px;
}
  .projects-footer {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 36px;
}

.view-all {
  padding: 18px 36px;
  font-size: 15px;
  letter-spacing: 0.5px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
}




        .glow-card {
          position: relative;
          flex-shrink: 0;
          width: 420px;
          height: 640px;
          background: linear-gradient(
            160deg,
            rgba(18, 28, 58, 0.85),
            rgba(9, 13, 28, 0.95)
          );
          color: #ffffff;
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: 22px;
          padding: 22px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          overflow: hidden;
          cursor: pointer;
          backdrop-filter: blur(10px);
        }

        .glow-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
            220px circle at var(--px, 50%) var(--py, 50%),
            rgba(108,242,194,0.35),
            transparent 60%
          );
          opacity: 0;
          transition: opacity 0.2s ease;
          pointer-events: none;
        }

        .glow-card:hover::before {
          opacity: 1;
        }

        .glow-card::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          box-shadow: 0 0 0 rgba(0,0,0,0);
          transition: box-shadow 0.25s ease;
          pointer-events: none;
        }

        .glow-card:hover::after {
          box-shadow:
            0 0 22px rgba(108,242,194,0.35),
            0 0 48px rgba(122,162,255,0.25);
        }

        .glow-card img {
          width: 100%;
          height: 260px;
          object-fit: cover;
          border-radius: 14px;
        }

        .glow-card h3 {
          font-size: 28px;
          margin: 6px 0 0;
        }

        .glow-card p {
          font-size: 15px;
          line-height: 1.55;
          color: rgba(255,255,255,0.78);
        }

        .card-actions {
          margin-top: auto;
          display: flex;
          gap: 12px;
        }

        .cbtn {
          padding: 12px 18px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.25);
          background: rgba(255,255,255,0.04);
          color: #ffffff;
          font-size: 13px;
          cursor: pointer;
          transition:
            transform 0.12s ease,
            background 0.2s ease,
            box-shadow 0.2s ease;
        }

        .cbtn.primary {
          background: linear-gradient(135deg, #6cf2c2, #7aa2ff);
          color: #05070d;
        }

        .cbtn:hover {
          background: linear-gradient(135deg, #6cf2c2, #7aa2ff);
          color: #05070d;
          box-shadow:
            0 0 18px rgba(108,242,194,0.45),
            0 0 32px rgba(122,162,255,0.35);
          transform: translateY(-3px) scale(1.04);
        }

        .cbtn:active {
          transform: translateY(0) scale(0.92);
        }
      `}</style>
    </div>
  );
}
