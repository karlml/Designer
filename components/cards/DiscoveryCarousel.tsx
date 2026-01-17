import React, { ReactNode } from 'react';


interface DiscoveryCarouselProps {
  children: ReactNode;
}

export function DiscoveryCarousel({ children }: DiscoveryCarouselProps) {
  return (
    <div
      style={{
        display: 'flex',
        gap: 'var(--space-md)',
        overflowX: 'auto',
        paddingBottom: 'var(--space-sm)',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
    >
      {children}
    </div>
  );
}
