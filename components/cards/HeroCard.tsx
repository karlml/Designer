import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from '../buttons/Button';


interface HeroCardProps {
  imageUrl: string;
  title: string;
  subtitle: string;
  buttonText: string;
  onButtonClick?: () => void;
}

export function HeroCard({ imageUrl, title, subtitle, buttonText, onButtonClick }: HeroCardProps) {
  return (
    <div
      style={{
        position: 'relative',
        height: 220,
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
      }}
    >
      <img
        src={imageUrl}
        alt={title}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.15) 100%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: 'var(--space-xl)',
          textAlign: 'center',
        }}
      >
        <h2 style={{ fontSize: 22, fontWeight: 700, color: 'var(--color-text-inverse)', marginBottom: 'var(--space-xs)' }}>
          {title}
        </h2>
        <p style={{ fontSize: 15, color: 'rgba(255, 255, 255, 0.8)', marginBottom: 'var(--space-lg)' }}>
          {subtitle}
        </p>
        <Button variant="secondary" onClick={onButtonClick}>
          {buttonText}
          <ChevronRight size={16} />
        </Button>
      </div>
    </div>
  );
}
