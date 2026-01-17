import React from 'react';


interface ProfileHeaderProps {
  avatar: { initials: string; imageUrl?: string };
  name: string;
}

export function ProfileHeader({ avatar, name }: ProfileHeaderProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-xl)',
        padding: 'var(--space-xl)',
      }}
    >
      <div
        style={{
          width: 150,
          height: 150,
          borderRadius: 'var(--radius-full)',
          backgroundColor: 'var(--color-brand-primary)',
          color: 'var(--color-text-inverse)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 48,
          fontWeight: 700,
          textTransform: 'uppercase',
          overflow: 'hidden',
          flexShrink: 0,
        }}
      >
        {avatar.imageUrl ? (
          <img src={avatar.imageUrl} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          avatar.initials
        )}
      </div>
      <h1
        style={{
          fontSize: 34,
          fontWeight: 700,
          color: 'var(--color-text-primary)',
          margin: 0,
        }}
      >
        {name}
      </h1>
    </div>
  );
}
