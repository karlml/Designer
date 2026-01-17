/**
 * Withings "Soft Wellness" Design System
 * React Component Library
 * 
 * Complete component library for building health/wellness mobile apps
 * Extracted from Eyr app restyling project
 */

import React, { ReactNode, useState } from 'react';
import {
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  X,
  Bell,
  Plus,
  Settings,
  Home,
  Star,
  Users,
  Sparkles,
  Activity,
  Heart,
  Moon,
  TrendingUp,
  MessageSquare,
  User,
  CreditCard,
  Globe,
  Phone,
  FileText,
  Calendar,
  Check,
  Edit2,
  Fingerprint,
} from 'lucide-react';

// ============================================================================
// THEME & STYLES
// ============================================================================

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=SF+Pro+Display:wght@400;500;600;700&family=SF+Pro+Text:wght@400;500;600;700&display=swap');
  
  :root {
    /* Background Colors */
    --color-bg-primary: #F7F6F4;
    --color-bg-secondary: #FFFFFF;
    --color-bg-elevated: #EDEBE8;
    --color-bg-overlay: rgba(158, 158, 158, 0.4);

    /* Brand Colors */
    --color-brand-primary: #2B3A67;
    --color-brand-accent: #4A6CF7;

    /* Category Colors */
    --color-activity-bg: #F9F3DC;
    --color-activity-text: #8B7B3D;
    --color-body-bg: #EDE4F3;
    --color-body-text: #6B4D8A;
    --color-heart-bg: #FCE4EC;
    --color-heart-text: #C75B7A;
    --color-sleep-bg: #E3F2FD;
    --color-sleep-text: #4A6FA5;
    --color-success-bg: #E8F5E9;
    --color-success-text: #4CAF50;

    /* Text Colors */
    --color-text-primary: #1A1A1A;
    --color-text-secondary: #5C5C5C;
    --color-text-tertiary: #9E9E9E;
    --color-text-inverse: #FFFFFF;

    /* UI Colors */
    --color-border-subtle: #E5E5E5;
    --color-border-separator: #F0F0F0;

    /* Spacing */
    --space-xs: 4px;
    --space-sm: 8px;
    --space-md: 12px;
    --space-lg: 16px;
    --space-xl: 20px;
    --space-2xl: 24px;
    --space-3xl: 32px;

    /* Radii */
    --radius-sm: 8px;
    --radius-md: 12px;
    --radius-lg: 16px;
    --radius-xl: 20px;
    --radius-2xl: 24px;
    --radius-full: 9999px;

    /* Shadows */
    --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.04);
    --shadow-md: 0 2px 8px rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 4px 16px rgba(0, 0, 0, 0.08);
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
    background: var(--color-bg-primary);
    color: var(--color-text-primary);
    -webkit-font-smoothing: antialiased;
  }
