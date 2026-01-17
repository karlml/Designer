import React from 'react';


interface BarChartProps {
  data: number[];
  labels?: string[];
  maxValue?: number;
  height?: number;
  color?: string;
}

export function BarChart({ data, labels, maxValue, height = 200, color = 'var(--color-brand-accent)' }: BarChartProps) {
  const max = maxValue || Math.max(...data);
  
  return (
    <div style={{ position: 'relative', height, paddingRight: 40 }}>
      {/* Y-axis labels */}
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 30,
          width: 35,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          fontSize: 12,
          color: 'var(--color-text-tertiary)',
        }}
      >
        <span>{max >= 1000 ? `${Math.round(max / 1000)}K` : max}</span>
        <span>{max >= 2000 ? `${Math.round(max / 2000)}K` : Math.round(max / 2)}</span>
        <span>0</span>
      </div>
      
      {/* Chart area */}
      <div
        style={{
          height: height - 30,
          display: 'flex',
          alignItems: 'flex-end',
          gap: 2,
          borderBottom: '1px dashed var(--color-border-subtle)',
          paddingBottom: 1,
        }}
      >
        {data.map((value, index) => (
          <div
            key={index}
            style={{
              flex: 1,
              height: `${(value / max) * 100}%`,
              backgroundColor: color,
              borderRadius: '2px 2px 0 0',
              minHeight: value > 0 ? 2 : 0,
            }}
          />
        ))}
      </div>
      
      {/* X-axis labels */}
      {labels && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingTop: 'var(--space-sm)',
            fontSize: 12,
            color: 'var(--color-text-tertiary)',
          }}
        >
          {labels.map((label, index) => (
            <span key={index}>{label}</span>
          ))}
        </div>
      )}
    </div>
  );
}
