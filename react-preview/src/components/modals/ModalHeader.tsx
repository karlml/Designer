import React, { ReactNode } from 'react';
import { X } from 'lucide-react';


interface ModalHeaderProps {
  title: string;
  onClose?: () => void;
  actionLabel?: string;
  actionIcon?: ReactNode;
  onAction?: () => void;
}

export function ModalHeader({ title, onClose, actionLabel, actionIcon, onAction }: ModalHeaderProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 'var(--space-lg) var(--space-xl)',
        backgroundColor: 'var(--color-bg-secondary)',
        borderRadius: 'var(--radius-lg)',
      }}
    >
      <button
        onClick={onClose}
        style={{
          width: 40,
          height: 40,
          borderRadius: 'var(--radius-md)',
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
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: 1.5,
          color: 'var(--color-text-primary)',
          textTransform: 'uppercase',
        }}
      >
        {title}
      </span>
      {actionLabel && (
        <button
          onClick={onAction}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-sm)',
            padding: 'var(--space-sm) var(--space-md)',
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
          {actionIcon}
          {actionLabel}
        </button>
      )}
    </div>
  );
}
