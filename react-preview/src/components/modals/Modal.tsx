import React, { ReactNode } from 'react';
import { X } from 'lucide-react';
import { Button } from '../buttons/Button';


interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  action?: ReactNode;
  children: ReactNode;
}

export function Modal({ isOpen, onClose, title, action, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'var(--color-bg-overlay)',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        zIndex: 100,
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxHeight: '90vh',
          backgroundColor: 'var(--color-bg-secondary)',
          borderRadius: 'var(--radius-2xl) var(--radius-2xl) 0 0',
          overflow: 'hidden',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            width: 36,
            height: 5,
            margin: 'var(--space-sm) auto',
            backgroundColor: '#D1D1D6',
            borderRadius: 'var(--radius-full)',
          }}
        />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 56,
            padding: '0 var(--space-lg)',
            position: 'relative',
          }}
        >
          <Button variant="icon-dark" onClick={onClose} icon={<X size={20} />} />
          <span
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: 1.5,
              textTransform: 'uppercase',
              color: 'var(--color-text-secondary)',
            }}
          >
            {title}
          </span>
          {action}
        </div>
        <div style={{ padding: 'var(--space-xl)', overflowY: 'auto' }}>{children}</div>
      </div>
    </div>
  );
}
