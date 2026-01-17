import React, { ReactNode } from 'react';
import { Card } from '../layout/Card';


interface EmptyStateCardProps {
  illustration: ReactNode;
  message: string;
}

export function EmptyStateCard({ illustration, message }: EmptyStateCardProps) {
  return (
    <Card>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 'var(--space-xl)',
          textAlign: 'center',
        }}
      >
        <div style={{ marginBottom: 'var(--space-lg)' }}>{illustration}</div>
        <div style={{ fontSize: 17, fontWeight: 500, color: 'var(--color-text-primary)' }}>
          {message}
        </div>
      </div>
    </Card>
  );
}
