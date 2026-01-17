import React, { ReactNode } from 'react';


interface SettingsSectionCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  children: ReactNode;
}

export function SettingsSectionCard({ icon, title, description, children }: SettingsSectionCardProps) {
  return (
    <div
      style={{
        backgroundColor: 'var(--color-bg-secondary)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          padding: 'var(--space-2xl) var(--space-xl)',
          textAlign: 'center',
          borderBottom: '1px solid var(--color-border-separator)',
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            margin: '0 auto var(--space-lg)',
            backgroundColor: 'var(--color-bg-elevated)',
            borderRadius: 'var(--radius-md)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-text-primary)',
          }}
        >
          {icon}
        </div>
        <h3
          style={{
            fontSize: 22,
            fontWeight: 700,
            color: 'var(--color-text-primary)',
            marginBottom: 'var(--space-sm)',
            letterSpacing: -0.3,
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: 15,
            color: 'var(--color-text-secondary)',
            lineHeight: 1.5,
            maxWidth: 280,
            margin: '0 auto',
          }}
        >
          {description}
        </p>
      </div>
      <div>{children}</div>
    </div>
  );
}
