import React from 'react';
import { NavLink, Link } from 'react-router-dom';

export default function Navbar({ theme, setTheme }){
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="brand">
          <Link to="/" className="brand-link">MyPortfolio</Link>
        </div>

        <nav className="main-nav" aria-label="Primary">
          <NavLink to="/" end className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>About</NavLink>
          <NavLink to="/projects" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Projects</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>Contact</NavLink>
        </nav>

        <div className="header-actions">
          <button onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} className="btn" aria-label="Toggle theme">{theme === 'dark' ? 'Light' : 'Dark'}</button>
        </div>
      </div>
    </header>
  );
}
