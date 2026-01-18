import React, { ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';
import type { CategoryType } from '../types';
import { categoryColors } from '../types';
import { Card } from '../layout/Card';


interface MetricCardProps {
  icon: ReactNode;
  category: CategoryType;
  label: string;
  value: string | number;
  unit?: string;
  subtitle?: string;
  timestamp?: string;
  chart?: ReactNode;
  onClick?: () => void;
}

export function MetricCard({
  icon,
  category,
  label,
  value,
  unit,
  subtitle,
  timestamp,
  chart,
  onClick,
}: MetricCardProps) {
  return (
    <Card onClick={onClick}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', marginBottom: 'var(--space-md)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: categoryColors[category].text }}>
              {icon}
            </div>
            <span style={{ fontSize: 15, color: 'var(--color-text-secondary)' }}>{label}</span>
            {timestamp && (
              <>
                <span style={{ color: 'var(--color-text-tertiary)' }}>·</span>
                <span style={{ fontSize: 13, color: 'var(--color-text-tertiary)' }}>{timestamp}</span>
              </>
            )}
            <ChevronRight size={16} color="var(--color-text-tertiary)" style={{ marginLeft: 'auto' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-xs)' }}>
            <span style={{ fontSize: 34, fontWeight: 700, letterSpacing: -0.5 }}>{value}</span>
            {unit && <span style={{ fontSize: 15, color: 'var(--color-text-secondary)' }}>{unit}</span>}
          </div>
          {subtitle && (
            <div style={{ marginTop: 'var(--space-xs)', fontSize: 15, color: 'var(--color-text-secondary)' }}>
              {subtitle}
            </div>
          )}
        </div>
        {chart && <div style={{ width: 100, marginLeft: 'var(--space-lg)' }}>{chart}</div>}
      </div>
    </Card>
  );
}
