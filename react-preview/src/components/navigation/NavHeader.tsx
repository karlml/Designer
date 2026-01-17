import React from 'react';
import { ChevronLeft, X } from 'lucide-react';


interface NavHeaderProps {
  title: string;
  showBack?: boolean;
  showClose?: boolean;
  onBack?: () => void;
  onClose?: () => void;
  bordered?: boolean;
}

export function NavHeader({ title, showBack, showClose, onBack, onClose, bordered = false }: NavHeaderProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 56,
        padding: '0 var(--space-lg)',
        backgroundColor: 'var(--color-bg-primary)',
        borderBottom: bordered ? '1px solid var(--color-border-separator)' : 'none',
      }}
    >
      {showBack ? (
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
      ) : (
        <div style={{ width: 44 }} />
      )}
      <span
        style={{
          fontSize: 20,
          fontWeight: 600,
          color: 'var(--color-text-primary)',
        }}
      >
        {title}
      </span>
      {showClose ? (
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
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <X size={24} />
        </button>
      ) : (
        <div style={{ width: 44 }} />
      )}
    </div>
  );
}
