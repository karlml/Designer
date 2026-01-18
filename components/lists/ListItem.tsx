import React, { ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';
import type { CategoryType } from '../types';
import { categoryColors } from '../types';


interface ListItemProps {
  icon?: ReactNode;
  iconCategory?: CategoryType;
  avatar?: { initials: string; imageUrl?: string };
  title: string;
  subtitle?: string;
  value?: string;
  showChevron?: boolean;
  onClick?: () => void;
}

export function ListItem({ icon, iconCategory = 'default', avatar, title, subtitle, value, showChevron = true, onClick }: ListItemProps) {
  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-md)',
        padding: 'var(--space-lg)',
        cursor: onClick ? 'pointer' : 'default',
      }}
    >
      {avatar && (
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'var(--color-brand-primary)',
            color: 'var(--color-text-inverse)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 16,
            fontWeight: 700,
            textTransform: 'uppercase',
            overflow: 'hidden',
            flexShrink: 0,
          }}
        >
          {avatar.imageUrl ? (
            <img src={avatar.imageUrl} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            avatar.initials
          )}
        </div>
      )}
      {icon && !avatar && (
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 'var(--radius-md)',
            backgroundColor: categoryColors[iconCategory].bg,
            color: categoryColors[iconCategory].text,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {icon}
        </div>
      )}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 17, fontWeight: 600, color: 'var(--color-text-primary)' }}>{title}</div>
        {subtitle && (
          <div style={{ fontSize: 15, color: 'var(--color-text-secondary)', marginTop: 2 }}>{subtitle}</div>
        )}
      </div>
      {value && (
        <div style={{ fontSize: 17, fontWeight: 600, color: 'var(--color-text-primary)' }}>{value}</div>
      )}
      {showChevron && <ChevronRight size={20} color="var(--color-text-tertiary)" />}
    </div>
  );
}
