import React, { ReactNode } from 'react';


interface ContentGridCardProps {
  imageUrl: string;
  icon: ReactNode;
  label: string;
  onClick?: () => void;
}

export function ContentGridCard({ imageUrl, icon, label, onClick }: ContentGridCardProps) {
  return (
    <div
      onClick={onClick}
      style={{
        position: 'relative',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        cursor: onClick ? 'pointer' : 'default',
        aspectRatio: '1',
      }}
    >
      <img
        src={imageUrl}
        alt={label}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 'var(--space-md)',
          left: 'var(--space-md)',
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-sm)',
          backgroundColor: 'var(--color-bg-secondary)',
          padding: 'var(--space-sm) var(--space-md)',
          borderRadius: 'var(--radius-full)',
          boxShadow: 'var(--shadow-md)',
        }}
      >
        <span style={{ color: 'var(--color-text-primary)' }}>{icon}</span>
        <span
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: 'var(--color-text-primary)',
            textTransform: 'uppercase',
            letterSpacing: 0.5,
          }}
        >
          {label}
        </span>
      </div>
    </div>
  );
}
