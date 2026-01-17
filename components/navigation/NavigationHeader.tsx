import React, { ReactNode } from 'react';
import { Avatar } from '../foundation/Avatar';


interface NavigationHeaderProps {
  avatar?: { initials: string; imageUrl?: string };
  title?: string;
  rightContent?: ReactNode;
}

export function NavigationHeader({ avatar, title, rightContent }: NavigationHeaderProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 56,
        padding: '0 var(--space-xl)',
      }}
    >
      {avatar && <Avatar initials={avatar.initials} imageUrl={avatar.imageUrl} />}
      {title && (
        <span style={{ fontSize: 17, fontWeight: 400, color: 'var(--color-text-secondary)' }}>{title}</span>
      )}
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>{rightContent}</div>
    </div>
  );
}
