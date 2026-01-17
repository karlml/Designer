import React, { ReactNode } from 'react';


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
