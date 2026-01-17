import React, { ReactNode } from 'react';
import { Edit2 } from 'lucide-react';


interface SettingsItemEditableProps {
  icon?: ReactNode;
  title: string;
  value: string;
  onEdit?: () => void;
}

export function SettingsItemEditable({ icon, title, value, onEdit }: SettingsItemEditableProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-md)',
        padding: 'var(--space-lg)',
        backgroundColor: 'var(--color-bg-secondary)',
      }}
    >
      {icon && (
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 'var(--radius-md)',
            backgroundColor: 'var(--color-bg-elevated)',
            color: 'var(--color-text-secondary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          {icon}
        </div>
      )}
      <span style={{ flex: 1, fontSize: 17, fontWeight: 400, color: 'var(--color-text-primary)' }}>
        {title}
      </span>
      <span style={{ fontSize: 17, fontWeight: 700, color: 'var(--color-text-primary)', marginRight: 'var(--space-xs)' }}>
        {value}
      </span>
      <button
        onClick={onEdit}
        style={{
          width: 36,
          height: 36,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--color-text-primary)',
        }}
      >
        <Edit2 size={20} />
      </button>
    </div>
  );
}