`;

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

type CategoryType = 'activity' | 'body' | 'heart' | 'sleep' | 'success' | 'default';

const categoryColors: Record<CategoryType, { bg: string; text: string }> = {
  activity: { bg: 'var(--color-activity-bg)', text: 'var(--color-activity-text)' },
  body: { bg: 'var(--color-body-bg)', text: 'var(--color-body-text)' },
  heart: { bg: 'var(--color-heart-bg)', text: 'var(--color-heart-text)' },
  sleep: { bg: 'var(--color-sleep-bg)', text: 'var(--color-sleep-text)' },
  success: { bg: 'var(--color-success-bg)', text: 'var(--color-success-text)' },
  default: { bg: 'var(--color-bg-elevated)', text: 'var(--color-text-secondary)' },
};

// ============================================================================
// AVATAR COMPONENT
// ============================================================================

interface AvatarProps {
  initials: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  imageUrl?: string;
}

export function Avatar({ initials, size = 'md', imageUrl }: AvatarProps) {
  const sizes = {
    sm: { width: 32, height: 32, fontSize: 12 },
    md: { width: 44, height: 44, fontSize: 16 },
    lg: { width: 80, height: 80, fontSize: 28 },
    xl: { width: 150, height: 150, fontSize: 48 },
  };

  const s = sizes[size];

  return (
    <div
      style={{
        width: s.width,
        height: s.height,
        borderRadius: 'var(--radius-full)',
        backgroundColor: 'var(--color-brand-primary)',
        color: 'var(--color-text-inverse)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: s.fontSize,
        fontWeight: 700,
        textTransform: 'uppercase',
        overflow: 'hidden',
        flexShrink: 0,
      }}
    >
      {imageUrl ? (
        <img src={imageUrl} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      ) : (
        initials
      )}
    </div>
  );
}

// ============================================================================
// CARD COMPONENT
// ============================================================================

interface CardProps {
  children: ReactNode;
  category?: CategoryType;
  shadow?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

export function Card({ children, category = 'default', shadow = false, padding = 'lg', onClick }: CardProps) {
  const paddings = {
    none: 0,
    sm: 'var(--space-md)',
    md: 'var(--space-lg)',
    lg: 'var(--space-xl)',
  };

  const bg = category === 'default' ? 'var(--color-bg-secondary)' : categoryColors[category].bg;
  const color = category === 'default' ? 'inherit' : categoryColors[category].text;

  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: bg,
        color: color,
        borderRadius: 'var(--radius-lg)',
        padding: paddings[padding],
        boxShadow: shadow ? 'var(--shadow-sm)' : 'none',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'transform 150ms ease',
        overflow: 'hidden',
      }}
    >
      {children}
    </div>
  );
}

// ============================================================================
// BUTTON COMPONENT
// ============================================================================

interface ButtonProps {
  children?: ReactNode;
  variant?: 'primary' | 'secondary' | 'icon' | 'icon-dark';
  icon?: ReactNode;
  fullWidth?: boolean;
  onClick?: () => void;
}

export function Button({ children, variant = 'primary', icon, fullWidth = false, onClick }: ButtonProps) {
  const baseStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-sm)',
    fontFamily: 'inherit',
    fontWeight: 600,
    border: 'none',
    cursor: 'pointer',
    transition: 'all 150ms ease',
    width: fullWidth ? '100%' : 'auto',
  };

  const variants: Record<string, React.CSSProperties> = {
    primary: {
      ...baseStyles,
      height: 52,
      padding: '0 var(--space-2xl)',
      backgroundColor: 'var(--color-text-primary)',
      color: 'var(--color-text-inverse)',
      borderRadius: 'var(--radius-full)',
      fontSize: 17,
    },
    secondary: {
      ...baseStyles,
      height: 36,
      padding: '0 var(--space-lg)',
      backgroundColor: 'transparent',
      color: 'var(--color-text-primary)',
      border: '1px solid var(--color-text-primary)',
      borderRadius: 'var(--radius-full)',
      fontSize: 15,
    },
    icon: {
      ...baseStyles,
      width: 44,
      height: 44,
      padding: 0,
      backgroundColor: 'var(--color-bg-secondary)',
      borderRadius: 'var(--radius-full)',
    },
    'icon-dark': {
      ...baseStyles,
      width: 44,
      height: 44,
      padding: 0,
      backgroundColor: 'var(--color-text-primary)',
      color: 'var(--color-text-inverse)',
      borderRadius: 'var(--radius-full)',
    },
  };

  return (
    <button style={variants[variant]} onClick={onClick}>
      {icon}
      {variant !== 'icon' && variant !== 'icon-dark' && children}
    </button>
  );
}

// ============================================================================
// SEGMENTED CONTROL COMPONENT
// ============================================================================

interface SegmentedControlProps {
  options: string[];
  selected: string;
  onChange: (value: string) => void;
  fullWidth?: boolean;
}

export function SegmentedControl({ options, selected, onChange, fullWidth = false }: SegmentedControlProps) {
  return (
    <div
      style={{
        display: fullWidth ? 'flex' : 'inline-flex',
        backgroundColor: 'var(--color-bg-elevated)',
        borderRadius: 'var(--radius-full)',
        padding: 4,
      }}
    >
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          style={{
            flex: fullWidth ? 1 : 'none',
            padding: '12px 20px',
            borderRadius: 'var(--radius-full)',
            fontSize: 15,
            fontWeight: selected === option ? 600 : 400,
            color: selected === option ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
            backgroundColor: selected === option ? 'var(--color-bg-secondary)' : 'transparent',
            boxShadow: selected === option ? 'var(--shadow-sm)' : 'none',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 150ms ease',
            fontFamily: 'inherit',
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

// ============================================================================
// TOGGLE COMPONENT
// ============================================================================

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export function Toggle({ checked, onChange }: ToggleProps) {
  return (
    <div
      onClick={() => onChange(!checked)}
      style={{
        width: 51,
        height: 31,
        borderRadius: 'var(--radius-full)',
        backgroundColor: checked ? 'var(--color-text-primary)' : 'var(--color-border-subtle)',
        position: 'relative',
        cursor: 'pointer',
        transition: 'background-color 150ms ease',
        flexShrink: 0,
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 2,
          left: checked ? 22 : 2,
          width: 27,
          height: 27,
          borderRadius: 'var(--radius-full)',
          backgroundColor: 'var(--color-text-inverse)',
          boxShadow: 'var(--shadow-sm)',
          transition: 'left 150ms ease',
        }}
      />
    </div>
  );
}

// ============================================================================
// PROGRESS BAR COMPONENT
// ============================================================================

interface ProgressBarProps {
  progress: number; // 0 to 100
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div
      style={{
        height: 4,
        backgroundColor: 'var(--color-bg-elevated)',
        borderRadius: 2,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          height: '100%',
          width: `${Math.min(Math.max(progress, 0), 100)}%`,
          backgroundColor: 'var(--color-brand-accent)',
          borderRadius: '0 2px 2px 0',
          transition: 'width 300ms ease',
        }}
      />
    </div>
  );
}

// ============================================================================
// NAVIGATION HEADER COMPONENT
// ============================================================================

interface NavHeaderProps {
  title: string;
  showBack?: boolean;
  showClose?: boolean;
  onBack?: () => void;
  onClose?: () => void;
  bordered?: boolean;
}

export function NavHeader({ title, showBack, showClose, onBack, onClose, bordered = false }: NavHeaderProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 56,
        padding: '0 var(--space-lg)',
        backgroundColor: 'var(--color-bg-primary)',
        borderBottom: bordered ? '1px solid var(--color-border-separator)' : 'none',
      }}
    >
      {showBack ? (
        <button
          onClick={onBack}
          style={{
            width: 44,
            height: 44,
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'var(--color-bg-elevated)',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-text-primary)',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <ChevronLeft size={24} />
        </button>
      ) : (
        <div style={{ width: 44 }} />
      )}
      <span
        style={{
          fontSize: 20,
          fontWeight: 600,
          color: 'var(--color-text-primary)',
        }}
      >
        {title}
      </span>
      {showClose ? (
        <button
          onClick={onClose}
          style={{
            width: 44,
            height: 44,
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'var(--color-bg-elevated)',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-text-primary)',
            boxShadow: 'var(--shadow-sm)',
          }}
        >
          <X size={24} />
        </button>
      ) : (
        <div style={{ width: 44 }} />
      )}
    </div>
  );
}

// ============================================================================
// INFO ROW COMPONENT
// ============================================================================

interface InfoRowProps {
  label: string;
  value: string;
}

export function InfoRow({ label, value }: InfoRowProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 'var(--space-lg)',
        backgroundColor: 'var(--color-bg-secondary)',
      }}
    >
      <span
        style={{
          fontSize: 17,
          fontWeight: 400,
          color: 'var(--color-text-primary)',
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontSize: 17,
          fontWeight: 600,
          color: 'var(--color-text-primary)',
        }}
      >
        {value}
      </span>
    </div>
  );
}

// ============================================================================
// SETTINGS LIST ITEM COMPONENT
// ============================================================================

interface SettingsItemProps {
  icon?: ReactNode;
  iconCategory?: CategoryType;
  title: string;
  value?: string;
  toggle?: { checked: boolean; onChange: (checked: boolean) => void };
  showChevron?: boolean;
  onClick?: () => void;
}

export function SettingsItem({
  icon,
  iconCategory = 'default',
  title,
  value,
  toggle,
  showChevron = true,
  onClick,
}: SettingsItemProps) {
  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-md)',
        padding: 'var(--space-lg)',
        backgroundColor: 'var(--color-bg-secondary)',
        cursor: onClick ? 'pointer' : 'default',
      }}
    >
      {icon && (
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 'var(--radius-md)',
            backgroundColor: categoryColors[iconCategory].bg,
            color: categoryColors[iconCategory].text,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          {icon}
        </div>
      )}
      <span style={{ flex: 1, fontSize: 17, fontWeight: 400, color: 'var(--color-text-primary)' }}>
        {title}
      </span>
      {value && (
        <span style={{ fontSize: 17, color: 'var(--color-brand-accent)', marginRight: 'var(--space-sm)' }}>
          {value}
        </span>
      )}
      {toggle && <Toggle checked={toggle.checked} onChange={toggle.onChange} />}
      {showChevron && <ChevronRight size={20} color="var(--color-text-tertiary)" />}
    </div>
  );
}

// ============================================================================
// SELECTION CARD COMPONENT
// ============================================================================

interface SelectionCardProps {
  icon?: ReactNode;
  iconCategory?: CategoryType;
  title: string;
  subtitle?: string;
  showEdit?: boolean;
  onEdit?: () => void;
  onClick?: () => void;
}

export function SelectionCard({
  icon,
  iconCategory = 'default',
  title,
  subtitle,
  showEdit,
  onEdit,
  onClick,
}: SelectionCardProps) {
  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-md)',
        backgroundColor: 'var(--color-bg-secondary)',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-lg)',
        cursor: onClick ? 'pointer' : 'default',
      }}
    >
      {icon && (
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 'var(--radius-md)',
            backgroundColor: categoryColors[iconCategory].bg,
            color: categoryColors[iconCategory].text,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          {icon}
        </div>
      )}
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 17, fontWeight: 600, color: 'var(--color-text-primary)' }}>{title}</div>
        {subtitle && (
          <div style={{ fontSize: 15, color: 'var(--color-text-secondary)', marginTop: 2 }}>{subtitle}</div>
        )}
      </div>
      {showEdit && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onEdit?.();
          }}
          style={{
            width: 44,
            height: 44,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-brand-primary)',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <Edit2 size={20} />
        </button>
      )}
    </div>
  );
}

// ============================================================================
// DROPDOWN SELECT COMPONENT
// ============================================================================

interface DropdownSelectProps {
  label: string;
  onClick?: () => void;
}

export function DropdownSelect({ label, onClick }: DropdownSelectProps) {
  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'var(--color-bg-secondary)',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-lg) var(--space-xl)',
        cursor: 'pointer',
      }}
    >
      <span style={{ fontSize: 17, fontWeight: 400, color: 'var(--color-text-primary)' }}>{label}</span>
      <ChevronDown size={20} color="var(--color-text-tertiary)" />
    </div>
  );
}

// ============================================================================
// APPOINTMENT CARD COMPONENT
// ============================================================================

interface AppointmentCardProps {
  imageUrl: string;
  time: string;
  doctorName: string;
  onClick?: () => void;
}

export function AppointmentCard({ imageUrl, time, doctorName, onClick }: AppointmentCardProps) {
  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-md)',
        backgroundColor: 'var(--color-bg-secondary)',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-lg)',
        cursor: onClick ? 'pointer' : 'default',
      }}
    >
      <img
        src={imageUrl}
        alt={doctorName}
        style={{
          width: 48,
          height: 48,
          borderRadius: 'var(--radius-md)',
          objectFit: 'cover',
          flexShrink: 0,
        }}
      />
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 17, fontWeight: 600, color: 'var(--color-brand-primary)' }}>{time}</div>
        <div style={{ fontSize: 15, color: 'var(--color-text-secondary)', marginTop: 2 }}>{doctorName}</div>
      </div>
      <ChevronRight size={20} color="var(--color-text-tertiary)" />
    </div>
  );
}

// ============================================================================
// FEATURE CARD COMPONENT
// ============================================================================

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

// ============================================================================
// HERO CARD COMPONENT
// ============================================================================

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

// ============================================================================
// BADGE COMPONENT
// ============================================================================

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'success' | 'activity' | 'body' | 'heart' | 'sleep';
  icon?: ReactNode;
  showDot?: boolean;
}

export function Badge({ children, variant = 'default', icon, showDot = false }: BadgeProps) {
  const colors: Record<string, { bg: string; text: string }> = {
    default: { bg: 'var(--color-bg-secondary)', text: 'var(--color-text-primary)' },
    success: { bg: 'var(--color-success-bg)', text: 'var(--color-success-text)' },
    activity: { bg: 'var(--color-activity-bg)', text: 'var(--color-activity-text)' },
    body: { bg: 'var(--color-body-bg)', text: 'var(--color-body-text)' },
    heart: { bg: 'var(--color-heart-bg)', text: 'var(--color-heart-text)' },
    sleep: { bg: 'var(--color-sleep-bg)', text: 'var(--color-sleep-text)' },
  };

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: '8px 12px',
        borderRadius: 'var(--radius-full)',
        backgroundColor: colors[variant].bg,
        color: colors[variant].text,
        fontSize: 13,
        fontWeight: 600,
        boxShadow: variant === 'default' ? 'var(--shadow-md)' : 'none',
      }}
    >
      {showDot && (
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'currentColor',
          }}
        />
      )}
      {icon}
      {children}
    </span>
  );
}

// ============================================================================
// PARTNER BADGE COMPONENT
// ============================================================================

interface PartnerBadgeProps {
  label: string;
}

export function PartnerBadge({ label }: PartnerBadgeProps) {
  return (
    <div
      style={{
        width: 36,
        height: 36,
        borderRadius: 'var(--radius-full)',
        backgroundColor: 'var(--color-brand-accent)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--color-text-inverse)',
        fontWeight: 700,
        fontSize: 16,
        boxShadow: 'var(--shadow-md)',
      }}
    >
      {label}
    </div>
  );
}

// ============================================================================
// W+ BADGE COMPONENT
// ============================================================================

export function WPlusBadge() {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #F97316 0%, #EC4899 100%)',
        color: 'white',
        fontSize: 11,
        fontWeight: 700,
        padding: '4px 8px',
        borderRadius: 'var(--radius-sm)',
      }}
    >
      W+
    </span>
  );
}

// ============================================================================
// TAB BAR COMPONENT
// ============================================================================

interface TabItem {
  id: string;
  label: string;
  icon: ReactNode;
  badge?: number;
}

interface TabBarProps {
  items: TabItem[];
  activeId: string;
  onChange: (id: string) => void;
}

export function TabBar({ items, activeId, onChange }: TabBarProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        height: 83,
        backgroundColor: 'var(--color-bg-elevated)',
        borderRadius: 'var(--radius-2xl) var(--radius-2xl) 0 0',
        padding: 'var(--space-md) var(--space-lg) 0',
      }}
    >
      {items.map((item) => {
        const isActive = item.id === activeId;
        return (
          <button
            key={item.id}
            onClick={() => onChange(item.id)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 'var(--space-xs)',
              padding: 'var(--space-sm) var(--space-lg)',
              borderRadius: 'var(--radius-full)',
              backgroundColor: isActive ? 'rgba(200, 197, 192, 0.6)' : 'transparent',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 150ms ease',
              position: 'relative',
            }}
          >
            {item.badge !== undefined && item.badge > 0 && (
              <span
                style={{
                  position: 'absolute',
                  top: 2,
                  right: 8,
                  minWidth: 20,
                  height: 20,
                  padding: '0 6px',
                  backgroundColor: 'var(--color-brand-primary)',
                  color: 'var(--color-text-inverse)',
                  fontSize: 11,
                  fontWeight: 600,
                  borderRadius: 'var(--radius-full)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {item.badge}
              </span>
            )}
            <div style={{ color: isActive ? 'var(--color-text-primary)' : 'var(--color-text-secondary)' }}>
              {item.icon}
            </div>
            <span
              style={{
                fontSize: 11,
                fontWeight: 500,
                color: isActive ? 'var(--color-brand-accent)' : 'var(--color-text-secondary)',
              }}
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

// ============================================================================
// CHAT MESSAGE COMPONENT
// ============================================================================

interface ChatMessageProps {
  content: ReactNode;
  sent?: boolean;
  avatarUrl?: string;
  signature?: string;
}

export function ChatMessage({ content, sent = false, avatarUrl, signature }: ChatMessageProps) {
  return (
    <div
      style={{
        display: 'flex',
        gap: 'var(--space-sm)',
        maxWidth: '85%',
        alignSelf: sent ? 'flex-end' : 'flex-start',
        flexDirection: sent ? 'row-reverse' : 'row',
        alignItems: 'flex-end',
      }}
    >
      {!sent && avatarUrl && (
        <img
          src={avatarUrl}
          alt=""
          style={{
            width: 36,
            height: 36,
            borderRadius: 'var(--radius-full)',
            objectFit: 'cover',
            flexShrink: 0,
          }}
        />
      )}
      <div
        style={{
          padding: 'var(--space-md) var(--space-lg)',
          fontSize: 16,
          lineHeight: 1.45,
          color: 'var(--color-text-primary)',
          backgroundColor: sent ? 'var(--color-bg-elevated)' : 'var(--color-bg-secondary)',
          borderRadius: sent
            ? 'var(--radius-lg) var(--radius-lg) var(--space-xs) var(--radius-lg)'
            : 'var(--radius-lg) var(--radius-lg) var(--radius-lg) var(--space-xs)',
        }}
      >
        {content}
        {signature && (
          <div style={{ marginTop: 'var(--space-sm)', fontWeight: 600, color: 'var(--color-brand-primary)' }}>
            {signature}
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================================================
// CHAT DATE SEPARATOR COMPONENT
// ============================================================================

interface ChatDateProps {
  date: string;
}

export function ChatDate({ date }: ChatDateProps) {
  return (
    <div
      style={{
        textAlign: 'center',
        fontSize: 13,
        color: 'var(--color-text-tertiary)',
        margin: 'var(--space-sm) 0 var(--space-lg)',
      }}
    >
      {date}
    </div>
  );
}

// ============================================================================
// CHAT INPUT COMPONENT
// ============================================================================

interface ChatInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSend?: () => void;
  disabled?: boolean;
}

export function ChatInput({
  placeholder = 'Your message',
  value = '',
  onChange,
  onSend,
  disabled = false,
}: ChatInputProps) {
  return (
    <div
      style={{
        position: 'relative',
        padding: 2,
        borderRadius: 'var(--radius-full)',
        background: 'linear-gradient(135deg, #E879A0 0%, #9B59B6 50%, #7C3AED 100%)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-sm)',
          padding: 'var(--space-sm)',
          backgroundColor: 'var(--color-bg-primary)',
          borderRadius: 'var(--radius-full)',
        }}
      >
        {/* AI Sparkle Icon */}
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 'var(--radius-full)',
            backgroundColor: '#FECDD3',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2L13.09 8.26L19 9L13.09 9.74L12 16L10.91 9.74L5 9L10.91 8.26L12 2Z"
              fill="#BE185D"
            />
            <path
              d="M18 14L18.545 16.455L21 17L18.545 17.545L18 20L17.455 17.545L15 17L17.455 16.455L18 14Z"
              fill="#BE185D"
            />
            <path
              d="M6 14L6.545 16.455L9 17L6.545 17.545L6 20L5.455 17.545L3 17L5.455 16.455L6 14Z"
              fill="#BE185D"
            />
          </svg>
        </div>

        {/* Input Field */}
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          disabled={disabled}
          style={{
            flex: 1,
            border: 'none',
            outline: 'none',
            fontSize: 17,
            fontWeight: 400,
            color: 'var(--color-text-primary)',
            backgroundColor: 'transparent',
            padding: 'var(--space-sm)',
          }}
        />

        {/* Send Button */}
        <button
          onClick={onSend}
          disabled={disabled || !value}
          style={{
            width: 40,
            height: 40,
            borderRadius: 'var(--radius-full)',
            backgroundColor: disabled || !value ? 'var(--color-bg-elevated)' : 'var(--color-text-primary)',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: disabled || !value ? 'not-allowed' : 'pointer',
            flexShrink: 0,
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke={disabled || !value ? 'var(--color-text-tertiary)' : 'var(--color-bg-primary)'}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

// ============================================================================
// CHAT DISCLAIMER COMPONENT
// ============================================================================

interface ChatDisclaimerProps {
  text?: string;
}

export function ChatDisclaimer({
  text = 'The insights provided do not constitute medical advice. In case of doubt, always consult a healthcare professional.',
}: ChatDisclaimerProps) {
  return (
    <p
      style={{
        fontSize: 13,
        lineHeight: 1.5,
        color: 'var(--color-text-tertiary)',
        textAlign: 'center',
        marginTop: 'var(--space-md)',
        padding: '0 var(--space-lg)',
      }}
    >
      {text}
    </p>
  );
}

// ============================================================================
// CIRCULAR PROGRESS COMPONENT
// ============================================================================

interface CircularProgressProps {
  value: number;
  max: number;
  size?: number;
  strokeWidth?: number;
  showLabel?: boolean;
}

export function CircularProgress({
  value,
  max,
  size = 80,
  strokeWidth = 6,
  showLabel = true,
}: CircularProgressProps) {
  const percentage = Math.min((value / max) * 100, 100);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--color-border-subtle)"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--color-brand-accent)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 600ms ease-in-out' }}
        />
      </svg>
      {showLabel && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span
            style={{
              fontSize: size * 0.28,
              fontWeight: 700,
              color: 'var(--color-brand-accent)',
              lineHeight: 1,
            }}
          >
            {Math.round(percentage)}%
          </span>
          <span style={{ fontSize: size * 0.14, color: 'var(--color-text-tertiary)', marginTop: 2 }}>
            {max.toLocaleString()}
          </span>
        </div>
      )}
    </div>
  );
}

// ============================================================================
// METRIC CARD COMPONENT
// ============================================================================

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

// ============================================================================
// SECTION HEADER COMPONENT
// ============================================================================

interface SectionHeaderProps {
  title: string;
  action?: ReactNode;
  badge?: string;
}

export function SectionHeader({ title, action, badge }: SectionHeaderProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 'var(--space-lg)',
      }}
    >
      <h2 style={{ fontSize: 22, fontWeight: 700, letterSpacing: -0.2 }}>{title}</h2>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
        {badge && (
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: 'var(--color-text-secondary)',
              padding: '4px 10px',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--color-border-separator)',
            }}
          >
            {badge}
          </span>
        )}
        {action}
      </div>
    </div>
  );
}

// ============================================================================
// MODAL / BOTTOM SHEET COMPONENT
// ============================================================================

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  action?: ReactNode;
  children: ReactNode;
}

export function Modal({ isOpen, onClose, title, action, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'var(--color-bg-overlay)',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        zIndex: 100,
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxHeight: '90vh',
          backgroundColor: 'var(--color-bg-secondary)',
          borderRadius: 'var(--radius-2xl) var(--radius-2xl) 0 0',
          overflow: 'hidden',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            width: 36,
            height: 5,
            margin: 'var(--space-sm) auto',
            backgroundColor: '#D1D1D6',
            borderRadius: 'var(--radius-full)',
          }}
        />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 56,
            padding: '0 var(--space-lg)',
            position: 'relative',
          }}
        >
          <Button variant="icon-dark" onClick={onClose} icon={<X size={20} />} />
          <span
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: 1.5,
              textTransform: 'uppercase',
              color: 'var(--color-text-secondary)',
            }}
          >
            {title}
          </span>
          {action}
        </div>
        <div style={{ padding: 'var(--space-xl)', overflowY: 'auto' }}>{children}</div>
      </div>
    </div>
  );
}

// ============================================================================
// DATE NAVIGATOR COMPONENT
// ============================================================================

interface DateNavigatorProps {
  label: string;
  onPrevious: () => void;
  onNext: () => void;
}

export function DateNavigator({ label, onPrevious, onNext }: DateNavigatorProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 'var(--space-md) var(--space-xl)',
      }}
    >
      <Button variant="icon" onClick={onPrevious} icon={<ChevronLeft size={20} />} />
      <span style={{ fontSize: 17, fontWeight: 600 }}>{label}</span>
      <Button variant="icon" onClick={onNext} icon={<ChevronRight size={20} />} />
    </div>
  );
}

// ============================================================================
// LIST ITEM COMPONENT (Legacy - for compatibility)
// ============================================================================

interface ListItemProps {
  icon?: ReactNode;
  iconCategory?: CategoryType;
  avatar?: { initials: string; imageUrl?: string };
  title: string;
  subtitle?: string;
  value?: string;
  showChevron?: boolean;
  onClick?: () => void;
}

export function ListItem({ icon, iconCategory = 'default', avatar, title, subtitle, value, showChevron = true, onClick }: ListItemProps) {
  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-md)',
        padding: 'var(--space-lg)',
        cursor: onClick ? 'pointer' : 'default',
      }}
    >
      {avatar && (
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'var(--color-brand-primary)',
            color: 'var(--color-text-inverse)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 16,
            fontWeight: 700,
            textTransform: 'uppercase',
            overflow: 'hidden',
            flexShrink: 0,
          }}
        >
          {avatar.imageUrl ? (
            <img src={avatar.imageUrl} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            avatar.initials
          )}
        </div>
      )}
      {icon && !avatar && (
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 'var(--radius-md)',
            backgroundColor: categoryColors[iconCategory].bg,
            color: categoryColors[iconCategory].text,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {icon}
        </div>
      )}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 17, fontWeight: 600, color: 'var(--color-text-primary)' }}>{title}</div>
        {subtitle && (
          <div style={{ fontSize: 15, color: 'var(--color-text-secondary)', marginTop: 2 }}>{subtitle}</div>
        )}
      </div>
      {value && (
        <div style={{ fontSize: 17, fontWeight: 600, color: 'var(--color-text-primary)' }}>{value}</div>
      )}
      {showChevron && <ChevronRight size={20} color="var(--color-text-tertiary)" />}
    </div>
  );
}

// ============================================================================
// NAVIGATION HEADER COMPONENT (Avatar variant)
// ============================================================================

interface NavigationHeaderProps {
  avatar?: { initials: string; imageUrl?: string };
  title?: string;
  rightContent?: ReactNode;
}

export function NavigationHeader({ avatar, title, rightContent }: NavigationHeaderProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 56,
        padding: '0 var(--space-xl)',
      }}
    >
      {avatar && <Avatar initials={avatar.initials} imageUrl={avatar.imageUrl} />}
      {title && (
        <span style={{ fontSize: 17, fontWeight: 400, color: 'var(--color-text-secondary)' }}>{title}</span>
      )}
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>{rightContent}</div>
    </div>
  );
}

// ============================================================================
// MODAL HEADER COMPONENT (standalone header bar)
// ============================================================================

interface ModalHeaderProps {
  title: string;
  onClose?: () => void;
  actionLabel?: string;
  actionIcon?: ReactNode;
  onAction?: () => void;
}

export function ModalHeader({ title, onClose, actionLabel, actionIcon, onAction }: ModalHeaderProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 'var(--space-lg) var(--space-xl)',
        backgroundColor: 'var(--color-bg-secondary)',
        borderRadius: 'var(--radius-lg)',
      }}
    >
      <button
        onClick={onClose}
        style={{
          width: 40,
          height: 40,
          borderRadius: 'var(--radius-md)',
          backgroundColor: 'var(--color-bg-elevated)',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--color-text-primary)',
        }}
      >
        <X size={20} />
      </button>
      <span
        style={{
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: 1.5,
          color: 'var(--color-text-primary)',
          textTransform: 'uppercase',
        }}
      >
        {title}
      </span>
      {actionLabel && (
        <button
          onClick={onAction}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-sm)',
            padding: 'var(--space-sm) var(--space-md)',
            backgroundColor: 'var(--color-text-primary)',
            color: 'var(--color-text-inverse)',
            border: 'none',
            borderRadius: 'var(--radius-full)',
            fontSize: 15,
            fontWeight: 600,
            cursor: 'pointer',
            fontFamily: 'inherit',
          }}
        >
          {actionIcon}
          {actionLabel}
        </button>
      )}
    </div>
  );
}

// ============================================================================
// DEVICE CARD COMPONENT
// ============================================================================

interface DeviceCardProps {
  name: string;
  syncedDaysAgo?: number;
  batteryPercent?: number;
}

export function DeviceCard({ name, syncedDaysAgo, batteryPercent }: DeviceCardProps) {
  return (
    <div
      style={{
        backgroundColor: 'var(--color-bg-secondary)',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-xl)',
      }}
    >
      <h3
        style={{
          fontSize: 28,
          fontWeight: 700,
          color: 'var(--color-text-primary)',
          marginBottom: 'var(--space-md)',
          letterSpacing: -0.5,
        }}
      >
        {name}
      </h3>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-md)',
          padding: 'var(--space-sm) var(--space-md)',
          backgroundColor: 'var(--color-bg-elevated)',
          borderRadius: 'var(--radius-md)',
          fontSize: 15,
          color: 'var(--color-text-secondary)',
        }}
      >
        {syncedDaysAgo !== undefined && (
          <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2">
              <polyline points="23 4 23 10 17 10" />
              <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
            </svg>
            Synced {syncedDaysAgo}d
          </span>
        )}
        {syncedDaysAgo !== undefined && batteryPercent !== undefined && (
          <span style={{ color: 'var(--color-border-subtle)' }}>|</span>
        )}
        {batteryPercent !== undefined && (
          <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2">
              <rect x="1" y="6" width="18" height="12" rx="2" ry="2" />
              <line x1="23" y1="10" x2="23" y2="14" />
            </svg>
            {batteryPercent}%
          </span>
        )}
      </div>
    </div>
  );
}

// ============================================================================
// SETTINGS SECTION CARD COMPONENT
// ============================================================================

interface SettingsSectionCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  children: ReactNode;
}

export function SettingsSectionCard({ icon, title, description, children }: SettingsSectionCardProps) {
  return (
    <div
      style={{
        backgroundColor: 'var(--color-bg-secondary)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          padding: 'var(--space-2xl) var(--space-xl)',
          textAlign: 'center',
          borderBottom: '1px solid var(--color-border-separator)',
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            margin: '0 auto var(--space-lg)',
            backgroundColor: 'var(--color-bg-elevated)',
            borderRadius: 'var(--radius-md)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-text-primary)',
          }}
        >
          {icon}
        </div>
        <h3
          style={{
            fontSize: 22,
            fontWeight: 700,
            color: 'var(--color-text-primary)',
            marginBottom: 'var(--space-sm)',
            letterSpacing: -0.3,
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: 15,
            color: 'var(--color-text-secondary)',
            lineHeight: 1.5,
            maxWidth: 280,
            margin: '0 auto',
          }}
        >
          {description}
        </p>
      </div>
      <div>{children}</div>
    </div>
  );
}

// ============================================================================
// SETTINGS ITEM WITH EDITABLE VALUE
// ============================================================================

interface SettingsItemEditableProps {
  icon?: ReactNode;
  title: string;
  value: string;
  onEdit?: () => void;
}

export function SettingsItemEditable({ icon, title, value, onEdit }: SettingsItemEditableProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-md)',
        padding: 'var(--space-lg)',
        backgroundColor: 'var(--color-bg-secondary)',
      }}
    >
      {icon && (
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 'var(--radius-md)',
            backgroundColor: 'var(--color-bg-elevated)',
            color: 'var(--color-text-secondary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          {icon}
        </div>
      )}
      <span style={{ flex: 1, fontSize: 17, fontWeight: 400, color: 'var(--color-text-primary)' }}>
        {title}
      </span>
      <span style={{ fontSize: 17, fontWeight: 700, color: 'var(--color-text-primary)', marginRight: 'var(--space-xs)' }}>
        {value}
      </span>
      <button
        onClick={onEdit}
        style={{
          width: 36,
          height: 36,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--color-text-primary)',
        }}
      >
        <Edit2 size={20} />
      </button>
    </div>
  );
}

// ============================================================================
// FLOATING ACTION BUTTON COMPONENT
// ============================================================================

interface FABProps {
  icon: ReactNode;
  variant?: 'default' | 'primary';
  onClick?: () => void;
}

export function FAB({ icon, variant = 'default', onClick }: FABProps) {
  return (
    <button
      onClick={onClick}
      style={{
        width: 56,
        height: 56,
        borderRadius: 'var(--radius-full)',
        backgroundColor: variant === 'primary' ? 'var(--color-brand-accent)' : 'var(--color-text-primary)',
        color: 'var(--color-text-inverse)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: 'var(--shadow-lg)',
        cursor: 'pointer',
        border: 'none',
      }}
    >
      {icon}
    </button>
  );
}

// ============================================================================
// DISCOVERY CARD COMPONENT (for tutorials/onboarding)
// ============================================================================

interface DiscoveryCardProps {
  illustration: ReactNode;
  illustrationBg?: string;
  title: string;
  status: string;
  isCompleted?: boolean;
  onClick?: () => void;
}

export function DiscoveryCard({
  illustration,
  illustrationBg = '#5C8A4D',
  title,
  status,
  isCompleted = false,
  onClick,
}: DiscoveryCardProps) {
  return (
    <div
      onClick={onClick}
      style={{
        flexShrink: 0,
        width: 180,
        backgroundColor: 'var(--color-bg-secondary)',
        borderRadius: 'var(--radius-xl)',
        padding: 'var(--space-lg)',
        cursor: onClick ? 'pointer' : 'default',
      }}
    >
      <div
        style={{
          width: 120,
          height: 120,
          backgroundColor: illustrationBg,
          borderRadius: 20,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 'var(--space-md)',
        }}
      >
        {illustration}
      </div>
      <div>
        <h4
          style={{
            fontSize: 17,
            fontWeight: 600,
            color: 'var(--color-text-primary)',
            marginBottom: 'var(--space-xs)',
          }}
        >
          {title}
        </h4>
        <span
          style={{
            fontSize: 15,
            color: isCompleted ? 'var(--color-text-secondary)' : 'var(--color-brand-accent)',
          }}
        >
          {status}
        </span>
      </div>
    </div>
  );
}

// ============================================================================
// DISCOVERY CAROUSEL COMPONENT
// ============================================================================

interface DiscoveryCarouselProps {
  children: ReactNode;
}

export function DiscoveryCarousel({ children }: DiscoveryCarouselProps) {
  return (
    <div
      style={{
        display: 'flex',
        gap: 'var(--space-md)',
        overflowX: 'auto',
        paddingBottom: 'var(--space-sm)',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
    >
      {children}
    </div>
  );
}

// ============================================================================
// PRODUCT THUMBNAIL COMPONENT
// ============================================================================

interface ProductThumbnailProps {
  children: ReactNode;
  onClick?: () => void;
}

export function ProductThumbnail({ children, onClick }: ProductThumbnailProps) {
  return (
    <div
      onClick={onClick}
      style={{
        flexShrink: 0,
        width: 80,
        height: 80,
        borderRadius: 'var(--radius-md)',
        background: 'linear-gradient(135deg, #e8e6e3 0%, #d5d3d0 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: onClick ? 'pointer' : 'default',
      }}
    >
      {children}
    </div>
  );
}

// ============================================================================
// FILLED BUTTON COMPONENT
// ============================================================================

interface FilledButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

export function FilledButton({ children, onClick }: FilledButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        height: 36,
        padding: '0 16px',
        backgroundColor: 'var(--color-text-primary)',
        color: 'var(--color-text-inverse)',
        border: 'none',
        borderRadius: 'var(--radius-full)',
        fontSize: 15,
        fontWeight: 600,
        cursor: 'pointer',
        fontFamily: 'inherit',
      }}
    >
      {children}
    </button>
  );
}

// ============================================================================
// SETTINGS ITEM WITH PLAIN ICON (no background)
// ============================================================================

interface SettingsItemPlainProps {
  icon: ReactNode;
  title: string;
  showChevron?: boolean;
  onClick?: () => void;
}

export function SettingsItemPlain({ icon, title, showChevron = true, onClick }: SettingsItemPlainProps) {
  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-md)',
        padding: 'var(--space-lg)',
        backgroundColor: 'var(--color-bg-secondary)',
        cursor: onClick ? 'pointer' : 'default',
      }}
    >
      <div style={{ width: 24, height: 24, color: 'var(--color-text-primary)', flexShrink: 0 }}>
        {icon}
      </div>
      <span style={{ flex: 1, fontSize: 17, fontWeight: 400, color: 'var(--color-text-primary)' }}>
        {title}
      </span>
      {showChevron && <ChevronRight size={20} color="var(--color-text-tertiary)" />}
    </div>
  );
}

// ============================================================================
// SCREEN HEADER COMPONENT (Activity-style)
// ============================================================================

interface ScreenHeaderProps {
  title: string;
  onBack?: () => void;
  onMore?: () => void;
}

export function ScreenHeader({ title, onBack, onMore }: ScreenHeaderProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 'var(--space-lg) var(--space-xl)',
        backgroundColor: 'var(--color-bg-primary)',
      }}
    >
      <button
        onClick={onBack}
        style={{
          width: 44,
          height: 44,
          borderRadius: 'var(--radius-full)',
          backgroundColor: 'var(--color-bg-elevated)',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--color-text-primary)',
          boxShadow: 'var(--shadow-sm)',
        }}
      >
        <ChevronLeft size={24} />
      </button>
      <span
        style={{
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: 2,
          color: 'var(--color-text-primary)',
          textTransform: 'uppercase',
        }}
      >
        {title}
      </span>
      <button
        onClick={onMore}
        style={{
          width: 44,
          height: 44,
          borderRadius: 'var(--radius-full)',
          backgroundColor: 'var(--color-bg-elevated)',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--color-text-primary)',
          boxShadow: 'var(--shadow-sm)',
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="5" r="2" />
          <circle cx="12" cy="12" r="2" />
          <circle cx="12" cy="19" r="2" />
        </svg>
      </button>
    </div>
  );
}

// ============================================================================
// MINI CHART COMPONENT
// ============================================================================

interface MiniChartProps {
  data: number[];
  height?: number;
  color?: string;
}

export function MiniChart({ data, height = 40, color = 'var(--color-brand-accent)' }: MiniChartProps) {
  const max = Math.max(...data);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-end',
        height,
        gap: 3,
      }}
    >
      {data.map((value, index) => (
        <div
          key={index}
          style={{
            flex: 1,
            height: max > 0 ? `${(value / max) * 100}%` : 0,
            backgroundColor: color,
            borderRadius: 2,
            minWidth: 6,
            minHeight: value > 0 ? 2 : 0,
          }}
        />
      ))}
    </div>
  );
}

// ============================================================================
// BAR CHART COMPONENT
// ============================================================================

interface BarChartProps {
  data: number[];
  labels?: string[];
  maxValue?: number;
  height?: number;
  color?: string;
}

export function BarChart({ data, labels, maxValue, height = 200, color = 'var(--color-brand-accent)' }: BarChartProps) {
  const max = maxValue || Math.max(...data);
  
  return (
    <div style={{ position: 'relative', height, paddingRight: 40 }}>
      {/* Y-axis labels */}
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 30,
          width: 35,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          fontSize: 12,
          color: 'var(--color-text-tertiary)',
        }}
      >
        <span>{max >= 1000 ? `${Math.round(max / 1000)}K` : max}</span>
        <span>{max >= 2000 ? `${Math.round(max / 2000)}K` : Math.round(max / 2)}</span>
        <span>0</span>
      </div>
      
      {/* Chart area */}
      <div
        style={{
          height: height - 30,
          display: 'flex',
          alignItems: 'flex-end',
          gap: 2,
          borderBottom: '1px dashed var(--color-border-subtle)',
          paddingBottom: 1,
        }}
      >
        {data.map((value, index) => (
          <div
            key={index}
            style={{
              flex: 1,
              height: `${(value / max) * 100}%`,
              backgroundColor: color,
              borderRadius: '2px 2px 0 0',
              minHeight: value > 0 ? 2 : 0,
            }}
          />
        ))}
      </div>
      
      {/* X-axis labels */}
      {labels && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingTop: 'var(--space-sm)',
            fontSize: 12,
            color: 'var(--color-text-tertiary)',
          }}
        >
          {labels.map((label, index) => (
            <span key={index}>{label}</span>
          ))}
        </div>
      )}
    </div>
  );
}

// ============================================================================
// STATS CARD COMPONENT
// ============================================================================

interface StatsCardProps {
  label: string;
  value: string | number;
  progress?: { current: number; goal: number };
  infoRows?: Array<{ label: string; value: string }>;
}

export function StatsCard({ label, value, progress, infoRows }: StatsCardProps) {
  return (
    <Card>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <div style={{ fontSize: 17, color: 'var(--color-text-primary)', marginBottom: 'var(--space-xs)' }}>
            {label}
          </div>
          <div style={{ fontSize: 42, fontWeight: 700, letterSpacing: -1, color: 'var(--color-text-primary)' }}>
            {value}
          </div>
        </div>
        {progress && (
          <CircularProgress value={progress.current} max={progress.goal} size={90} />
        )}
      </div>
      {infoRows && infoRows.length > 0 && (
        <div style={{ marginTop: 'var(--space-lg)', borderTop: '1px solid var(--color-border-separator)' }}>
          {infoRows.map((row, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: 'var(--space-md) 0',
                borderBottom: index < infoRows.length - 1 ? '1px solid var(--color-border-separator)' : 'none',
              }}
            >
              <span style={{ fontSize: 17, color: 'var(--color-text-primary)' }}>{row.label}</span>
              <span style={{ fontSize: 17, fontWeight: 600, color: 'var(--color-text-primary)' }}>{row.value}</span>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}

// ============================================================================
// DEVICE STATUS INDICATOR COMPONENT
// ============================================================================

interface DeviceStatusIndicatorProps {
  imageUrl?: string;
  isConnected?: boolean;
  size?: number;
}

export function DeviceStatusIndicator({ imageUrl, isConnected = false, size = 44 }: DeviceStatusIndicatorProps) {
  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <div
        style={{
          width: size,
          height: size,
          borderRadius: 'var(--radius-full)',
          border: '2px solid var(--color-border-subtle)',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'var(--color-bg-secondary)',
        }}
      >
        {imageUrl ? (
          <img src={imageUrl} alt="" style={{ width: '70%', height: '70%', objectFit: 'contain' }} />
        ) : (
          <svg width={size * 0.5} height={size * 0.5} viewBox="0 0 24 24" fill="none" stroke="var(--color-text-tertiary)" strokeWidth="2">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
            <line x1="12" y1="18" x2="12.01" y2="18" />
          </svg>
        )}
      </div>
      {isConnected && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: 12,
            height: 12,
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'var(--color-success-text)',
            border: '2px solid var(--color-bg-primary)',
          }}
        />
      )}
    </div>
  );
}

// ============================================================================
// CATEGORY CARD COMPONENT (for filtering)
// ============================================================================

interface CategoryCardProps {
  icon: ReactNode;
  label: string;
  count?: number;
  onClick?: () => void;
}

export function CategoryCard({ icon, label, count, onClick }: CategoryCardProps) {
  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-md)',
        backgroundColor: 'var(--color-bg-secondary)',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--space-lg)',
        cursor: onClick ? 'pointer' : 'default',
      }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: 'var(--radius-md)',
          backgroundColor: 'var(--color-bg-elevated)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--color-text-primary)',
        }}
      >
        {icon}
      </div>
      <div>
        <div style={{ fontSize: 17, fontWeight: 500, color: 'var(--color-text-primary)' }}>{label}</div>
        {count !== undefined && (
          <div style={{ fontSize: 15, color: 'var(--color-text-tertiary)' }}>x{count}</div>
        )}
      </div>
    </div>
  );
}

// ============================================================================
// CONTENT GRID CARD COMPONENT (image with badge)
// ============================================================================

interface ContentGridCardProps {
  imageUrl: string;
  icon: ReactNode;
  label: string;
  onClick?: () => void;
}

export function ContentGridCard({ imageUrl, icon, label, onClick }: ContentGridCardProps) {
  return (
    <div
      onClick={onClick}
      style={{
        position: 'relative',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        cursor: onClick ? 'pointer' : 'default',
        aspectRatio: '1',
      }}
    >
      <img
        src={imageUrl}
        alt={label}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 'var(--space-md)',
          left: 'var(--space-md)',
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-sm)',
          backgroundColor: 'var(--color-bg-secondary)',
          padding: 'var(--space-sm) var(--space-md)',
          borderRadius: 'var(--radius-full)',
          boxShadow: 'var(--shadow-md)',
        }}
      >
        <span style={{ color: 'var(--color-text-primary)' }}>{icon}</span>
        <span
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: 'var(--color-text-primary)',
            textTransform: 'uppercase',
            letterSpacing: 0.5,
          }}
        >
          {label}
        </span>
      </div>
    </div>
  );
}

// ============================================================================
// PAGE TITLE COMPONENT
// ============================================================================

interface PageTitleProps {
  children: ReactNode;
}

export function PageTitle({ children }: PageTitleProps) {
  return (
    <h1
      style={{
        fontSize: 34,
        fontWeight: 700,
        color: 'var(--color-text-primary)',
        letterSpacing: -0.5,
        marginBottom: 'var(--space-xl)',
      }}
    >
      {children}
    </h1>
  );
}

// ============================================================================
// SUBSECTION TITLE COMPONENT
// ============================================================================

interface SubsectionTitleProps {
  children: ReactNode;
}

export function SubsectionTitle({ children }: SubsectionTitleProps) {
  return (
    <h3
      style={{
        fontSize: 22,
        fontWeight: 700,
        color: 'var(--color-text-primary)',
        letterSpacing: -0.3,
        marginBottom: 'var(--space-md)',
      }}
    >
      {children}
    </h3>
  );
}

// ============================================================================
// LINE CHART / TREND CHART COMPONENT
// ============================================================================

interface TrendChartProps {
  data: number[];
  noiseData?: number[];
  yAxisLabels?: string[];
  xAxisLabels?: Array<{ label: string; subLabel?: string }>;
  height?: number;
  unit?: string;
  projectionStartIndex?: number;
}

export function TrendChart({
  data,
  noiseData,
  yAxisLabels = [],
  xAxisLabels = [],
  height = 300,
  unit = '',
  projectionStartIndex,
}: TrendChartProps) {
  const chartHeight = height - 50;
  const viewBoxWidth = 1000;
  const viewBoxHeight = 200;
  
  // Calculate bounds from data
  const allValues = [...data, ...(noiseData || [])];
  const minVal = Math.min(...allValues);
  const maxVal = Math.max(...allValues);
  const range = maxVal - minVal || 1;
  
  // Convert value to Y coordinate (inverted - higher values = lower Y)
  const getY = (val: number) => ((maxVal - val) / range) * viewBoxHeight;
  const getX = (index: number, total: number) => (index / (total - 1)) * viewBoxWidth;

  // Generate noise path
  const noisePath = noiseData
    ? noiseData.map((val, i) => `${i === 0 ? 'M' : 'L'}${getX(i, noiseData.length)},${getY(val)}`).join(' ')
    : '';

  // Generate main data path
  const mainPath = data.map((val, i) => `${i === 0 ? 'M' : 'L'}${getX(i, data.length)},${getY(val)}`).join(' ');
  
  // Projected path (from projectionStartIndex to end)
  const projectedPath = projectionStartIndex !== undefined && projectionStartIndex < data.length - 1
    ? data.slice(projectionStartIndex).map((val, i) => 
        `${i === 0 ? 'M' : 'L'}${getX(projectionStartIndex + i, data.length)},${getY(val)}`
      ).join(' ')
    : '';

  // Solid path (up to projectionStartIndex)
  const solidPath = projectionStartIndex !== undefined
    ? data.slice(0, projectionStartIndex + 1).map((val, i) => 
        `${i === 0 ? 'M' : 'L'}${getX(i, data.length)},${getY(val)}`
      ).join(' ')
    : mainPath;

  return (
    <div style={{ position: 'relative', height, paddingRight: 45 }}>
      {/* Y-axis labels */}
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 50,
          width: 40,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          fontSize: 12,
          color: 'var(--color-text-tertiary)',
        }}
      >
        {unit && <span>{unit}</span>}
        {yAxisLabels.map((label, i) => (
          <span key={i}>{label}</span>
        ))}
      </div>

      {/* Chart area */}
      <div style={{ position: 'relative', height: chartHeight }}>
        <svg
          width="100%"
          height="100%"
          viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
          preserveAspectRatio="none"
          style={{ display: 'block' }}
        >
          {/* Horizontal grid lines */}
          {yAxisLabels.map((_, i) => (
            <line
              key={i}
              x1="0"
              y1={(i / (yAxisLabels.length - 1)) * viewBoxHeight}
              x2={viewBoxWidth}
              y2={(i / (yAxisLabels.length - 1)) * viewBoxHeight}
              stroke="var(--color-border-subtle)"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
          ))}

          {/* Background noise data (gray zigzag) */}
          {noisePath && (
            <path
              d={noisePath}
              fill="none"
              stroke="var(--color-text-tertiary)"
              strokeWidth="1"
              opacity="0.4"
              vectorEffect="non-scaling-stroke"
            />
          )}

          {/* Main trend line (solid portion) */}
          <path
            d={solidPath}
            fill="none"
            stroke="var(--color-brand-accent)"
            strokeWidth="2.5"
            vectorEffect="non-scaling-stroke"
          />

          {/* Projected portion (dashed) */}
          {projectedPath && (
            <path
              d={projectedPath}
              fill="none"
              stroke="var(--color-brand-accent)"
              strokeWidth="2.5"
              strokeDasharray="6 6"
              vectorEffect="non-scaling-stroke"
            />
          )}
        </svg>

        {/* Data points as HTML elements for consistent sizing */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none' }}>
          {data.map((val, i) => {
            const isProjected = projectionStartIndex !== undefined && i > projectionStartIndex;
            return (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  left: `${(i / (data.length - 1)) * 100}%`,
                  top: `${(getY(val) / viewBoxHeight) * 100}%`,
                  width: 10,
                  height: 10,
                  backgroundColor: 'var(--color-bg-secondary)',
                  border: '2.5px solid var(--color-brand-accent)',
                  borderStyle: isProjected ? 'dashed' : 'solid',
                  borderRadius: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
            );
          })}
        </div>
      </div>

      {/* X-axis labels */}
      {xAxisLabels.length > 0 && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingTop: 'var(--space-md)',
          }}
        >
          {xAxisLabels.map((item, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 14, color: 'var(--color-text-primary)' }}>{item.label}</div>
              {item.subLabel && (
                <div
                  style={{
                    fontSize: 12,
                    color: item.subLabel.startsWith('+') ? 'var(--color-heart-text)' : 'var(--color-success-text)',
                  }}
                >
                  {item.subLabel}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ============================================================================
// TREND HEADER COMPONENT
// ============================================================================

interface TrendHeaderProps {
  value: string;
  isPositive?: boolean;
}

export function TrendHeader({ value, isPositive }: TrendHeaderProps) {
  return (
    <div style={{ marginBottom: 'var(--space-lg)' }}>
      <div
        style={{
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: 1,
          color: 'var(--color-text-secondary)',
          textTransform: 'uppercase',
          marginBottom: 'var(--space-xs)',
        }}
      >
        Trend
      </div>
      <div
        style={{
          fontSize: 28,
          fontWeight: 700,
          color: 'var(--color-text-primary)',
        }}
      >
        {value}
      </div>
    </div>
  );
}

// ============================================================================
// CHART MODAL HEADER COMPONENT
// ============================================================================

interface ChartModalHeaderProps {
  dateRange: string;
  onClose?: () => void;
}

export function ChartModalHeader({ dateRange, onClose }: ChartModalHeaderProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-lg)',
        marginBottom: 'var(--space-xl)',
      }}
    >
      <button
        onClick={onClose}
        style={{
          width: 44,
          height: 44,
          borderRadius: 'var(--radius-full)',
          backgroundColor: 'var(--color-bg-elevated)',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--color-text-primary)',
        }}
      >
        <X size={20} />
      </button>
      <span
        style={{
          fontSize: 17,
          fontWeight: 500,
          color: 'var(--color-text-primary)',
        }}
      >
        {dateRange}
      </span>
    </div>
  );
}

// ============================================================================
// AREA CHART COMPONENT (stepped gradient)
// ============================================================================

interface AreaChartProps {
  data: number[];
  height?: number;
  color?: string;
  showLastValue?: boolean;
  gradientId?: string;
}

export function AreaChart({ 
  data, 
  height = 140, 
  color = 'var(--color-brand-accent)', 
  showLastValue = true,
  gradientId = 'areaGradient'
}: AreaChartProps) {
  const viewBoxWidth = 1000;
  const viewBoxHeight = 100;
  
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;

  // Convert value to Y coordinate (inverted)
  const getY = (val: number) => ((max - val) / range) * viewBoxHeight;
  const getX = (index: number) => (index / (data.length - 1)) * viewBoxWidth;

  // Create stepped path for fill
  let fillPath = `M 0 ${viewBoxHeight}`;
  data.forEach((val, i) => {
    const x = getX(i);
    const y = getY(val);
    if (i === 0) {
      fillPath += ` L 0 ${y}`;
    } else {
      // Step: horizontal then vertical
      fillPath += ` L ${x} ${getY(data[i - 1])} L ${x} ${y}`;
    }
  });
  fillPath += ` L ${viewBoxWidth} ${getY(data[data.length - 1])} L ${viewBoxWidth} ${viewBoxHeight} Z`;

  // Create stepped path for line
  let linePath = '';
  data.forEach((val, i) => {
    const x = getX(i);
    const y = getY(val);
    if (i === 0) {
      linePath += `M ${x} ${y}`;
    } else {
      // Step: horizontal then vertical
      linePath += ` L ${x} ${getY(data[i - 1])} L ${x} ${y}`;
    }
  });

  const lastValueY = (getY(data[data.length - 1]) / viewBoxHeight) * 100;

  return (
    <div style={{ position: 'relative', height }}>
      <svg 
        width="100%" 
        height="100%" 
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        preserveAspectRatio="none"
        style={{ display: 'block' }}
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.25" />
            <stop offset="100%" stopColor={color} stopOpacity="0.02" />
          </linearGradient>
        </defs>
        <path d={fillPath} fill={`url(#${gradientId})`} />
        <path 
          d={linePath} 
          fill="none" 
          stroke={color} 
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      {showLastValue && (
        <div
          style={{
            position: 'absolute',
            right: 8,
            top: `${lastValueY}%`,
            transform: 'translateY(-50%)',
            backgroundColor: 'var(--color-bg-secondary)',
            borderRadius: 'var(--radius-sm)',
            padding: '2px 8px',
            fontSize: 12,
            color: 'var(--color-text-secondary)',
            border: '1px solid var(--color-border-subtle)',
          }}
        >
          {data[data.length - 1]}
        </div>
      )}
    </div>
  );
}

