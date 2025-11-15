import React from 'react';

export default function Progress({ value = 0, label = 'Progress' }){
  return (
    <div className="progress-root">
      <div className="progress-header">
        <span className="progress-label">{label}</span>
        <span className="progress-value" aria-hidden>{value}%</span>
      </div>
      <div
        className="progress-track"
        role="progressbar"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={value}
      >
        <div className="progress-fill" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
