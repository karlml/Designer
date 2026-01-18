import React, { ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';
import { Avatar } from '../foundation/Avatar';

export type NotificationItemType = 'message' | 'appointment' | 'notification';

interface NotificationItemProps {
  type: NotificationItemType;
  avatar: {
    initials: string;
    imageUrl?: string;
  };
  title: string;
  subtitle?: string;
  timestamp?: string;
  unreadCount?: number;
  isUnread?: boolean;
  indicatorColor?: string;
  actionButton?: ReactNode;
  showChevron?: boolean;
  onClick?: () => void;
}

export function NotificationItem({
  type,
  avatar,
  title,
  subtitle,
  timestamp,
  unreadCount,
  isUnread = false,
  indicatorColor,
  actionButton,
  showChevron = true,
  onClick,
}: NotificationItemProps) {
  const isHighlighted = isUnread || (unreadCount && unreadCount > 0);

  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-md)',
        padding: 'var(--space-lg)',
        backgroundColor: isHighlighted ? 'var(--color-bg-secondary)' : 'transparent',
        borderRadius: isHighlighted ? 'var(--radius-lg)' : 0,
        cursor: onClick ? 'pointer' : 'default',
        transition: 'background-color 150ms ease',
      }}
    >
      {/* Avatar */}
      <div style={{ position: 'relative', flexShrink: 0 }}>
        <Avatar initials={avatar.initials} imageUrl={avatar.imageUrl} size="md" />
      </div>

      {/* Content */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
          {/* Indicator dot for notifications */}
          {type === 'notification' && indicatorColor && (
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: 'var(--radius-full)',
                backgroundColor: indicatorColor,
                flexShrink: 0,
              }}
            />
          )}
          <span
            style={{
              fontSize: 17,
              fontWeight: isHighlighted ? 700 : 600,
              color: type === 'appointment' ? 'var(--color-brand-primary)' : 'var(--color-text-primary)',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {title}
          </span>
        </div>
        {subtitle && (
          <div
            style={{
              fontSize: 15,
              color: 'var(--color-text-secondary)',
              marginTop: 2,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {subtitle}
          </div>
        )}
        {/* Action button for notifications */}
        {actionButton && <div style={{ marginTop: 'var(--space-sm)' }}>{actionButton}</div>}
      </div>

      {/* Right side: timestamp and indicators */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: 'var(--space-xs)',
          flexShrink: 0,
        }}
      >
        {timestamp && (
          <span
            style={{
              fontSize: 13,
              color: 'var(--color-text-tertiary)',
              whiteSpace: 'nowrap',
            }}
          >
            {timestamp}
          </span>
        )}
        {unreadCount && unreadCount > 0 && (
          <span
            style={{
              minWidth: 20,
              height: 20,
              borderRadius: 'var(--radius-full)',
              backgroundColor: '#E53935',
              color: 'var(--color-text-inverse)',
              fontSize: 12,
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0 6px',
            }}
          >
            {unreadCount}
          </span>
        )}
      </div>

      {/* Chevron */}
      {showChevron && !actionButton && <ChevronRight size={20} color="var(--color-text-tertiary)" />}
    </div>
  );
}
