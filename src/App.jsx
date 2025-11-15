// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App



import React, { useEffect, useState } from 'react';
// import React from 'react';
import {BrowserRouter, Route,Routes} from 'react-router-dom';

import Navbar from './assets/components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

import { initialProjects } from './data/projects';
import './index.css';

export default function App(){
  const [projects, setProjects] = useState(initialProjects);
  const [favorites, setFavorites] = useState(() => {
    try { return JSON.parse(localStorage.getItem('favorites') || '[]'); } catch { return []; }
  });
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate an update/fetch
    const id = setTimeout(() => {
      setProjects(p => p.map(pr => pr.id === '2' ? { ...pr, progress: Math.min(100, pr.progress + 10) } : pr));
      setLoading(false);
    }, 900);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => { localStorage.setItem('favorites', JSON.stringify(favorites)); }, [favorites]);
  useEffect(() => { localStorage.setItem('theme', theme); document.documentElement.setAttribute('data-theme', theme); }, [theme]);

  function toggleFavorite(id){ setFavorites(f => f.includes(id) ? f.filter(x => x !== id) : [...f, id]); }

  return (
    <BrowserRouter>
      <div className="app-root">
        <Navbar theme={theme} setTheme={setTheme} />

        <main className="container main">
          <div className="status-row">{loading ? 'Updating projects...' : 'Up to date'}</div>

          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/projects" element={<Projects projects={projects} favorites={favorites} onToggleFavorite={toggleFavorite} />} />
            <Route path="/projects/:id" element={<ProjectDetails projects={projects} />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </main>

        <footer className="site-footer">
          <div className="container">Built with ❤️ — <a href="#">View source on GitHub</a></div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
