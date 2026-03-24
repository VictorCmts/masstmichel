import React from 'react';

interface BadgeProps {
  type: 'Suite' | 'Chambre';
  className?: string;
}

export default function Badge({ type, className = '' }: BadgeProps) {
  const colorMap = {
    Suite: 'bg-[var(--color-terre)] text-white',
    Chambre: 'bg-[var(--color-pierre)] text-[var(--color-charcoal)]',
  };

  return (
    <span
      className={`inline-block px-3 py-1 text-[0.65rem] font-body font-500 tracking-[0.15em] uppercase ${colorMap[type]} ${className}`}
      style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}
    >
      {type}
    </span>
  );
}
