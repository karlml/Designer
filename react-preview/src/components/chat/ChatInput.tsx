import React from 'react';


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
