import React from 'react';


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
