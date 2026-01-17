import React from 'react';
import { ChevronRight } from 'lucide-react';


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
