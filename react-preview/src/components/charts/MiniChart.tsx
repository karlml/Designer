import React from 'react';


interface MiniChartProps {
  data: number[];
  height?: number;
  color?: string;
}

export function MiniChart({ data, height = 40, color = 'var(--color-brand-accent)' }: MiniChartProps) {
  const max = Math.max(...data);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-end',
        height,
        gap: 3,
      }}
    >
      {data.map((value, index) => (
        <div
          key={index}
          style={{
            flex: 1,
            height: max > 0 ? `${(value / max) * 100}%` : 0,
            backgroundColor: color,
            borderRadius: 2,
            minWidth: 6,
            minHeight: value > 0 ? 2 : 0,
          }}
        />
      ))}
    </div>
  );
}
