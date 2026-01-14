import useInView from "../hooks/useInView";

export default function Featured() {
  const { ref, visible } = useInView({ threshold: 0.3 });

  return (
    <section ref={ref}>
      <div className={`card featured ${visible ? "show" : ""}`}>
        <img src="TODO_featured_image.png" alt="Game Recommendation System" />
        <div className="content">
          <h3>Game Recommendation System</h3>
          <p>
            Solved cold-start discovery using collaborative filtering and
            embeddings, boosting engagement by 38 percent.
          </p>
          <div className="actions">
            <a className="btn" href="TODO_github">GitHub</a>
            <a className="btn primary" href="TODO_demo">Live Demo</a>
          </div>
        </div>
      </div>
    </section>
  );
}
