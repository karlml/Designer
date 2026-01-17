import React from 'react';


interface SegmentedControlProps {
  options: string[];
  selected: string;
  onChange: (value: string) => void;
  fullWidth?: boolean;
}

export function SegmentedControl({ options, selected, onChange, fullWidth = false }: SegmentedControlProps) {
  return (
    <div
      style={{
        display: fullWidth ? 'flex' : 'inline-flex',
        backgroundColor: 'var(--color-bg-elevated)',
        borderRadius: 'var(--radius-full)',
        padding: 4,
      }}
    >
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          style={{
            flex: fullWidth ? 1 : 'none',
            padding: '12px 20px',
            borderRadius: 'var(--radius-full)',
            fontSize: 15,
            fontWeight: selected === option ? 600 : 400,
            color: selected === option ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
            backgroundColor: selected === option ? 'var(--color-bg-secondary)' : 'transparent',
            boxShadow: selected === option ? 'var(--shadow-sm)' : 'none',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 150ms ease',
            fontFamily: 'inherit',
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
