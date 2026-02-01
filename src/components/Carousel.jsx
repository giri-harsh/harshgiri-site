import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
    title: "Multi-Disease Prediction Models",
    description:
      "Unified prediction system for Diabetes, Parkinson’s, and Heart Disease using SVM and ensemble models on 100K+ clinical records. Delivered ~88–92% accuracy with modular Streamlit deployment.",
    img: "/img/disease.png",
    github: "https://github.com/giri-harsh/AI-Disease-Prediction",
    live: null,
  },
  {
    title: "Python Machine Learning Projects Collection",
    description:
      "Curated production-style ML projects spanning classification, regression, and EDA. Built reusable preprocessing and evaluation pipelines, reducing experimentation time by ~45%.",
    img: "/img/ml.png",
    github: "https://github.com/giri-harsh/Python-ML-projects",
    live: null,
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
    <div ref={scrollRef} style={{ height: "300vh" }}>
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          overflow: "hidden",
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
            padding: "0 6vw",
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
              <img src={card.img} alt={card.title} />
              <h3>{card.title}</h3>
              <p>{card.description}</p>

              <div className="card-actions">
                <a
                  href={card.github}
                  className="cbtn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>

                {card.live ? (
                  <a
                    href={card.live}
                    className="cbtn primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live
                  </a>
                ) : (
                  <span className="cbtn disabled">Live</span>
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
          margin-bottom: 48px;
        }

        .projects-title {
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 700;
          color: #fff;
        }

        .projects-sub {
          margin-top: 10px;
          font-size: 16px;
          color: rgba(255,255,255,0.75);
        }

        .glow-card {
          position: relative;
          width: 420px;
          height: 640px;
          padding: 22px;
          border-radius: 22px;
          background: linear-gradient(
            160deg,
            rgba(18,28,58,0.9),
            rgba(9,13,28,0.95)
          );
          color: #fff;
          display: flex;
          flex-direction: column;
          gap: 14px;
          overflow: hidden;
        }

        /* CURSOR GLOW */
        .glow-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
            240px circle at var(--px, 50%) var(--py, 50%),
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

        .glow-card img {
          width: 100%;
          height: 260px;
          object-fit: cover;
          border-radius: 14px;
        }

        .card-actions {
          margin-top: auto;
          display: flex;
          gap: 12px;
        }

        /* BUTTON MICRO-INTERACTIONS */
        .cbtn {
          padding: 12px 18px;
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

        .cbtn:hover {
          transform: scale(1.06);
          border-color: rgba(108,242,194,0.9);
          box-shadow:
            0 0 18px rgba(108,242,194,0.45),
            0 0 32px rgba(122,162,255,0.35);
        }

        .cbtn:active {
          transform: scale(0.92);
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
          margin-top: 36px;
          display: flex;
          justify-content: center;
        }
      `}</style>
    </div>
  );
}
