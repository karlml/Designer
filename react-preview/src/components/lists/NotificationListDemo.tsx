import React from 'react';
import { NotificationList } from './NotificationList';
import type { NotificationData } from './NotificationList';
import { Smile } from 'lucide-react';

// Demo data for messages
const messageItems: NotificationData[] = [
  {
    id: '1',
    type: 'message',
    avatar: { initials: 'JW', imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' },
    title: 'Jenny Wilson',
    subtitle: 'Poli General Practitioners',
    timestamp: '09:46 AM',
  },
  {
    id: '2',
    type: 'message',
    avatar: { initials: 'JJ', imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop' },
    title: 'Jacob Jones',
    subtitle: 'Poli Dermatologi',
    timestamp: '09:46 AM',
    unreadCount: 1,
    isUnread: true,
  },
  {
    id: '3',
    type: 'message',
    avatar: { initials: 'JW', imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop' },
    title: 'Jenny Wilson',
    subtitle: 'Poli Cardiology',
    timestamp: '08:46 AM',
  },
  {
    id: '4',
    type: 'message',
    avatar: { initials: 'JW', imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop' },
    title: 'Jenny Wilson',
    subtitle: 'Poli Dermatologi',
    timestamp: '08:36 AM',
  },
  {
    id: '5',
    type: 'message',
    avatar: { initials: 'JW', imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop' },
    title: 'Jenny Wilson',
    subtitle: 'Poli General Practitioners',
    timestamp: '07:46 AM',
    unreadCount: 2,
    isUnread: true,
  },
];

// Demo data for notifications
const notificationItems: NotificationData[] = [
  {
    id: '1',
    type: 'notification',
    avatar: { initials: 'SL', imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop' },
    title: 'New counselor request',
    subtitle: 'Simon Laugsand requested to be your counselor',
    timestamp: '1d',
    indicatorColor: '#A855F7',
    isUnread: true,
    actionButton: (
      <button
        style={{
          width: 40,
          height: 40,
          borderRadius: 'var(--radius-md)',
          backgroundColor: 'var(--color-bg-elevated)',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
      >
        <Smile size={20} color="var(--color-text-secondary)" />
      </button>
    ),
  },
  {
    id: '2',
    type: 'notification',
    avatar: { initials: 'AB' },
    title: 'Appointment reminder',
    subtitle: 'Your appointment with Dr. Smith is tomorrow at 10:00 AM',
    timestamp: '2h',
    indicatorColor: '#4A6CF7',
    isUnread: true,
  },
  {
    id: '3',
    type: 'notification',
    avatar: { initials: 'HS' },
    title: 'Health goal achieved',
    subtitle: 'Congratulations! You reached your daily step goal',
    timestamp: '1d',
    indicatorColor: '#4CAF50',
  },
];

// Demo data for appointments
const appointmentItems: NotificationData[] = [
  {
    id: '1',
    type: 'appointment',
    avatar: { initials: 'JS', imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop' },
    title: '10:30 AM',
    subtitle: 'Dr. Jane Smith - General Practitioner',
    timestamp: 'Today',
  },
  {
    id: '2',
    type: 'appointment',
    avatar: { initials: 'MJ', imageUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop' },
    title: '2:00 PM',
    subtitle: 'Dr. Michael Johnson - Cardiologist',
    timestamp: 'Tomorrow',
  },
  {
    id: '3',
    type: 'appointment',
    avatar: { initials: 'EC' },
    title: '9:00 AM',
    subtitle: 'Dr. Emily Chen - Dermatologist',
    timestamp: 'Jan 20',
  },
];

// Combined mixed list
const mixedItems: NotificationData[] = [
  {
    id: '1',
    type: 'notification',
    avatar: { initials: 'SL', imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop' },
    title: 'New counselor request',
    subtitle: 'Simon Laugsand requested to be your counselor',
    timestamp: '1d',
    indicatorColor: '#A855F7',
    isUnread: true,
  },
  {
    id: '2',
    type: 'message',
    avatar: { initials: 'JJ', imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop' },
    title: 'Jacob Jones',
    subtitle: 'Hva passer best? Søndag...',
    timestamp: '10hrs',
    unreadCount: 1,
    isUnread: true,
  },
  {
    id: '3',
    type: 'appointment',
    avatar: { initials: 'JS', imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop' },
    title: '10:30 AM',
    subtitle: 'Dr. Jane Smith - Checkup',
    timestamp: 'Today',
  },
  {
    id: '4',
    type: 'notification',
    avatar: { initials: 'HS' },
    title: 'Health goal achieved',
    subtitle: 'You reached 10,000 steps today!',
    timestamp: '2d',
    indicatorColor: '#4CAF50',
  },
];

export function NotificationListDemo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3xl)' }}>
      {/* Messages Section */}
      <section>
        <h3
          style={{
            fontSize: 22,
            fontWeight: 700,
            marginBottom: 'var(--space-lg)',
            color: 'var(--color-text-primary)',
          }}
        >
          Messages
        </h3>
        <NotificationList items={messageItems} />
      </section>

      {/* Notifications Section */}
      <section>
        <h3
          style={{
            fontSize: 22,
            fontWeight: 700,
            marginBottom: 'var(--space-lg)',
            color: 'var(--color-text-primary)',
          }}
        >
          Notifications
        </h3>
        <NotificationList items={notificationItems} />
      </section>

      {/* Appointments Section */}
      <section>
        <h3
          style={{
            fontSize: 22,
            fontWeight: 700,
            marginBottom: 'var(--space-lg)',
            color: 'var(--color-text-primary)',
          }}
        >
          Upcoming Appointments
        </h3>
        <NotificationList items={appointmentItems} />
      </section>

      {/* Mixed Activity Feed */}
      <section>
        <h3
          style={{
            fontSize: 22,
            fontWeight: 700,
            marginBottom: 'var(--space-lg)',
            color: 'var(--color-text-primary)',
          }}
        >
          Activity Feed
        </h3>
        <NotificationList items={mixedItems} />
      </section>
    </div>
  );
}
