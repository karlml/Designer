import React, { ReactNode } from 'react';
import { Edit2 } from 'lucide-react';
import { CategoryType, categoryColors } from '../types';


interface SelectionCardProps {
  icon?: ReactNode;
  iconCategory?: CategoryType;
  title: string;
  subtitle?: string;
  showEdit?: boolean;
  onEdit?: () => void;
  onClick?: () => void;
}

export function SelectionCard({
  icon,
  iconCategory = 'default',
  title,
  subtitle,
  showEdit,
  onEdit,
  onClick,
}: SelectionCardProps) {
  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-md)',
        backgroundColor: 'var(--color-bg-secondary)',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-lg)',
        cursor: onClick ? 'pointer' : 'default',
      }}
    >
      {icon && (
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 'var(--radius-md)',
            backgroundColor: categoryColors[iconCategory].bg,
            color: categoryColors[iconCategory].text,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          {icon}
        </div>
      )}
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 17, fontWeight: 600, color: 'var(--color-text-primary)' }}>{title}</div>
        {subtitle && (
          <div style={{ fontSize: 15, color: 'var(--color-text-secondary)', marginTop: 2 }}>{subtitle}</div>
        )}
      </div>
      {showEdit && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onEdit?.();
          }}
          style={{
            width: 44,
            height: 44,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-brand-primary)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <Edit2 size={20} />
        </button>
      )}
    </div>
  );
}
