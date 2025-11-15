import React from 'react';
import { Link } from 'react-router-dom';
export default function NotFound(){
  return (
    <section className="page">
      <h2 className="page-title">404 — Page not found</h2>
      <p>Try going back to <Link to="/">home</Link>.</p>
    </section>
  );
}
