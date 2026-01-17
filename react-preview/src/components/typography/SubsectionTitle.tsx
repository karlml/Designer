import React, { ReactNode } from 'react';


interface SubsectionTitleProps {
  children: ReactNode;
}

export function SubsectionTitle({ children }: SubsectionTitleProps) {
  return (
    <h3
      style={{
        fontSize: 22,
        fontWeight: 700,
        color: 'var(--color-text-primary)',
        letterSpacing: -0.3,
        marginBottom: 'var(--space-md)',
      }}
    >
      {children}
    </h3>
  );
}
