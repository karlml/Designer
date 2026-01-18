import React from 'react';
import { ChevronRight, Clock, Video, Calendar } from 'lucide-react';
import { Avatar } from '../foundation';
import { Card } from '../layout';


interface AppointmentCardProps {
  doctorName: string;
  specialty: string;
  dateTime: string;
  type: 'video' | 'in-person';
  imageUrl?: string;
  showActions?: boolean;
  onClick?: () => void;
  onReschedule?: () => void;
  onJoin?: () => void;
}

export function AppointmentCard({ 
  doctorName, 
  specialty, 
  dateTime, 
  type,
  imageUrl,
  showActions = true,
  onClick,
  onReschedule,
  onJoin,
}: AppointmentCardProps) {
  return (
    <Card padding="lg">
      <div 
        onClick={onClick}
        style={{ 
          display: 'flex', 
          alignItems: 'flex-start', 
          gap: 'var(--space-md)',
          cursor: onClick ? 'pointer' : 'default',
        }}
      >
        {/* Doctor Avatar with type badge */}
        <div style={{ position: 'relative' }}>
          <Avatar initials={doctorName.split(' ').map(n => n[0]).join('')} size="lg" imageUrl={imageUrl} />
          <div
            style={{
              position: 'absolute',
              bottom: -4,
              right: -4,
              width: 28,
              height: 28,
              borderRadius: 'var(--radius-full)',
              backgroundColor: type === 'video' ? 'var(--color-sleep-bg)' : 'var(--color-success-bg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '3px solid var(--color-bg-secondary)',
            }}
          >
            {type === 'video' ? (
              <Video size={14} color="var(--color-sleep-text)" />
            ) : (
              <Calendar size={14} color="var(--color-success-text)" />
            )}
          </div>
        </div>

        {/* Content */}
        <div style={{ flex: 1 }}>
          <div style={{ 
            fontSize: 11, 
            fontWeight: 600, 
            color: 'var(--color-brand-accent)', 
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            marginBottom: 'var(--space-xs)',
          }}>
            Upcoming Appointment
          </div>
          <div style={{ 
            fontSize: 18, 
            fontWeight: 600, 
            color: 'var(--color-text-primary)',
            marginBottom: 2,
          }}>
            {doctorName}
          </div>
          <div style={{ 
            fontSize: 14, 
            color: 'var(--color-text-secondary)',
            marginBottom: 'var(--space-md)',
          }}>
            {specialty}
          </div>
          
          {/* Date/Time - Clean inline text */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
              <Clock size={14} color="var(--color-text-tertiary)" style={{ flexShrink: 0 }} />
              <span style={{ fontSize: 13, color: 'var(--color-text-secondary)', whiteSpace: 'nowrap' }}>
                {dateTime}
              </span>
            </div>
            <span style={{ 
              fontSize: 13, 
              color: type === 'video' ? 'var(--color-sleep-text)' : 'var(--color-success-text)',
              fontWeight: 500,
              whiteSpace: 'nowrap',
            }}>
              · {type === 'video' ? 'Video' : 'In Person'}
            </span>
          </div>
        </div>

        {/* Chevron */}
        <ChevronRight size={20} color="var(--color-text-tertiary)" />
      </div>

      {/* Action Buttons */}
      {showActions && (
        <div 
          style={{ 
            display: 'flex', 
            gap: 'var(--space-md)', 
            marginTop: 'var(--space-lg)',
            paddingTop: 'var(--space-lg)',
            borderTop: '1px solid var(--color-border-separator)',
          }}
        >
          <button
            onClick={onReschedule}
            style={{
              flex: 1,
              height: 44,
              backgroundColor: 'var(--color-bg-elevated)',
              color: 'var(--color-text-primary)',
              border: 'none',
              borderRadius: 'var(--radius-full)',
              fontSize: 15,
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}
          >
            Reschedule
          </button>
          <button
            onClick={onJoin}
            style={{
              flex: 1,
              height: 44,
              backgroundColor: 'var(--color-brand-primary)',
              color: 'var(--color-text-inverse)',
              border: 'none',
              borderRadius: 'var(--radius-full)',
              fontSize: 15,
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}
          >
            {type === 'video' ? 'Join Call' : 'View Details'}
          </button>
        </div>
      )}
    </Card>
  );
}
