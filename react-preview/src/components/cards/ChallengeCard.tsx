import React, { ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';
import { Card } from '../layout/Card';


interface ChallengeCardProps {
  illustration: ReactNode;
  title: string;
  description: string;
  onClick?: () => void;
}

export function ChallengeCard({ illustration, title, description, onClick }: ChallengeCardProps) {
  return (
    <Card onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default' }}>
      <div style={{ display: 'flex', justifyContent: 'center', padding: 'var(--space-xl) 0' }}>
        {illustration}
      </div>
      <div
        style={{
          borderTop: '1px solid var(--color-border-separator)',
          paddingTop: 'var(--space-lg)',
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-md)',
        }}
      >
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontSize: 17,
              fontWeight: 600,
              color: 'var(--color-text-primary)',
              marginBottom: 'var(--space-xs)',
            }}
          >
            {title}
          </div>
          <div style={{ fontSize: 15, color: 'var(--color-text-secondary)', lineHeight: 1.4 }}>
            {description}
          </div>
        </div>
        <ChevronRight size={20} color="var(--color-text-tertiary)" />
      </div>
    </Card>
  );
}