// ============================================================================
// CHALLENGE CARD COMPONENT
// ============================================================================

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

// ============================================================================
// EMPTY STATE CARD COMPONENT
// ============================================================================

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

// ============================================================================
// PROFILE INFO BUTTON COMPONENT
// ============================================================================

interface ProfileInfoButtonProps {
  text: string;
  onClick?: () => void;
}

export function ProfileInfoButton({ text, onClick }: ProfileInfoButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: 'var(--space-md) var(--space-lg)',
        backgroundColor: '#E8F4F8',
        border: 'none',
        borderRadius: 'var(--radius-lg)',
        cursor: 'pointer',
        fontSize: 17,
        fontWeight: 500,
        color: '#0891B2',
      }}
    >
      <span>{text}</span>
      <ChevronRight size={20} color="#0891B2" />
    </button>
  );
}

// ============================================================================
// PROMO CARD COMPONENT
// ============================================================================

interface PromoCardProps {
  badge?: ReactNode;
  title: string;
  description: string;
  linkText: string;
  onLinkClick?: () => void;
}

export function PromoCard({ badge, title, description, linkText, onLinkClick }: PromoCardProps) {
  return (
    <Card>
      <div style={{ padding: 'var(--space-lg)' }}>
        {badge && <div style={{ marginBottom: 'var(--space-md)' }}>{badge}</div>}
        <h3
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: 'var(--color-text-primary)',
            marginBottom: 'var(--space-sm)',
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: 15,
            color: 'var(--color-text-secondary)',
            lineHeight: 1.5,
            margin: 0,
          }}
        >
          {description}
        </p>
      </div>
      <div
        style={{
          borderTop: '1px solid var(--color-border-separator)',
          padding: 'var(--space-lg)',
        }}
      >
        <button
          onClick={onLinkClick}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
          }}
        >
          <span style={{ fontSize: 17, fontWeight: 500, color: 'var(--color-text-primary)' }}>
            {linkText}
          </span>
          <ChevronRight size={20} color="var(--color-text-tertiary)" />
        </button>
      </div>
    </Card>
  );
}

