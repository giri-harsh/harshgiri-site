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
    </section>
  );
}
