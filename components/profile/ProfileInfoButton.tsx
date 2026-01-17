import React from 'react';
import { ChevronRight } from 'lucide-react';


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
