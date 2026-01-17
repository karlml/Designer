import React from 'react';


interface InfoRowProps {
  label: string;
  value: string;
}

export function InfoRow({ label, value }: InfoRowProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 'var(--space-lg)',
        backgroundColor: 'var(--color-bg-secondary)',
      }}
    >
      <span
        style={{
          fontSize: 17,
          fontWeight: 400,
          color: 'var(--color-text-primary)',
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontSize: 17,
          fontWeight: 600,
          color: 'var(--color-text-primary)',
        }}
      >
        {value}
      </span>
    </div>
  );
}
