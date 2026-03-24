import React from 'react';

interface BadgeProps {
  type: 'Suite' | 'Chambre';
  className?: string;
}

export default function Badge({ type, className = '' }: BadgeProps) {
  const styles: Record<'Suite' | 'Chambre', React.CSSProperties> = {
    Suite: {
      background: 'var(--lavande-mist)',
      color: 'var(--lavande-profonde)',
    },
    Chambre: {
      background: 'var(--pierre-chaude)',
      color: 'var(--brun-mas)',
    },
  };

  return (
    <span
      className={`inline-block px-3 py-1 ${className}`}
      style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.62rem',
        fontWeight: 500,
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        ...styles[type],
      }}
    >
      {type}
    </span>
  );
}
