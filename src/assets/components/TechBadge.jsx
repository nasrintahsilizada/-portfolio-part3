import React from 'react';
export default function TechBadge({ children }){
  return (
    <span className="tech-badge" aria-hidden>
      {children}
    </span>
  );
}
