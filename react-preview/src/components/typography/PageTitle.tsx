import React, { ReactNode } from 'react';


interface PageTitleProps {
  children: ReactNode;
}

export function PageTitle({ children }: PageTitleProps) {
  return (
    <h1
      style={{
        fontSize: 34,
        fontWeight: 700,
        color: 'var(--color-text-primary)',
        letterSpacing: -0.5,
        marginBottom: 'var(--space-xl)',
      }}
    >
      {children}
    </h1>
  );
}
