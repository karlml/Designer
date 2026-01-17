import React from 'react';


interface ProgressBarProps {
  progress: number; // 0 to 100
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div
      style={{
        height: 4,
        backgroundColor: 'var(--color-bg-elevated)',
        borderRadius: 2,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          height: '100%',
          width: `${Math.min(Math.max(progress, 0), 100)}%`,
          backgroundColor: 'var(--color-brand-accent)',
          borderRadius: '0 2px 2px 0',
          transition: 'width 300ms ease',
        }}
      />
    </div>
  );
}
