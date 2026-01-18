import React, { ReactNode } from 'react';
import { NotificationItem } from './NotificationItem';
import type { NotificationItemType } from './NotificationItem';

export interface NotificationData {
  id: string;
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
  onClick?: () => void;
}

interface NotificationListProps {
  items: NotificationData[];
  showDividers?: boolean;
  header?: ReactNode;
  emptyState?: ReactNode;
}

export function NotificationList({
  items,
  showDividers = true,
  header,
  emptyState,
}: NotificationListProps) {
  if (items.length === 0 && emptyState) {
    return <>{emptyState}</>;
  }

  return (
    <div
      style={{
        backgroundColor: 'var(--color-bg-secondary)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
      }}
    >
      {header && (
        <div
          style={{
            padding: 'var(--space-lg)',
            borderBottom: showDividers ? '1px solid var(--color-border-separator)' : 'none',
          }}
        >
          {header}
        </div>
      )}
      {items.map((item, index) => (
        <div key={item.id}>
          <NotificationItem
            type={item.type}
            avatar={item.avatar}
            title={item.title}
            subtitle={item.subtitle}
            timestamp={item.timestamp}
            unreadCount={item.unreadCount}
            isUnread={item.isUnread}
            indicatorColor={item.indicatorColor}
            actionButton={item.actionButton}
            onClick={item.onClick}
          />
          {showDividers && index < items.length - 1 && (
            <div
              style={{
                height: 1,
                backgroundColor: 'var(--color-border-separator)',
                marginLeft: 72, // Avatar width (44) + gap (12) + padding (16)
                marginRight: 'var(--space-lg)',
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
