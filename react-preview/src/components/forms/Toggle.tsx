import React from 'react';


interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export function Toggle({ checked, onChange }: ToggleProps) {
  return (
    <div
      onClick={() => onChange(!checked)}
      style={{
        width: 51,
        height: 31,
        borderRadius: 'var(--radius-full)',
        backgroundColor: checked ? 'var(--color-text-primary)' : 'var(--color-border-subtle)',
        position: 'relative',
        cursor: 'pointer',
        transition: 'background-color 150ms ease',
        flexShrink: 0,
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 2,
          left: checked ? 22 : 2,
          width: 27,
          height: 27,
          borderRadius: 'var(--radius-full)',
          backgroundColor: 'var(--color-text-inverse)',
          boxShadow: 'var(--shadow-sm)',
          transition: 'left 150ms ease',
        }}
      />
    </div>
  );
}
