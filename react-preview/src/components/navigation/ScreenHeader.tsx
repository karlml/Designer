import React from 'react';
import { ChevronLeft } from 'lucide-react';


interface ScreenHeaderProps {
  title: string;
  onBack?: () => void;
  onMore?: () => void;
}

export function ScreenHeader({ title, onBack, onMore }: ScreenHeaderProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 'var(--space-lg) var(--space-xl)',
        backgroundColor: 'var(--color-bg-primary)',
      }}
    >
      <button
        onClick={onBack}
        style={{
          width: 44,
          height: 44,
          borderRadius: 'var(--radius-full)',
          backgroundColor: 'var(--color-bg-elevated)',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--color-text-primary)',
          boxShadow: 'var(--shadow-sm)',
        }}
      >
        <ChevronLeft size={24} />
      </button>
      <span
        style={{
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: 2,
          color: 'var(--color-text-primary)',
          textTransform: 'uppercase',
        }}
      >
        {title}
      </span>
      <button
        onClick={onMore}
        style={{
          width: 44,
          height: 44,
          borderRadius: 'var(--radius-full)',
          backgroundColor: 'var(--color-bg-elevated)',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--color-text-primary)',
          boxShadow: 'var(--shadow-sm)',
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="5" r="2" />
          <circle cx="12" cy="12" r="2" />
          <circle cx="12" cy="19" r="2" />
        </svg>
      </button>
    </div>
  );
}
