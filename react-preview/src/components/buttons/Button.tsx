import React, { ReactNode } from 'react';


interface ButtonProps {
  children?: ReactNode;
  variant?: 'primary' | 'secondary' | 'icon' | 'icon-dark';
  icon?: ReactNode;
  fullWidth?: boolean;
  onClick?: () => void;
}

export function Button({ children, variant = 'primary', icon, fullWidth = false, onClick }: ButtonProps) {
  const baseStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-sm)',
    fontFamily: 'inherit',
    fontWeight: 600,
    border: 'none',
    cursor: 'pointer',
    transition: 'all 150ms ease',
    width: fullWidth ? '100%' : 'auto',
  };

  const variants: Record<string, React.CSSProperties> = {
    primary: {
      ...baseStyles,
      height: 52,
      padding: '0 var(--space-2xl)',
      backgroundColor: 'var(--color-text-primary)',
      color: 'var(--color-text-inverse)',
      borderRadius: 'var(--radius-full)',
      fontSize: 17,
    },
    secondary: {
      ...baseStyles,
      height: 36,
      padding: '0 var(--space-lg)',
      backgroundColor: 'transparent',
      color: 'var(--color-text-primary)',
      border: '1px solid var(--color-text-primary)',
      borderRadius: 'var(--radius-full)',
      fontSize: 15,
    },
    icon: {
      ...baseStyles,
      width: 44,
      height: 44,
      padding: 0,
      backgroundColor: 'var(--color-bg-secondary)',
      borderRadius: 'var(--radius-full)',
    },
    'icon-dark': {
      ...baseStyles,
      width: 44,
      height: 44,
      padding: 0,
      backgroundColor: 'var(--color-text-primary)',
      color: 'var(--color-text-inverse)',
      borderRadius: 'var(--radius-full)',
    },
  };

  return (
    <button style={variants[variant]} onClick={onClick}>
      {icon}
      {variant !== 'icon' && variant !== 'icon-dark' && children}
    </button>
  );
}
