import React from 'react';

export default function IconStar({ filled = false, size = 16 }) {
  const fill = filled ? '#ffcc00' : 'none';
  const stroke = '#333';
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12 .587l3.668 7.431L23.5 9.75l-5.75 5.603L19.335 24 12 19.897 4.665 24l1.585-8.647L0.5 9.75l7.832-1.732L12 .587z" />
    </svg>
  );
}
