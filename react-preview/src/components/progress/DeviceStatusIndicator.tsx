import React from 'react';


interface DeviceStatusIndicatorProps {
  imageUrl?: string;
  isConnected?: boolean;
  size?: number;
}

export function DeviceStatusIndicator({ imageUrl, isConnected = false, size = 44 }: DeviceStatusIndicatorProps) {
  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <div
        style={{
          width: size,
          height: size,
          borderRadius: 'var(--radius-full)',
          border: '2px solid var(--color-border-subtle)',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'var(--color-bg-secondary)',
        }}
      >
        {imageUrl ? (
          <img src={imageUrl} alt="" style={{ width: '70%', height: '70%', objectFit: 'contain' }} />
        ) : (
          <svg width={size * 0.5} height={size * 0.5} viewBox="0 0 24 24" fill="none" stroke="var(--color-text-tertiary)" strokeWidth="2">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
            <line x1="12" y1="18" x2="12.01" y2="18" />
          </svg>
        )}
      </div>
      {isConnected && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: 12,
            height: 12,
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'var(--color-success-text)',
            border: '2px solid var(--color-bg-primary)',
          }}
        />
      )}
    </div>
  );
}
