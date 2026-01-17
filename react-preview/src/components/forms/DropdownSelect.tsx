import React from 'react';
import { ChevronDown } from 'lucide-react';


interface DropdownSelectProps {
  label: string;
  onClick?: () => void;
}

export function DropdownSelect({ label, onClick }: DropdownSelectProps) {
  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'var(--color-bg-secondary)',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-lg) var(--space-xl)',
        cursor: 'pointer',
      }}
    >
      <span style={{ fontSize: 17, fontWeight: 400, color: 'var(--color-text-primary)' }}>{label}</span>
      <ChevronDown size={20} color="var(--color-text-tertiary)" />
    </div>
  );
}
