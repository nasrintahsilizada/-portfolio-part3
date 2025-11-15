import React from 'react';
import { useParams, Link } from 'react-router-dom';
import TechBadge from '../assets/components/TechBadge';
import Progress from '../assets/components/Progress';

export default function ProjectDetails({ projects }){
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <section className="page">
        <h2>Project not found</h2>
        <p>Return to <Link to="/projects">projects</Link>.</p>
      </section>
    );
  }

  return (
    <section className="page">
      <h2 className="page-title">{project.title}</h2>
      <p className="card-desc">{project.description}</p>

      <div className="tech-row">
        {project.tech.map(t => <TechBadge key={t}>{t}</TechBadge>)}
      </div>

      <div className="actions-row">
        <a href={project.live} className="btn primary" target="_blank" rel="noreferrer">Live Demo</a>
        <a href={project.repo} className="btn">Code</a>
      </div>

      <Progress value={project.progress} label="Completion" />
    </section>
  );
}
