 import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Linkedin, Mail, Code, Database, Brain, Sparkles, ChevronDown, Download, FileText } from 'lucide-react';

const PortfolioLanding = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const projects = [
    {
      title: "AI-Powered Game Recommendation Engine",
      problem: "Recommend relevant games based on content similarity and user preferences",
      tech: ["Python", "Scikit-learn", "FastAPI", "Streamlit"],
      metrics: "92% precision, 35ms latency, 1K+ daily requests",
      github: "https://github.com/giri-harsh",
      demo: "https://game.harshgiri.site",
      status: "live"
    },
    {
      title: "Loan Approval Prediction System",
      problem: "Predict loan approval decisions using financial and credit data with explainability",
      tech: ["Random Forest", "SHAP", "SMOTE", "Streamlit"],
      metrics: "89.3% accuracy, 0.93 ROC-AUC, recall ↑21%",
      github: "https://github.com/giri-harsh",
      demo: "https://loan.harshgiri.site",
      status: "live"
    },
    {
      title: "Multi-Disease Prediction Models",
      problem: "Predict multiple diseases using medical datasets with 45K+ patient records",
      tech: ["Random Forest", "SVM", "Neural Networks", "TensorFlow"],
      metrics: "Accuracy improved 82% → 93.7%",
      github: "https://github.com/giri-harsh",
      demo: null,
      status: "research"
    },
    {
      title: "Advanced Data Analytics Portfolio",
      problem: "Statistical analysis and predictive modeling across finance, healthcare, retail",
      tech: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
      metrics: "25+ analytical programs and dashboards",
      github: "https://github.com/giri-harsh/python-programs",
      demo: null,
      status: "research"
    }
  ];

  const skills = [
    { icon: Brain, name: "Machine Learning", desc: "Model development & optimization" },
    { icon: Database, name: "Recommendation Systems", desc: "Content-based & collaborative filtering" },
    { icon: Code, name: "Feature Engineering", desc: "Data preprocessing & transformation" },
    { icon: Sparkles, name: "Explainable AI", desc: "SHAP, model interpretability" },
    { icon: FileText, name: "Model Deployment", desc: "Streamlit, FastAPI, production systems" }
  ];

  const techStack = {
    "ML/DL": ["Scikit-learn", "TensorFlow", "PyTorch", "XGBoost"],
    "Data": ["Pandas", "NumPy", "SQL"],
    "Deployment": ["Streamlit", "FastAPI"],
    "Languages": ["Python", "C++", "C"]
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans overflow-x-hidden">
      {/* Custom Cursor */}
      <div 
        className="fixed w-4 h-4 rounded-full bg-blue-500 pointer-events-none z-50 mix-blend-screen transition-transform duration-100"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: `translate(-50%, -50%) scale(${cursorVariant === 'hover' ? 1.5 : 1})`
        }}
      />
      <div 
        className="fixed w-8 h-8 rounded-full border-2 border-blue-500/30 pointer-events-none z-50 transition-all duration-200"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: `translate(-50%, -50%) scale(${cursorVariant === 'hover' ? 1.2 : 1})`
        }}
      />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-6">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.15), transparent 50%)`
          }}
        />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div 
            className="opacity-0 animate-[fadeIn_0.8s_ease-out_0.2s_forwards]"
            style={{ opacity: 0 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Harsh Giri
            </h1>
          </div>
          
          <div 
            className="opacity-0 animate-[fadeIn_0.8s_ease-out_0.4s_forwards]"
            style={{ opacity: 0 }}
          >
            <p className="text-2xl md:text-3xl text-slate-300 mb-8 font-light">
              Data Science Engineer | ML Model Development & Deployment
            </p>
          </div>
          
          <div 
            className="opacity-0 animate-[fadeIn_0.8s_ease-out_0.6s_forwards] max-w-2xl mx-auto"
            style={{ opacity: 0 }}
          >
            <p className="text-lg text-slate-400 mb-12 leading-relaxed">
              Building end-to-end machine learning systems, from data preprocessing to deployment.
              <br />
              Focused on recommendation systems, predictive modeling, and explainable AI with real-world datasets.
            </p>
          </div>

          <div 
            className="opacity-0 animate-[fadeIn_0.8s_ease-out_0.8s_forwards] flex flex-wrap gap-4 justify-center"
            style={{ opacity: 0 }}
          >
            <a 
              href="https://resume.harshgiri.site" 
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-105"
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              <FileText size={20} />
              View Resume
              <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="https://project.harshgiri.site" 
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 hover:scale-105"
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              <Code size={20} />
              View Projects
              <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="#contact"
              className="group px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 hover:scale-105"
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              <Mail size={20} />
              Contact Me
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-slate-500" />
        </div>
      </section>

      {/* Featured Architecture Section */}
      <section className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Featured ML Architecture</h2>
          <p className="text-slate-400 text-center mb-12">AI-Powered Game Recommendation Engine</p>
          
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-slate-900/50 rounded-xl border border-slate-700">
                <Database size={40} className="mx-auto mb-4 text-blue-400" />
                <h3 className="font-bold mb-2">Data Pipeline</h3>
                <p className="text-sm text-slate-400">50K+ games metadata → Feature extraction → Vectorization</p>
              </div>
              
              <div className="text-center p-6 bg-slate-900/50 rounded-xl border border-slate-700">
                <Brain size={40} className="mx-auto mb-4 text-blue-400" />
                <h3 className="font-bold mb-2">Model Layer</h3>
                <p className="text-sm text-slate-400">KNN + Cosine Similarity → 35ms inference</p>
              </div>
              
              <div className="text-center p-6 bg-slate-900/50 rounded-xl border border-slate-700">
                <Code size={40} className="mx-auto mb-4 text-blue-400" />
                <h3 className="font-bold mb-2">Deployment</h3>
                <p className="text-sm text-slate-400">FastAPI backend → Streamlit UI → 1K+ daily requests</p>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-slate-300 mb-4">
                <span className="font-semibold text-blue-400">92% precision</span> · 
                <span className="font-semibold text-blue-400"> 0.89 F1-score</span> · 
                <span className="font-semibold text-blue-400"> Real-time recommendations</span>
              </p>
              <a 
                href="https://game.harshgiri.site" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                View Live Demo <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-24 px-6" id="projects">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Selected Projects</h2>
          <p className="text-slate-400 text-center mb-12">End-to-end ML systems from research to production</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <div 
                key={idx}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02] group"
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  {project.status === 'live' && (
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                      LIVE
                    </span>
                  )}
                </div>
                
                <p className="text-slate-400 text-sm mb-4">{project.problem}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <p className="text-blue-400 text-sm font-semibold mb-4">{project.metrics}</p>
                
                <div className="flex gap-4">
                  <a 
                    href={project.github} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-slate-400 hover:text-slate-200 text-sm transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-400 hover:text-blue-300 text-sm transition-colors"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="https://project.harshgiri.site" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg font-semibold transition-all duration-300"
            >
              View All Projects
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-6 bg-slate-900/50" id="skills">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Core Capabilities</h2>
          <p className="text-slate-400 text-center mb-12">Technical expertise in ML engineering and deployment</p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {skills.map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <div 
                  key={idx}
                  className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-all duration-300"
                >
                  <Icon size={32} className="text-blue-400 mb-4" />
                  <h3 className="text-lg font-bold mb-2">{skill.name}</h3>
                  <p className="text-slate-400 text-sm">{skill.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-slate-800/30 rounded-xl p-8 border border-slate-700">
            <h3 className="text-xl font-bold mb-6 text-center">Tech Stack</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {Object.entries(techStack).map(([category, items]) => (
                <div key={category}>
                  <h4 className="text-sm font-semibold text-blue-400 mb-3">{category}</h4>
                  <ul className="space-y-2">
                    {items.map((item, idx) => (
                      <li key={idx} className="text-slate-300 text-sm">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-6" id="contact">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-slate-400 mb-12">Open to ML engineering opportunities and collaborations</p>
          
          <div className="flex flex-wrap gap-6 justify-center mb-12">
            <a 
              href="mailto:2006.harshgiri@gmail.com"
              className="flex items-center gap-3 px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              <Mail size={20} />
              Email
            </a>
            
            <a 
              href="https://linkedin.com/in/giri-harsh" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            
            <a 
              href="https://github.com/giri-harsh" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              <Github size={20} />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center text-slate-500 text-sm">
          <p>© 2026 Harsh Giri · Built with React · Designed for impact</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default PortfolioLanding;