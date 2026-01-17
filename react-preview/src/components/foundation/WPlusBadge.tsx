import React from 'react';


export function WPlusBadge() {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #F97316 0%, #EC4899 100%)',
        color: 'white',
        fontSize: 11,
        fontWeight: 700,
        padding: '4px 8px',
        borderRadius: 'var(--radius-sm)',
      }}
    >
      W+
    </span>
  );
}
