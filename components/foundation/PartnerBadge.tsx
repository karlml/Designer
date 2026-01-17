import React from 'react';


interface PartnerBadgeProps {
  label: string;
}

export function PartnerBadge({ label }: PartnerBadgeProps) {
  return (
    <div
      style={{
        width: 36,
        height: 36,
        borderRadius: 'var(--radius-full)',
        backgroundColor: 'var(--color-brand-accent)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--color-text-inverse)',
        fontWeight: 700,
        fontSize: 16,
        boxShadow: 'var(--shadow-md)',
      }}
    >
      {label}
    </div>
  );
}
