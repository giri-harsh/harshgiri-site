import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { Send } from "lucide-react";

const cards = [
  {
    title: "AI-Powered Game Recommendation System",
    description:
      "Engineered a content-based recommendation engine using TF-IDF and cosine similarity over a 10K+ game dataset. Achieved ~90ms inference latency and ~38% relevance improvement; deployed a REST-backed web app on Vercel.",
    img: "/img/game-recommendation-architecture.png",
    github: "https://github.com/giri-harsh/Game-Recommendation-System",
    live: "https://game-recommeder.vercel.app",
  },
  {
    title: "Loan Approval Prediction System",
    description:
      "Built an end-to-end ML pipeline using Logistic Regression and Random Forests on 50K+ records with class-imbalance handling. Achieved ~86% accuracy and ~120ms latency; deployed via Streamlit.",
    img: "/img/loan_pred.png",
    github: "https://github.com/giri-harsh/Loan-Prediction",
    live: "https://loan-approval-harsh-giri.streamlit.app",
  },
  {
    title: "Yap-Doc — Conversational RAG PDF Assistant",
    description:
      "An AI-powered RAG application that transforms PDFs into interactive conversations using semantic search, vector embeddings, and LLMs.",
    img: "/img/disease.png",
    github: "https://github.com/giri-harsh/yap-doc",
    live: "https://yap-doc.harshgiri.site/",
  },
  {
    title: "Food Vision AI — Real-Time Nutrition Recognition",
    description:
      "Engineered an AI-powered food recognition system that identifies dishes from images and delivers real-time nutritional insights, including estimated calorie content.",
    img: "/img/ml.png",
    github: "https://github.com/giri-harsh/food-vision-ai",
    live: "https://food.harshgiri.site/",
  },
];

export default function Carousel() {
  const scrollRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["110vw", "0vw", "0vw"]
  );

  // Respect prefers-reduced-motion: skip the scroll-linked slide and the
  // extra scroll runway that exists purely to drive that animation.
  const trackX = shouldReduceMotion ? "0vw" : x;
  const trackHeight = shouldReduceMotion ? "auto" : "300vh";
  const stageStyle = shouldReduceMotion
    ? {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "64px 0",
      }
    : {
        position: "sticky",
        top: 0,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
      };

  return (
    <div ref={scrollRef} style={{ height: trackHeight }}>
      <div style={stageStyle}>
        <div className="projects-head">
          <h2 className="projects-title">Selected Production-Ready Projects</h2>
          <p className="projects-sub">
            End-to-end ML systems from research to production
          </p>
        </div>

        <motion.div className="carousel-track" style={{ x: trackX }}>
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
              <img
                src={card.img}
                alt={`${card.title} — preview screenshot`}
                loading="lazy"
              />
              <h3>{card.title}</h3>
              <p>{card.description}</p>

              <div className="card-actions">
                <a
                  href={card.github}
                  className="cbtn"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${card.title} — view source on GitHub`}
                >
                  GitHub
                </a>

                {card.live ? (
                  <a
                    href={card.live}
                    className="cbtn primary"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${card.title} — open live demo`}
                  >
                    Live
                  </a>
                ) : (
                  <span className="cbtn disabled" aria-disabled="true">
                    Live
                  </span>
                )}
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
          text-align: center;
          padding: 0 20px;
          margin-bottom: 32px;
        }

        .projects-title {
          font-size: clamp(26px, 4vw, 44px);
          font-weight: 700;
          color: #fff;
        }

        .projects-sub {
          margin-top: 10px;
          font-size: clamp(13px, 2vw, 16px);
          color: rgba(255,255,255,0.75);
        }

        @media (min-width: 768px) {
          .projects-head { margin-bottom: 48px; }
        }

        /* TRACK */
        .carousel-track {
          display: flex;
          gap: 1rem;
          padding: 0 5vw;
        }

        @media (min-width: 600px) {
          .carousel-track { gap: 1.5rem; }
        }

        @media (min-width: 1000px) {
          .carousel-track { gap: 2.2rem; padding: 0 6vw; }
        }

        /* CARDS — fluid width with capped ceiling so they never overflow
           the viewport on small screens, and never exceed the original
           420px design size on large screens. */
        .glow-card {
          position: relative;
          flex: 0 0 auto;
          width: min(78vw, 320px);
          min-height: 480px;
          padding: 18px;
          border-radius: 18px;
          background: linear-gradient(
            160deg,
            rgba(18,28,58,0.9),
            rgba(9,13,28,0.95)
          );
          border: 1px solid rgba(255,255,255,0.08);
          color: #fff;
          display: flex;
          flex-direction: column;
          gap: 12px;
          overflow: hidden;
          --px: 50%;
          --py: 50%;
        }

        @media (min-width: 600px) {
          .glow-card {
            width: min(60vw, 360px);
            min-height: 560px;
            padding: 20px;
            border-radius: 20px;
          }
        }

        @media (min-width: 1000px) {
          .glow-card {
            width: 420px;
            min-height: 640px;
            padding: 22px;
            border-radius: 22px;
            gap: 14px;
          }
        }

        /* CURSOR GLOW — pointer-only, so it never leaves a stuck highlight
           on touch devices that can't fire mousemove the same way. */
        @media (hover: hover) and (pointer: fine) {
          .glow-card::before {
            content: "";
            position: absolute;
            inset: 0;
            background: radial-gradient(
              240px circle at var(--px) var(--py),
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
        }

        .glow-card img {
          width: 100%;
          height: 160px;
          object-fit: cover;
          border-radius: 12px;
          flex-shrink: 0;
        }

        @media (min-width: 600px) {
          .glow-card img { height: 200px; border-radius: 14px; }
        }

        @media (min-width: 1000px) {
          .glow-card img { height: 260px; }
        }

        .glow-card h3 {
          font-size: clamp(16px, 2.4vw, 20px);
          line-height: 1.3;
          margin: 0;
        }

        .glow-card p {
          font-size: clamp(13px, 1.8vw, 14px);
          line-height: 1.6;
          color: rgba(255,255,255,0.78);
          margin: 0;
        }

        .card-actions {
          margin-top: auto;
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        /* BUTTON MICRO-INTERACTIONS — min 44px hit target for touch */
        .cbtn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 44px;
          padding: 10px 18px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.25);
          background: rgba(255,255,255,0.05);
          color: #fff;
          font-size: 13px;
          text-decoration: none;
          transition:
            transform 0.15s ease,
            box-shadow 0.2s ease,
            border-color 0.2s ease;
        }

        @media (hover: hover) and (pointer: fine) {
          .cbtn:hover {
            transform: scale(1.06);
            border-color: rgba(108,242,194,0.9);
            box-shadow:
              0 0 18px rgba(108,242,194,0.45),
              0 0 32px rgba(122,162,255,0.35);
          }
        }

        .cbtn:active {
          transform: scale(0.92);
        }

        .cbtn:focus-visible {
          outline: 2px solid var(--accent, #6cf2c2);
          outline-offset: 2px;
        }

        .cbtn.primary {
          background: linear-gradient(135deg, #6cf2c2, #7aa2ff);
          color: #05070d;
        }

        .cbtn.disabled {
          opacity: 0.4;
          pointer-events: none;
        }

        .projects-footer {
          margin-top: 28px;
          padding: 0 20px;
          display: flex;
          justify-content: center;
        }

        @media (min-width: 768px) {
          .projects-footer { margin-top: 36px; }
        }

        .view-all {
          gap: 8px;
        }
      `}</style>
    </div>
  );
}