// ============================================================================
// FEATURE TOGGLE ROW COMPONENT
// ============================================================================

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

// ============================================================================
// PROFILE HEADER COMPONENT
// ============================================================================

interface ProfileHeaderProps {
  avatar: { initials: string; imageUrl?: string };
  name: string;
}

export function ProfileHeader({ avatar, name }: ProfileHeaderProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-xl)',
        padding: 'var(--space-xl)',
      }}
    >
      <div
        style={{
          width: 150,
          height: 150,
          borderRadius: 'var(--radius-full)',
          backgroundColor: 'var(--color-brand-primary)',
          color: 'var(--color-text-inverse)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 48,
          fontWeight: 700,
          textTransform: 'uppercase',
          overflow: 'hidden',
          flexShrink: 0,
        }}
      >
        {avatar.imageUrl ? (
          <img src={avatar.imageUrl} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          avatar.initials
        )}
      </div>
      <h1
        style={{
          fontSize: 34,
          fontWeight: 700,
          color: 'var(--color-text-primary)',
          margin: 0,
        }}
      >
        {name}
      </h1>
    </div>
  );
}

// ============================================================================
// PHONE FRAME COMPONENT
// ============================================================================

interface PhoneFrameProps {
  children: ReactNode;
  size?: 'sm' | 'md';
}

