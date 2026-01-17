import React, { ReactNode } from 'react';


interface FilledButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

export function FilledButton({ children, onClick }: FilledButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        height: 36,
        padding: '0 16px',
        backgroundColor: 'var(--color-text-primary)',
        color: 'var(--color-text-inverse)',
        border: 'none',
        borderRadius: 'var(--radius-full)',
        fontSize: 15,
        fontWeight: 600,
        cursor: 'pointer',
        fontFamily: 'inherit',
      }}
    >
      {children}
    </button>
  );
}
