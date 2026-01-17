import React, { ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';


interface SettingsItemPlainProps {
  icon: ReactNode;
  title: string;
  showChevron?: boolean;
  onClick?: () => void;
}

export function SettingsItemPlain({ icon, title, showChevron = true, onClick }: SettingsItemPlainProps) {
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
      <div style={{ width: 24, height: 24, color: 'var(--color-text-primary)', flexShrink: 0 }}>
        {icon}
      </div>
      <span style={{ flex: 1, fontSize: 17, fontWeight: 400, color: 'var(--color-text-primary)' }}>
        {title}
      </span>
      {showChevron && <ChevronRight size={20} color="var(--color-text-tertiary)" />}
    </div>
  );
}
