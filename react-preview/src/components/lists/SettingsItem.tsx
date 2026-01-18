import React, { ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';
import type { CategoryType } from '../types';
import { categoryColors } from '../types';
import { Toggle } from '../forms/Toggle';


interface SettingsItemProps {
  icon?: ReactNode;
  iconCategory?: CategoryType;
  title: string;
  value?: string;
  toggle?: { checked: boolean; onChange: (checked: boolean) => void };
  showChevron?: boolean;
  onClick?: () => void;
}

export function SettingsItem({
  icon,
  iconCategory = 'default',
  title,
  value,
  toggle,
  showChevron = true,
  onClick,
}: SettingsItemProps) {
  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-md)',
        padding: 'var(--space-lg)',
        backgroundColor: 'var(--color-bg-secondary)',
        cursor: onClick ? 'pointer' : 'default',
      }}
    >
      {icon && (
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
            flexShrink: 0,
          }}
        >
          {icon}
        </div>
      )}
      <span style={{ flex: 1, fontSize: 17, fontWeight: 400, color: 'var(--color-text-primary)' }}>
        {title}
      </span>
      {value && (
        <span style={{ fontSize: 17, color: 'var(--color-brand-accent)', marginRight: 'var(--space-sm)' }}>
          {value}
        </span>
      )}
      {toggle && <Toggle checked={toggle.checked} onChange={toggle.onChange} />}
      {showChevron && <ChevronRight size={20} color="var(--color-text-tertiary)" />}
    </div>
  );
}
