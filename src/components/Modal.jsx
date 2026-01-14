export default function Modal({ open, onClose, project }) {
  if (!open) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal card" onClick={e => e.stopPropagation()}>
        <img src={project.img} />
        <h3>{project.title}</h3>
        <p>{project.desc}</p>
        <div className="actions">
          <a className="btn" href="TODO_repo">GitHub</a>
          <a className="btn primary" href="TODO_live">Deployment</a>
        </div>
      </div>
    </div>
  );
}
