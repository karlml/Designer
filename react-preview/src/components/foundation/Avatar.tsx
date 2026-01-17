import React from 'react';


interface AvatarProps {
  initials: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  imageUrl?: string;
}

export function Avatar({ initials, size = 'md', imageUrl }: AvatarProps) {
  const sizes = {
    sm: { width: 32, height: 32, fontSize: 12 },
    md: { width: 44, height: 44, fontSize: 16 },
    lg: { width: 80, height: 80, fontSize: 28 },
    xl: { width: 150, height: 150, fontSize: 48 },
  };

  const s = sizes[size];

  return (
    <div
      style={{
        width: s.width,
        height: s.height,
        borderRadius: 'var(--radius-full)',
        backgroundColor: 'var(--color-brand-primary)',
        color: 'var(--color-text-inverse)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: s.fontSize,
        fontWeight: 700,
        textTransform: 'uppercase',
        overflow: 'hidden',
        flexShrink: 0,
      }}
    >
      {imageUrl ? (
        <img src={imageUrl} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      ) : (
        initials
      )}
    </div>
  );
}
