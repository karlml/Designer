import React, { ReactNode } from 'react';


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
