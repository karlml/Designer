import React from 'react';
import { Check } from 'lucide-react';
import { Card } from '../layout/Card';
import { Badge } from '../foundation/Badge';
import { PartnerBadge } from '../foundation/PartnerBadge';
import { Button } from '../buttons/Button';


interface FeatureCardProps {
  imageUrl: string;
  title: string;
  description: string;
  buttonText: string;
  showCoveredBadge?: boolean;
  showPartnerBadge?: string;
  onButtonClick?: () => void;
}

export function FeatureCard({
  imageUrl,
  title,
  description,
  buttonText,
  showCoveredBadge,
  showPartnerBadge,
  onButtonClick,
}: FeatureCardProps) {
  return (
    <Card padding="none">
      <div style={{ position: 'relative', height: 180 }}>
        <img
          src={imageUrl}
          alt={title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        {(showCoveredBadge || showPartnerBadge) && (
          <div
            style={{
              position: 'absolute',
              top: 'var(--space-md)',
              right: 'var(--space-md)',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-sm)',
            }}
          >
            {showCoveredBadge && (
              <Badge variant="default" icon={<Check size={14} />}>
                Covered
              </Badge>
            )}
            {showPartnerBadge && <PartnerBadge label={showPartnerBadge} />}
          </div>
        )}
      </div>
      <div style={{ padding: 'var(--space-lg)' }}>
        <h2
          style={{
            fontSize: 22,
            fontWeight: 700,
            color: 'var(--color-brand-primary)',
            marginBottom: 'var(--space-sm)',
            letterSpacing: -0.2,
          }}
        >
          {title}
        </h2>
        <p
          style={{
            fontSize: 15,
            color: 'var(--color-text-secondary)',
            lineHeight: 1.5,
            marginBottom: 'var(--space-lg)',
          }}
        >
          {description}
        </p>
        <Button fullWidth onClick={onButtonClick}>
          {buttonText}
        </Button>
      </div>
    </Card>
  );
}