export function PhoneFrame({ children, size = 'md' }: PhoneFrameProps) {
  const sizes = {
    sm: { width: 280, height: 560, borderRadius: 32 },
    md: { width: 320, height: 640, borderRadius: 36 },
  };

  const s = sizes[size];

  return (
    <div
      style={{
        width: s.width,
        height: s.height,
        backgroundColor: 'var(--color-bg-primary)',
        borderRadius: s.borderRadius,
        overflow: 'hidden',
        position: 'relative',
        boxShadow: '0 0 0 10px #1a1a1a, 0 25px 50px rgba(0, 0, 0, 0.5)',
      }}
    >
      {/* Status Bar with Dynamic Island */}
      <div
        style={{
          height: 44,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          paddingBottom: 6,
        }}
      >
        <div
          style={{
            width: 100,
            height: 28,
            backgroundColor: '#000',
            borderRadius: 16,
          }}
        />
      </div>
      {/* Content */}
      <div style={{ height: 'calc(100% - 44px)', overflow: 'auto' }}>
        {children}
      </div>
    </div>
  );
}

// ============================================================================
// EXPORTS
// ============================================================================

export { styles as globalStyles };

export default {
  Avatar,
  Card,
  Button,
  SegmentedControl,
  Toggle,
  ProgressBar,
  NavHeader,
  InfoRow,
  SettingsItem,
  SettingsItemEditable,
  SettingsItemPlain,
  SelectionCard,
  DropdownSelect,
  AppointmentCard,
  FeatureCard,
  HeroCard,
  Badge,
  PartnerBadge,
  WPlusBadge,
  TabBar,
  ChatMessage,
  ChatDate,
  ChatInput,
  ChatDisclaimer,
  CircularProgress,
  MetricCard,
  SectionHeader,
  Modal,
  ModalHeader,
  DeviceCard,
  SettingsSectionCard,
  FAB,
  DiscoveryCard,
  DiscoveryCarousel,
  ProductThumbnail,
  FilledButton,
  DateNavigator,
  ListItem,
  NavigationHeader,
  ScreenHeader,
  MiniChart,
  BarChart,
  StatsCard,
  DeviceStatusIndicator,
  CategoryCard,
  ContentGridCard,
  PageTitle,
  SubsectionTitle,
  TrendChart,
  TrendHeader,
  ChartModalHeader,
  AreaChart,
  ChallengeCard,
  EmptyStateCard,
  ProfileInfoButton,
  PromoCard,
  FeatureToggleRow,
  ProfileHeader,
  PhoneFrame,
};
