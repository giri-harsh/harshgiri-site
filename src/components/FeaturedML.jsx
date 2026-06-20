import { useRef } from "react";

export default function FeaturedML() {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    cardRef.current.style.setProperty("--px", `${x}%`);
    cardRef.current.style.setProperty("--py", `${y}%`);
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.setProperty("--px", "50%");
    cardRef.current.style.setProperty("--py", "50%");
  };

  return (
    <section id="projects" className="featured-stage">
      <h2 className="featured-ml-title">Featured ML Architecture</h2>

      <div
        ref={cardRef}
        className="featured-card"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="featured-media">
          <img
            src="/img/game-recommendation-architecture.png"
            alt="Game Recommendation System Architecture"
            loading="lazy"
          />
        </div>

        <div className="featured-content">
          <h3>Game Recommendation System</h3>
          <p>
            Engineered a production-grade recommender pipeline using collaborative
            filtering and embedding-based retrieval (HNSW), addressing cold-start
            scenarios and ranking optimization. Achieved 38% engagement uplift,
            sub-25ms inference latency, and stable performance at 150K+ item scale
            with ROC-AUC 0.91.
          </p>
          <div className="card-actions">
            <a
              href="https://github.com/giri-harsh/Game-Recommendation-System"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://game-recommeder.vercel.app"
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .featured-stage {
          padding: 80px 20px;
          max-width: 1100px;
          margin: 0 auto;
        }
        @media (min-width: 768px) {
          .featured-stage { padding: 120px 24px; }
        }
        .featured-ml-title {
          font-size: clamp(24px, 4vw, 40px);
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 40px;
          text-align: center;
        }
        .featured-card {
          --px: 50%;
          --py: 50%;
          position: relative;
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.12);
          background: linear-gradient(160deg, rgba(18,28,58,0.75), rgba(9,13,28,0.9));
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        @media (min-width: 768px) {
          .featured-card {
            flex-direction: row;
            border-radius: 26px;
          }
        }
        @media (hover: hover) {
          .featured-card::before {
            content: "";
            position: absolute;
            inset: 0;
            background: radial-gradient(circle at var(--px) var(--py), rgba(108,242,194,0.12), transparent 60%);
            pointer-events: none;
          }
        }
        .featured-media {
          width: 100%;
          overflow: hidden;
        }
        @media (min-width: 768px) {
          .featured-media { width: 55%; }
        }
        .featured-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          max-height: 260px;
        }
        @media (min-width: 768px) {
          .featured-media img { max-height: none; }
        }
        .featured-content {
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 16px;
        }
        @media (min-width: 768px) {
          .featured-content {
            width: 45%;
            padding: 40px 36px;
          }
        }
        .featured-content h3 {
          margin: 0;
          font-size: clamp(18px, 3vw, 26px);
          font-weight: 700;
          color: #ffffff;
        }
        .featured-content p {
          margin: 0;
          color: rgba(255,255,255,0.72);
          font-size: clamp(13px, 2vw, 15px);
          line-height: 1.7;
        }
        .card-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 8px;
        }
        .card-actions .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 44px;
          padding: 10px 24px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.2);
          color: #ffffff;
          text-decoration: none;
          font-size: 14px;
          background: rgba(255,255,255,0.06);
          transition: background 0.2s, border-color 0.2s;
        }
        @media (hover: hover) {
          .card-actions .btn:hover {
            background: rgba(255,255,255,0.12);
            border-color: rgba(255,255,255,0.4);
          }
        }
        .card-actions .btn:active {
          background: rgba(255,255,255,0.15);
        }
      `}</style>
    </section>
  );
}
