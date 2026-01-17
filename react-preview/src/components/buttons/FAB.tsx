import React, { ReactNode } from 'react';


interface FABProps {
  icon: ReactNode;
  variant?: 'default' | 'primary';
  onClick?: () => void;
}

export function FAB({ icon, variant = 'default', onClick }: FABProps) {
  return (
    <button
      onClick={onClick}
      style={{
        width: 56,
        height: 56,
        borderRadius: 'var(--radius-full)',
        backgroundColor: variant === 'primary' ? 'var(--color-brand-accent)' : 'var(--color-text-primary)',
        color: 'var(--color-text-inverse)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: 'var(--shadow-lg)',
        cursor: 'pointer',
        border: 'none',
      }}
    >
      {icon}
    </button>
  );
}
