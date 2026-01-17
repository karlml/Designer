import React, { ReactNode } from 'react';
import { Card } from '../layout/Card';
import { Toggle } from '../forms/Toggle';


interface FeatureToggleRowProps {
  image?: ReactNode;
  title: string;
  badge?: ReactNode;
  description: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export function FeatureToggleRow({ image, title, badge, description, checked, onChange }: FeatureToggleRowProps) {
  return (
    <Card>
      <div
        style={{
          display: 'flex',
          gap: 'var(--space-lg)',
          padding: 'var(--space-lg)',
        }}
      >
        {image && (
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              flexShrink: 0,
              backgroundColor: 'var(--color-bg-elevated)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {image}
          </div>
        )}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', marginBottom: 'var(--space-xs)' }}>
            <span style={{ fontSize: 17, fontWeight: 600, color: 'var(--color-text-primary)' }}>
              {title}
            </span>
            {badge}
          </div>
          <p
            style={{
              fontSize: 15,
              color: 'var(--color-text-secondary)',
              lineHeight: 1.4,
              margin: 0,
            }}
          >
            {description}
          </p>
        </div>
        <div style={{ flexShrink: 0, alignSelf: 'center' }}>
          <Toggle checked={checked} onChange={onChange} />
        </div>
      </div>
    </Card>
  );
}
