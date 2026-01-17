import React from 'react';
import { Card } from '../layout/Card';
import { CircularProgress } from '../progress/CircularProgress';


interface StatsCardProps {
  label: string;
  value: string | number;
  progress?: { current: number; goal: number };
  infoRows?: Array<{ label: string; value: string }>;
}

export function StatsCard({ label, value, progress, infoRows }: StatsCardProps) {
  return (
    <Card>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <div style={{ fontSize: 17, color: 'var(--color-text-primary)', marginBottom: 'var(--space-xs)' }}>
            {label}
          </div>
          <div style={{ fontSize: 42, fontWeight: 700, letterSpacing: -1, color: 'var(--color-text-primary)' }}>
            {value}
          </div>
        </div>
        {progress && (
          <CircularProgress value={progress.current} max={progress.goal} size={90} />
        )}
      </div>
      {infoRows && infoRows.length > 0 && (
        <div style={{ marginTop: 'var(--space-lg)', borderTop: '1px solid var(--color-border-separator)' }}>
          {infoRows.map((row, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: 'var(--space-md) 0',
                borderBottom: index < infoRows.length - 1 ? '1px solid var(--color-border-separator)' : 'none',
              }}
            >
              <span style={{ fontSize: 17, color: 'var(--color-text-primary)' }}>{row.label}</span>
              <span style={{ fontSize: 17, fontWeight: 600, color: 'var(--color-text-primary)' }}>{row.value}</span>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}
