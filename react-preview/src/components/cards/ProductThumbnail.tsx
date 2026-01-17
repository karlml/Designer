import React, { ReactNode } from 'react';


interface ProductThumbnailProps {
  children: ReactNode;
  onClick?: () => void;
}

export function ProductThumbnail({ children, onClick }: ProductThumbnailProps) {
  return (
    <div
      onClick={onClick}
      style={{
        flexShrink: 0,
        width: 80,
        height: 80,
        borderRadius: 'var(--radius-md)',
        background: 'linear-gradient(135deg, #e8e6e3 0%, #d5d3d0 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: onClick ? 'pointer' : 'default',
      }}
    >
      {children}
    </div>
  );
}
