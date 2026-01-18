import React from 'react';
import { Card } from '../layout/Card';
import { Badge } from '../foundation/Badge';
import { TrendingUp } from 'lucide-react';

interface BiologicalAgeGaugeProps {
  biologicalAge: number;
  chronologicalAge: number;
  label?: string;
  youngerLabel?: string;
  actualLabel?: string;
  olderLabel?: string;
  description?: string;
  onClick?: () => void;
}

export function BiologicalAgeGauge({
  biologicalAge,
  chronologicalAge,
  label = 'Biological age',
  youngerLabel = 'Younger',
  actualLabel = 'Actual age',
  olderLabel = 'Older',
  description,
  onClick,
}: BiologicalAgeGaugeProps) {
  const difference = chronologicalAge - biologicalAge;
  const isYounger = difference > 0;
  
  // Calculate position on gauge (0-100%)
  // Center is the chronological age, younger is left, older is right
  const range = 10; // years range on each side
  const gaugePosition = Math.max(0, Math.min(100, 50 - (difference / range) * 50));

  return (
    <Card onClick={onClick} shadow>
      <div style={{ textAlign: 'center' }}>
        {/* Header - body-small style: 15px, Regular (400) */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'var(--space-sm)',
            marginBottom: 'var(--space-lg)',
          }}
        >
          <span
            style={{
              fontSize: 15,
              fontWeight: 400,
              color: 'var(--color-text-secondary)',
            }}
          >
            {label}
          </span>
          {isYounger && (
            <Badge variant="success" icon={<TrendingUp size={12} />}>
              {youngerLabel}
            </Badge>
          )}
        </div>

        {/* Large Age Display - 48px Bold per design system */}
        <div
          style={{
            fontSize: 48,
            fontWeight: 700,
            color: 'var(--color-text-primary)',
            lineHeight: 1,
            letterSpacing: -1,
            marginBottom: 'var(--space-xl)',
          }}
        >
          {biologicalAge}
        </div>

        {/* Gauge */}
        <div style={{ position: 'relative', marginBottom: 'var(--space-md)' }}>
          {/* Gauge Track */}
          <div
            style={{
              height: 8,
              borderRadius: 'var(--radius-full)',
              background: 'linear-gradient(to right, var(--color-success-bg), var(--color-bg-elevated), var(--color-heart-bg))',
              position: 'relative',
            }}
          >
            {/* Chronological Age Marker (vertical line at center) */}
            <div
              style={{
                position: 'absolute',
                left: '50%',
                top: -4,
                bottom: -4,
                width: 2,
                backgroundColor: 'var(--color-text-tertiary)',
                transform: 'translateX(-50%)',
              }}
            />
            
            {/* Biological Age Indicator */}
            <div
              style={{
                position: 'absolute',
                left: `${gaugePosition}%`,
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: 16,
                height: 16,
                borderRadius: 'var(--radius-full)',
                backgroundColor: isYounger ? 'var(--color-success-text)' : 'var(--color-heart-text)',
                border: '3px solid var(--color-bg-secondary)',
                boxShadow: 'var(--shadow-md)',
              }}
            />
          </div>

          {/* Gauge axis labels - caption style: 13px */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: 'var(--space-sm)',
            }}
          >
            <span style={{ fontSize: 13, fontWeight: 400, color: 'var(--color-text-tertiary)' }}>
              {youngerLabel}
            </span>
            <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--color-text-secondary)' }}>
              {chronologicalAge}
            </span>
            <span style={{ fontSize: 13, fontWeight: 400, color: 'var(--color-text-tertiary)' }}>
              {olderLabel}
            </span>
          </div>
        </div>

        {/* Description - body-small style: 15px */}
        {description && (
          <div
            style={{
              padding: 'var(--space-md)',
              backgroundColor: 'var(--color-success-bg)',
              borderRadius: 'var(--radius-sm)',
              fontSize: 15,
              fontWeight: 400,
              color: 'var(--color-success-text)',
              lineHeight: 1.4,
              marginTop: 'var(--space-lg)',
            }}
          >
            {description}
          </div>
        )}
      </div>
    </Card>
  );
}
