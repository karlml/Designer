import React from 'react';
import { X } from 'lucide-react';


interface ChartModalHeaderProps {
  dateRange: string;
  onClose?: () => void;
}

export function ChartModalHeader({ dateRange, onClose }: ChartModalHeaderProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-lg)',
        marginBottom: 'var(--space-xl)',
      }}
    >
      <button
        onClick={onClose}
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
        }}
      >
        <X size={20} />
      </button>
      <span
        style={{
          fontSize: 17,
          fontWeight: 500,
          color: 'var(--color-text-primary)',
        }}
      >
        {dateRange}
      </span>
    </div>
  );
}
