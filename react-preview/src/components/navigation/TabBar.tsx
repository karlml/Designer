import React, { ReactNode } from 'react';
import { Home, Dumbbell, Stethoscope, Bell, User, ShoppingBag } from 'lucide-react';

export type TabId = 'home' | 'coach' | 'clinic' | 'inbox' | 'shop' | 'profile';

export interface TabItem {
  id: TabId;
  label: string;
  icon: ReactNode;
  badge?: number;
}

// Standard app tabs - use these everywhere for consistency
export const standardTabItems: TabItem[] = [
  { id: 'home', label: 'Home', icon: <Home size={24} /> },
  { id: 'coach', label: 'Coach', icon: <Dumbbell size={24} /> },
  { id: 'clinic', label: 'Clinic', icon: <Stethoscope size={24} /> },
  { id: 'shop', label: 'Shop', icon: <ShoppingBag size={24} /> },
  { id: 'inbox', label: 'Inbox', icon: <Bell size={24} /> },
  { id: 'profile', label: 'Profile', icon: <User size={24} /> },
];

interface TabBarProps {
  activeId: TabId;
  onChange: (id: TabId) => void;
  /** Optional custom items - defaults to standardTabItems */
  items?: TabItem[];
  /** Optional badge counts by tab id */
  badges?: Partial<Record<TabId, number>>;
}

export function TabBar({ activeId, onChange, items = standardTabItems, badges }: TabBarProps) {
  // Merge badges into items
  const itemsWithBadges = items.map(item => ({
    ...item,
    badge: badges?.[item.id] ?? item.badge,
  }));

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        width: '100%',
        height: 83,
        flexShrink: 0,
        backgroundColor: 'var(--color-bg-elevated)',
        borderRadius: 'var(--radius-2xl) var(--radius-2xl) 0 0',
        padding: 'var(--space-md) var(--space-lg) 0',
        boxSizing: 'border-box',
      }}
    >
      {itemsWithBadges.map((item) => {
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
              padding: 'var(--space-sm) var(--space-md)',
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
