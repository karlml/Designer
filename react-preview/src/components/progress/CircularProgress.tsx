import React from 'react';


interface CircularProgressProps {
  value: number;
  max: number;
  size?: number;
  strokeWidth?: number;
  showLabel?: boolean;
}

export function CircularProgress({
  value,
  max,
  size = 80,
  strokeWidth = 6,
  showLabel = true,
}: CircularProgressProps) {
  const percentage = Math.min((value / max) * 100, 100);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--color-border-subtle)"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--color-brand-accent)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 600ms ease-in-out' }}
        />
      </svg>
      {showLabel && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span
            style={{
              fontSize: size * 0.28,
              fontWeight: 700,
              color: 'var(--color-brand-accent)',
              lineHeight: 1,
            }}
          >
            {Math.round(percentage)}%
          </span>
          <span style={{ fontSize: size * 0.14, color: 'var(--color-text-tertiary)', marginTop: 2 }}>
            {max.toLocaleString()}
          </span>
        </div>
      )}
    </div>
  );
}
