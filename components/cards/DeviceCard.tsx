import React from 'react';


interface DeviceCardProps {
  name: string;
  syncedDaysAgo?: number;
  batteryPercent?: number;
}

export function DeviceCard({ name, syncedDaysAgo, batteryPercent }: DeviceCardProps) {
  return (
    <div
      style={{
        backgroundColor: 'var(--color-bg-secondary)',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-xl)',
      }}
    >
      <h3
        style={{
          fontSize: 28,
          fontWeight: 700,
          color: 'var(--color-text-primary)',
          marginBottom: 'var(--space-md)',
          letterSpacing: -0.5,
        }}
      >
        {name}
      </h3>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-md)',
          padding: 'var(--space-sm) var(--space-md)',
          backgroundColor: 'var(--color-bg-elevated)',
          borderRadius: 'var(--radius-md)',
          fontSize: 15,
          color: 'var(--color-text-secondary)',
        }}
      >
        {syncedDaysAgo !== undefined && (
          <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2">
              <polyline points="23 4 23 10 17 10" />
              <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
            </svg>
            Synced {syncedDaysAgo}d
          </span>
        )}
        {syncedDaysAgo !== undefined && batteryPercent !== undefined && (
          <span style={{ color: 'var(--color-border-subtle)' }}>|</span>
        )}
        {batteryPercent !== undefined && (
          <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2">
              <rect x="1" y="6" width="18" height="12" rx="2" ry="2" />
              <line x1="23" y1="10" x2="23" y2="14" />
            </svg>
            {batteryPercent}%
          </span>
        )}
      </div>
    </div>
  );
}
