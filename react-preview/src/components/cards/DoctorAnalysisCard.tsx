import React, { ReactNode } from 'react';
import { ChevronLeft } from 'lucide-react';
import { Card } from '../layout/Card';

interface HighlightedSection {
  text: string;
  backgroundColor?: string;
  textColor?: string;
}

interface DoctorAnalysisCardProps {
  title: string;
  date?: string;
  authorDescription?: string;
  summaryTitle?: string;
  highlightedContent?: HighlightedSection;
  showBackButton?: boolean;
  onBack?: () => void;
  onClick?: () => void;
  children?: ReactNode;
}

export function DoctorAnalysisCard({
  title,
  date,
  authorDescription,
  summaryTitle,
  highlightedContent,
  showBackButton = true,
  onBack,
  onClick,
  children,
}: DoctorAnalysisCardProps) {
  return (
    <Card onClick={onClick} shadow>
      <div>
        {/* Header with back button */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-md)',
            marginBottom: 'var(--space-lg)',
          }}
        >
          {/* Back button - 40px to match icon container standards */}
          {showBackButton && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onBack?.();
              }}
              style={{
                width: 40,
                height: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'var(--color-bg-elevated)',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                cursor: 'pointer',
                flexShrink: 0,
              }}
            >
              <ChevronLeft size={20} color="var(--color-text-primary)" />
            </button>
          )}
          {/* Title - headline style: 17px, Semibold (600) */}
          <span
            style={{
              fontSize: 17,
              fontWeight: 600,
              color: 'var(--color-text-primary)',
            }}
          >
            {title}
          </span>
        </div>

        {/* Date - body-small style: 15px, Semibold (600) */}
        {date && (
          <div
            style={{
              fontSize: 15,
              fontWeight: 600,
              color: 'var(--color-text-primary)',
              marginBottom: 'var(--space-sm)',
            }}
          >
            {date}
          </div>
        )}

        {/* Author Description - body-small style: 15px, Regular (400) */}
        {authorDescription && (
          <p
            style={{
              fontSize: 15,
              fontWeight: 400,
              color: 'var(--color-text-secondary)',
              lineHeight: 1.4,
              margin: 0,
              marginBottom: 'var(--space-lg)',
            }}
          >
            {authorDescription}
          </p>
        )}

        {/* Summary Title - body-small style: 15px, Semibold (600) */}
        {summaryTitle && (
          <div
            style={{
              fontSize: 15,
              fontWeight: 600,
              color: 'var(--color-text-primary)',
              marginBottom: 'var(--space-md)',
            }}
          >
            {summaryTitle}
          </div>
        )}

        {/* Highlighted Content Box - body-small style: 15px */}
        {highlightedContent && (
          <div
            style={{
              padding: 'var(--space-lg)',
              backgroundColor: highlightedContent.backgroundColor || 'var(--color-brand-primary)',
              borderRadius: 'var(--radius-md)',
              fontSize: 15,
              fontWeight: 400,
              color: highlightedContent.textColor || 'var(--color-text-inverse)',
              lineHeight: 1.4,
            }}
          >
            {highlightedContent.text}
          </div>
        )}

        {/* Additional Content */}
        {children}
      </div>
    </Card>
  );
}
