import React from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';


interface NavHeaderProps {
  title: string;
  showBack?: boolean;
  showForward?: boolean;
  showClose?: boolean;
  onBack?: () => void;
  onForward?: () => void;
  onClose?: () => void;
  bordered?: boolean;
}

export function NavHeader({ 
  title, 
  showBack, 
  showForward,
  showClose, 
  onBack, 
  onForward,
  onClose, 
  bordered = false 
}: NavHeaderProps) {
  const buttonStyle: React.CSSProperties = {
    width: 36,
    height: 36,
    borderRadius: 'var(--radius-full)',
    backgroundColor: 'var(--color-bg-elevated)',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: 'var(--shadow-sm)',
    padding: 0,
  };

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
      {/* Left side */}
      <div style={{ width: 36 }}>
        {showBack && (
          <button onClick={onBack} style={buttonStyle} aria-label="Go back">
            <ChevronLeft size={20} color="var(--color-text-primary)" strokeWidth={2.5} />
          </button>
        )}
        {showForward && !showBack && (
          <button onClick={onForward} style={buttonStyle} aria-label="Go forward">
            <ChevronRight size={20} color="var(--color-text-primary)" strokeWidth={2.5} />
          </button>
        )}
      </div>

      {/* Center: Title */}
      <span
        style={{
          fontSize: 17,
          fontWeight: 600,
          color: 'var(--color-text-primary)',
        }}
      >
        {title}
      </span>

      {/* Right side */}
      <div style={{ width: 36 }}>
        {showClose && (
          <button onClick={onClose} style={buttonStyle} aria-label="Close">
            <X size={20} color="var(--color-text-primary)" strokeWidth={2.5} />
          </button>
        )}
        {showForward && showBack && (
          <button onClick={onForward} style={buttonStyle} aria-label="Go forward">
            <ChevronRight size={20} color="var(--color-text-primary)" strokeWidth={2.5} />
          </button>
        )}
      </div>
    </div>
  );
}
