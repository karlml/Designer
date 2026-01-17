import React from 'react';


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
