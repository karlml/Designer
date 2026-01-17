import React, { ReactNode } from 'react';


interface PhoneFrameProps {
  children: ReactNode;
  size?: 'sm' | 'md';
}

export function PhoneFrame({ children, size = 'md' }: PhoneFrameProps) {
  const sizes = {
    sm: { width: 280, height: 560, borderRadius: 32 },
    md: { width: 320, height: 640, borderRadius: 36 },
  };

  const s = sizes[size];

  return (
    <div
      style={{
        width: s.width,
        height: s.height,
        backgroundColor: 'var(--color-bg-primary)',
        borderRadius: s.borderRadius,
        overflow: 'hidden',
        position: 'relative',
        boxShadow: '0 0 0 10px #1a1a1a, 0 25px 50px rgba(0, 0, 0, 0.5)',
      }}
    >
      {/* Status Bar with Dynamic Island */}
      <div
        style={{
          height: 44,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          paddingBottom: 6,
        }}
      >
        <div
          style={{
            width: 100,
            height: 28,
            backgroundColor: '#000',
            borderRadius: 16,
          }}
        />
      </div>
      {/* Content */}
      <div style={{ height: 'calc(100% - 44px)', overflow: 'auto' }}>
        {children}
      </div>
    </div>
  );
}
