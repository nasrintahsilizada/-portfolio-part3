import React, { useMemo, useState } from 'react';
import ProjectCard from '../assets/components/ProjectCard';

export default function Projects({ projects, favorites, onToggleFavorite }){
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('All');

  const techs = useMemo(() => Array.from(new Set(projects.flatMap(p => p.tech))), [projects]);

  const filtered = projects.filter(p =>
    (filter === 'All' || p.tech.includes(filter)) &&
    (p.title.toLowerCase().includes(query.toLowerCase()) || p.tech.join(' ').toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <section className="page">
      <div className="controls-row">
        <h2 className="page-title">Projects</h2>
        <div className="search-controls">
          <input placeholder="Search projects or tech" aria-label="Search projects" value={query} onChange={e=>setQuery(e.target.value)} />
          <select aria-label="Filter by tech" value={filter} onChange={e=>setFilter(e.target.value)}>
            <option>All</option>
            {techs.map(t => <option key={t}>{t}</option>)}
          </select>
        </div>
      </div>

      <div className="cards-grid">
        {filtered.map(p => (
          <ProjectCard key={p.id} project={p} isFavorite={favorites.includes(p.id)} onToggleFavorite={onToggleFavorite} />
        ))}
      </div>
    </section>
  );
}
