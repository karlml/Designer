import React, { ReactNode } from 'react';
import { Card } from '../layout/Card';
import { Badge } from '../foundation/Badge';
import { ProgressBar } from '../progress/ProgressBar';
import { TrendingUp } from 'lucide-react';

interface HealthScoreCardProps {
  label: string;
  value: number | string;
  maxValue?: number;
  unit?: string;
  badgeText?: string;
  badgeVariant?: 'success' | 'activity' | 'body' | 'heart' | 'sleep' | 'default';
  showProgress?: boolean;
  progressValue?: number;
  description?: string;
  infoText?: string;
  infoIcon?: ReactNode;
  onClick?: () => void;
}

export function HealthScoreCard({
  label,
  value,
  maxValue,
  unit,
  badgeText,
  badgeVariant = 'success',
  showProgress = false,
  progressValue = 0,
  description,
  infoText,
  infoIcon,
  onClick,
}: HealthScoreCardProps) {
  return (
    <Card onClick={onClick} shadow>
      <div>
        {/* Header Row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 'var(--space-md)',
          }}
        >
          {/* Label - body-small style: 15px, Regular (400), text-secondary */}
          <span
            style={{
              fontSize: 15,
              fontWeight: 400,
              color: 'var(--color-text-secondary)',
            }}
          >
            {label}
          </span>
          {badgeText && (
            <Badge variant={badgeVariant} icon={<TrendingUp size={12} />}>
              {badgeText}
            </Badge>
          )}
        </div>

        {/* Value Display - Large metrics: 48px Bold per design system */}
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: 'var(--space-xs)',
            marginBottom: showProgress ? 'var(--space-lg)' : 'var(--space-md)',
          }}
        >
          <span
            style={{
              fontSize: 48,
              fontWeight: 700,
              letterSpacing: -1,
              color: 'var(--color-text-primary)',
              lineHeight: 1,
            }}
          >
            {value}
          </span>
          {maxValue && (
            <span
              style={{
                fontSize: 24,
                fontWeight: 500,
                color: 'var(--color-text-tertiary)',
              }}
            >
              /{maxValue}
            </span>
          )}
          {unit && (
            <span
              style={{
                fontSize: 15,
                fontWeight: 400,
                color: 'var(--color-text-secondary)',
                marginLeft: 'var(--space-xs)',
              }}
            >
              {unit}
            </span>
          )}
        </div>

        {/* Progress Bar */}
        {showProgress && (
          <div style={{ marginBottom: 'var(--space-lg)' }}>
            <ProgressBar progress={progressValue} />
          </div>
        )}

        {/* Description - body-small style: 15px, Regular (400) */}
        {description && (
          <p
            style={{
              fontSize: 15,
              fontWeight: 400,
              color: 'var(--color-text-secondary)',
              lineHeight: 1.4,
              margin: 0,
              marginBottom: infoText ? 'var(--space-md)' : 0,
            }}
          >
            {description}
          </p>
        )}

        {/* Info Row - caption style for supplementary info */}
        {infoText && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-sm)',
              padding: 'var(--space-md)',
              backgroundColor: 'var(--color-body-bg)',
              borderRadius: 'var(--radius-sm)',
              fontSize: 13,
              fontWeight: 400,
              color: 'var(--color-body-text)',
            }}
          >
            {infoIcon}
            <span>{infoText}</span>
          </div>
        )}
      </div>
    </Card>
  );
}
