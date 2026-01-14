import { Brain, Database, Code2, Sparkles, Rocket } from "lucide-react";

export default function Capabilities() {
  const cards = [
  {
    icon: Brain,
    title: "Machine Learning",
    desc: "Model development, training, and optimization",
  },
  {
    icon: Database,
    title: "Recommendation Systems",
    desc: "Content-based & collaborative filtering",
  },
  {
    icon: Code2,
    title: "Feature Engineering",
    desc: "Data preprocessing & transformation",
  },
  {
    icon: Sparkles,
    title: "Explainable AI",
    desc: "SHAP, interpretability, trust layers",
  },
  {
    icon: Rocket,
    title: "Model Deployment",
    desc: "Streamlit, FastAPI, production systems",
  },
  {
    icon: Brain,
    title: "Model Evaluation",
    desc: "ROC-AUC, precision-recall, offline & online metrics",
  },
  {
    icon: Database,
    title: "Data Pipelines",
    desc: "Ingestion, validation, versioning, and ETL workflows",
  },
  {
    icon: Code2,
    title: "MLOps Foundations",
    desc: "Experiment tracking, model versioning, CI-style flows",
  },
];

  return (
    <section className="capabilities-stage">
      <h2 className="cap-title">Core Capabilities</h2>
      <p className="cap-sub">
        Technical expertise in ML engineering and deployment
      </p>

      <div className="cap-grid">
        {cards.map((c, i) => (
          <div key={i} className="cap-card">
            <c.icon size={28} />
            <h4>{c.title}</h4>
            <p>{c.desc}</p>
          </div>
        ))}
      </div>

      <div className="tech-panel">
        <h3>Tech Stack</h3>
        <div className="tech-cols">
          <div>
            <span className="th">ML/DL</span>
            <ul>
              <li>Scikit-learn</li>
              <li>TensorFlow</li>
              <li>PyTorch</li>
              <li>XGBoost</li>
            </ul>
          </div>

          <div>
            <span className="th">Data</span>
            <ul>
              <li>Pandas</li>
              <li>NumPy</li>
              <li>SQL</li>
            </ul>
          </div>

          <div>
            <span className="th">Deployment</span>
            <ul>
              <li>Streamlit</li>
              <li>FastAPI</li>
            </ul>
          </div>

          <div>
            <span className="th">Languages</span>
            <ul>
              <li>Python</li>
              <li>C++</li>
              <li>C</li>
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        .capabilities-stage {
          min-height: 100vh;
          padding: 120px 24px;
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }

        .cap-title {
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 700;
          color: #ffffff;
          margin: 0;
        }

        .cap-sub {
          margin-top: 10px;
          color: rgba(255,255,255,0.75);
        }

        .cap-grid {
          margin-top: 64px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
        }

        .cap-card {
          position: relative;
          padding: 28px;
          border-radius: 20px;
          background: linear-gradient(
            160deg,
            rgba(18, 28, 58, 0.75),
            rgba(9, 13, 28, 0.9)
          );
          border: 1px solid rgba(255,255,255,0.16);
          text-align: left;
          transition: transform .2s ease, box-shadow .2s ease;
        }

        .cap-card:hover {
          transform: translateY(-6px);
          box-shadow:
            0 0 22px rgba(108,242,194,0.35),
            0 0 48px rgba(122,162,255,0.25);
        }

        .cap-card h4 {
          margin: 14px 0 6px;
          color: #ffffff;
        }

        .cap-card p {
          margin: 0;
          color: rgba(255,255,255,0.75);
          font-size: 14px;
        }

        .tech-panel {
          margin-top: 72px;
          padding: 36px;
          border-radius: 26px;
          background: linear-gradient(
            160deg,
            rgba(18, 28, 58, 0.75),
            rgba(9, 13, 28, 0.9)
          );
          border: 1px solid rgba(255,255,255,0.16);
        }

        .tech-panel h3 {
          margin: 0 0 28px;
          color: #ffffff;
          text-align: center;
        }

        .tech-cols {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 28px;
          text-align: left;
        }

        .th {
          display: block;
          margin-bottom: 10px;
          color: #7aa2ff;
          font-weight: 600;
        }

        .tech-cols ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .tech-cols li {
          margin-bottom: 6px;
          color: rgba(255,255,255,0.75);
          font-size: 14px;
        }
      `}</style>
    </section>
  );
}
