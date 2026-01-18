import React from 'react';
import { Card } from '../layout/Card';

export type BiomarkerStatus = 'in-range' | 'below-range' | 'above-range' | 'optimal' | 'low' | 'high' | 'normal';

interface BiomarkerReading {
  label: string;
  value: number | string;
  unit: string;
  status?: BiomarkerStatus;
  date?: string;
  category?: 'body' | 'heart' | 'activity' | 'sleep';
}

interface BiomarkerListCardProps {
  readings: BiomarkerReading[];
  onClick?: () => void;
  /** If true, renders each reading as a separate card */
  separateCards?: boolean;
}

const statusConfig: Record<BiomarkerStatus, { label: string; color: string; position: 'left' | 'center' | 'right' }> = {
  'in-range': { label: 'In-Range', color: 'var(--color-brand-accent)', position: 'center' },
  'optimal': { label: 'In-Range', color: 'var(--color-brand-accent)', position: 'center' },
  'normal': { label: 'In-Range', color: 'var(--color-brand-accent)', position: 'center' },
  'below-range': { label: 'Below Range', color: 'var(--color-heart-text)', position: 'left' },
  'low': { label: 'Below Range', color: 'var(--color-heart-text)', position: 'left' },
  'above-range': { label: 'Above Range', color: 'var(--color-heart-text)', position: 'right' },
  'high': { label: 'Above Range', color: 'var(--color-heart-text)', position: 'right' },
};

const categoryColors: Record<string, { bg: string; icon: string }> = {
  body: { bg: 'var(--color-body-bg)', icon: 'var(--color-body-text)' },
  heart: { bg: 'var(--color-heart-bg)', icon: 'var(--color-heart-text)' },
  activity: { bg: 'var(--color-activity-bg)', icon: 'var(--color-activity-text)' },
  sleep: { bg: 'var(--color-sleep-bg)', icon: 'var(--color-sleep-text)' },
};

function FlaskIcon({ color }: { color: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9 3V8.5L4.5 16.5C3.5 18.17 4.67 20 6.6 20H17.4C19.33 20 20.5 18.17 19.5 16.5L15 8.5V3M9 3H15M9 3H8M15 3H16M10 12H14"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RangeIndicator({ status }: { status: BiomarkerStatus }) {
  const config = statusConfig[status];
  const markerPosition = config.position === 'left' ? '15%' : config.position === 'right' ? '85%' : '50%';
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
      {/* Status label */}
      <span
        style={{
          fontSize: 11,
          fontWeight: 500,
          color: 'var(--color-text-secondary)',
          letterSpacing: '0.2px',
        }}
      >
        {config.label}
      </span>
      
      {/* Range track with marker */}
      <div
        style={{
          width: 60,
          height: 6,
          backgroundColor: 'var(--color-bg-elevated)',
          borderRadius: 'var(--radius-full)',
          position: 'relative',
          overflow: 'visible',
        }}
      >
        {/* Marker */}
        <div
          style={{
            position: 'absolute',
            left: markerPosition,
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: 10,
            height: 10,
            borderRadius: 'var(--radius-full)',
            backgroundColor: config.color,
            border: '2px solid var(--color-bg-secondary)',
            boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
          }}
        />
      </div>
    </div>
  );
}

function BiomarkerItem({ 
  reading, 
  showBorder = true 
}: { 
  reading: BiomarkerReading; 
  showBorder?: boolean;
}) {
  const category = reading.category || 'body';
  const colors = categoryColors[category];
  const status = reading.status || 'in-range';
  
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 'var(--space-md)',
        padding: 'var(--space-lg)',
        borderBottom: showBorder ? '1px solid var(--color-border-separator)' : 'none',
      }}
    >
      {/* Icon container */}
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: 'var(--radius-md)',
          backgroundColor: colors.bg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <FlaskIcon color={colors.icon} />
      </div>
      
      {/* Content area */}
      <div style={{ flex: 1, minWidth: 0 }}>
        {/* Top row: label and date */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: 'var(--space-xs)',
          }}
        >
          {/* Label */}
          <span
            style={{
              fontSize: 15,
              fontWeight: 500,
              color: 'var(--color-text-primary)',
              lineHeight: 1.3,
            }}
          >
            {reading.label}
          </span>
          
          {/* Date */}
          {reading.date && (
            <span
              style={{
                fontSize: 13,
                fontWeight: 400,
                color: 'var(--color-text-secondary)',
                flexShrink: 0,
                marginLeft: 'var(--space-sm)',
              }}
            >
              {reading.date}
            </span>
          )}
        </div>
        
        {/* Bottom row: value/unit and range indicator */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}
        >
          {/* Value and unit */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: 'var(--color-text-primary)',
                lineHeight: 1.1,
                letterSpacing: '-0.5px',
              }}
            >
              {reading.value}
            </span>
            <span
              style={{
                fontSize: 13,
                fontWeight: 400,
                color: 'var(--color-text-tertiary)',
                marginTop: 2,
              }}
            >
              {reading.unit}
            </span>
          </div>
          
          {/* Range indicator */}
          {reading.status && <RangeIndicator status={reading.status} />}
        </div>
      </div>
    </div>
  );
}

export function BiomarkerListCard({ readings, onClick, separateCards = true }: BiomarkerListCardProps) {
  if (separateCards) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
        {readings.map((reading, index) => (
          <Card key={index} onClick={onClick} padding="none">
            <BiomarkerItem reading={reading} showBorder={false} />
          </Card>
        ))}
      </div>
    );
  }
  
  return (
    <Card onClick={onClick} padding="none">
      {readings.map((reading, index) => (
        <BiomarkerItem 
          key={index} 
          reading={reading} 
          showBorder={index < readings.length - 1} 
        />
      ))}
    </Card>
  );
}
