import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TechBadge from './TechBadge';
import Progress from './Progress';
import IconStar from './IconStar';

export default function ProjectCard({ project, isFavorite, onToggleFavorite }){
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const initials = project.title.split(' ').slice(0,2).map(w => w[0]).join('');

  return (
    <article className="card" aria-labelledby={`title-${project.id}`}>
      <div
        className="card-media"
        onClick={() => navigate(`/projects/${project.id}`)}
        role="link"
        tabIndex={0}
        onKeyDown={(e)=> { if(e.key === 'Enter') navigate(`/projects/${project.id}`); }}
        aria-label={`Open ${project.title} details`}
      >
        <div className="initials">{initials}</div>
      </div>

      <div className="card-body">
        <header className="card-header">
          <h3 id={`title-${project.id}`} className="card-title">{project.title}</h3>
          <span className={`status status-${project.status.replace(/\s+/g,'').toLowerCase()}`}>{project.status}</span>
        </header>

        <p className="card-desc">{project.description}</p>

        <div className="tech-row">
          {project.tech.map(t => <TechBadge key={t}>{t}</TechBadge>)}
        </div>

        <div className="card-controls">
          <button
            className="btn primary"
            onClick={() => navigate(`/projects/${project.id}`)}
            aria-label={`View ${project.title}`}
          >View Project</button>

          <a href={project.repo} className="btn" target="_blank" rel="noreferrer" aria-label={`View code for ${project.title}`}>View Code</a>

          <button onClick={() => setOpen(s => !s)} aria-expanded={open} aria-controls={`more-${project.id}`} className="btn link">
            {open ? 'Less' : 'More'}
          </button>

          <button className="icon-btn" onClick={() => onToggleFavorite(project.id)} aria-pressed={isFavorite} aria-label={`${isFavorite ? 'Unfavorite' : 'Favorite'} ${project.title}`}>
            <IconStar filled={isFavorite} />
          </button>
        </div>

        <div id={`more-${project.id}`} className={`collapsible ${open ? 'open' : ''}`}>
          <p><strong>Milestones:</strong> Planning • Design • Implementation • QA</p>
          <Progress value={project.progress} label="Project progress" />
        </div>
      </div>
    </article>
  );
}
