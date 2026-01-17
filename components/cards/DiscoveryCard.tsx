import React, { ReactNode } from 'react';


interface DiscoveryCardProps {
  illustration: ReactNode;
  illustrationBg?: string;
  title: string;
  status: string;
  isCompleted?: boolean;
  onClick?: () => void;
}

export function DiscoveryCard({
  illustration,
  illustrationBg = '#5C8A4D',
  title,
  status,
  isCompleted = false,
  onClick,
}: DiscoveryCardProps) {
  return (
    <div
      onClick={onClick}
      style={{
        flexShrink: 0,
        width: 180,
        backgroundColor: 'var(--color-bg-secondary)',
        borderRadius: 'var(--radius-xl)',
        padding: 'var(--space-lg)',
        cursor: onClick ? 'pointer' : 'default',
      }}
    >
      <div
        style={{
          width: 120,
          height: 120,
          backgroundColor: illustrationBg,
          borderRadius: 20,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 'var(--space-md)',
        }}
      >
        {illustration}
      </div>
      <div>
        <h4
          style={{
            fontSize: 17,
            fontWeight: 600,
            color: 'var(--color-text-primary)',
            marginBottom: 'var(--space-xs)',
          }}
        >
          {title}
        </h4>
        <span
          style={{
            fontSize: 15,
            color: isCompleted ? 'var(--color-text-secondary)' : 'var(--color-brand-accent)',
          }}
        >
          {status}
        </span>
      </div>
    </div>
  );
}
