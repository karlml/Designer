/**
 * Inbox Page - Full Page View
 * A comprehensive messaging hub showing appointments, coach messages, 
 * health notifications, and system alerts
 */

import { useState } from 'react';
import {
  Card,
  NavHeader,
  TabBar,
  SegmentedControl,
  SectionHeader,
  Badge,
  Avatar,
  NotificationItem,
  FilledButton,
  globalStyles,
} from './components';

import {
  Home,
  Heart,
  Activity,
  User,
  Mail,
  Calendar,
  MessageCircle,
  Bell,
  Sparkles,
  AlertCircle,
  ChevronRight,
  Watch,
  Settings,
  TrendingUp,
  Award,
  Pill,
  Clock,
  Video,
  Check,
  Filter,
} from 'lucide-react';

// iOS Status Bar Component
function IOSStatusBar() {
  const now = new Date();
  const timeString = now.toLocaleTimeString('en-US', { 
    hour: 'numeric', 
    minute: '2-digit',
    hour12: true 
  });

  return (
    <div
      style={{
        height: 54,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 var(--space-xl)',
        backgroundColor: 'var(--color-bg-primary)',
      }}
    >
      {/* Time */}
      <span style={{ fontSize: 15, fontWeight: 600, color: 'var(--color-text-primary)' }}>
        {timeString.replace(' ', '')}
      </span>
      
      {/* Dynamic Island */}
      <div
        style={{
          width: 126,
          height: 37,
          backgroundColor: '#000',
          borderRadius: 20,
        }}
      />
      
      {/* Status Icons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xs)' }}>
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
          <path d="M1 4.5C1 3.67 1.67 3 2.5 3H3.5C4.33 3 5 3.67 5 4.5V10.5C5 11.33 4.33 12 3.5 12H2.5C1.67 12 1 11.33 1 10.5V4.5Z" fill="var(--color-text-primary)"/>
          <path d="M6 3C6 2.17 6.67 1.5 7.5 1.5H8.5C9.33 1.5 10 2.17 10 3V10.5C10 11.33 9.33 12 8.5 12H7.5C6.67 12 6 11.33 6 10.5V3Z" fill="var(--color-text-primary)"/>
          <path d="M11 1.5C11 0.67 11.67 0 12.5 0H13.5C14.33 0 15 0.67 15 1.5V10.5C15 11.33 14.33 12 13.5 12H12.5C11.67 12 11 11.33 11 10.5V1.5Z" fill="var(--color-text-primary)"/>
        </svg>
        <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M8.5 2.4C5.36 2.4 2.61 3.79 1 6C2.61 8.21 5.36 9.6 8.5 9.6C11.64 9.6 14.39 8.21 16 6C14.39 3.79 11.64 2.4 8.5 2.4Z" stroke="var(--color-text-primary)" strokeWidth="1.2"/>
        </svg>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 2,
          backgroundColor: 'var(--color-text-primary)',
          padding: '2px 4px',
          borderRadius: 3,
        }}>
          <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--color-bg-primary)' }}>87</span>
          <svg width="8" height="12" viewBox="0 0 8 12" fill="var(--color-bg-primary)">
            <rect x="0" y="0" width="6" height="12" rx="1" fill="var(--color-bg-primary)"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

// Custom Inbox Header with actions
function InboxHeader() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 56,
        padding: '0 var(--space-xl)',
        backgroundColor: 'var(--color-bg-primary)',
      }}
    >
      <h1 style={{ 
        fontSize: 34, 
        fontWeight: 700, 
        color: 'var(--color-text-primary)',
        letterSpacing: -0.5,
      }}>
        Inbox
      </h1>
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
        {/* Filter button */}
        <button
          style={{
            width: 40,
            height: 40,
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'var(--color-bg-elevated)',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-text-secondary)',
          }}
        >
          <Filter size={20} />
        </button>
        {/* Mark all read */}
        <button
          style={{
            width: 40,
            height: 40,
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'var(--color-bg-elevated)',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-text-secondary)',
          }}
        >
          <Check size={20} />
        </button>
      </div>
    </div>
  );
}

// Appointment Reminder Card - Special promoted card
function AppointmentReminderCard({ 
  doctorName, 
  specialty, 
  dateTime, 
  type,
  imageUrl 
}: { 
  doctorName: string; 
  specialty: string; 
  dateTime: string; 
  type: 'video' | 'in-person';
  imageUrl?: string;
}) {
  return (
    <Card padding="lg">
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-md)' }}>
        {/* Doctor Avatar */}
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
          
          {/* Date/Time Badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-xs)',
                padding: '6px 12px',
                backgroundColor: 'var(--color-bg-elevated)',
                borderRadius: 'var(--radius-full)',
              }}
            >
              <Clock size={14} color="var(--color-text-secondary)" />
              <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--color-text-primary)' }}>
                {dateTime}
              </span>
            </div>
            <Badge variant={type === 'video' ? 'sleep' : 'success'}>
              {type === 'video' ? 'Video Call' : 'In Person'}
            </Badge>
          </div>
        </div>

        {/* Chevron */}
        <ChevronRight size={20} color="var(--color-text-tertiary)" />
      </div>

      {/* Action Buttons */}
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
    </Card>
  );
}

// Message Thread Preview
function MessageThreadItem({
  senderName,
  senderInitials,
  senderImage,
  preview,
  timestamp,
  unreadCount,
  isCoach,
}: {
  senderName: string;
  senderInitials: string;
  senderImage?: string;
  preview: string;
  timestamp: string;
  unreadCount?: number;
  isCoach?: boolean;
}) {
  const isUnread = unreadCount && unreadCount > 0;
  
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-md)',
        padding: 'var(--space-lg)',
        backgroundColor: isUnread ? 'rgba(74, 108, 247, 0.06)' : 'transparent',
        borderRadius: 'var(--radius-lg)',
        cursor: 'pointer',
        transition: 'background-color 150ms ease',
      }}
    >
      {/* Avatar with coach badge */}
      <div style={{ position: 'relative', flexShrink: 0 }}>
        <Avatar initials={senderInitials} imageUrl={senderImage} size="md" />
        {isCoach && (
          <div
            style={{
              position: 'absolute',
              bottom: -2,
              right: -2,
              width: 18,
              height: 18,
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'var(--color-activity-bg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid var(--color-bg-primary)',
            }}
          >
            <Sparkles size={10} color="var(--color-activity-text)" />
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
          <span
            style={{
              fontSize: 17,
              fontWeight: isUnread ? 700 : 500,
              color: 'var(--color-text-primary)',
            }}
          >
            {senderName}
          </span>
          {isCoach && (
            <span
              style={{
                fontSize: 10,
                fontWeight: 600,
                color: 'var(--color-activity-text)',
                backgroundColor: 'var(--color-activity-bg)',
                padding: '2px 6px',
                borderRadius: 'var(--radius-full)',
                textTransform: 'uppercase',
                letterSpacing: '0.3px',
              }}
            >
              Coach
            </span>
          )}
        </div>
        <div
          style={{
            fontSize: 15,
            color: isUnread ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
            fontWeight: isUnread ? 500 : 400,
            marginTop: 2,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {preview}
        </div>
      </div>

      {/* Right side */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: 'var(--space-xs)',
          flexShrink: 0,
        }}
      >
        <span
          style={{
            fontSize: 13,
            color: isUnread ? 'var(--color-brand-accent)' : 'var(--color-text-tertiary)',
            fontWeight: isUnread ? 600 : 400,
          }}
        >
          {timestamp}
        </span>
        {unreadCount && unreadCount > 0 && (
          <span
            style={{
              minWidth: 20,
              height: 20,
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'var(--color-brand-accent)',
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

      <ChevronRight size={20} color="var(--color-text-tertiary)" />
    </div>
  );
}

// System Notification Item
function SystemNotificationItem({
  icon,
  iconBgColor,
  iconColor,
  title,
  message,
  timestamp,
  isUnread,
  actionLabel,
}: {
  icon: React.ReactNode;
  iconBgColor: string;
  iconColor: string;
  title: string;
  message: string;
  timestamp: string;
  isUnread?: boolean;
  actionLabel?: string;
}) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 'var(--space-md)',
        padding: 'var(--space-lg)',
        backgroundColor: isUnread ? 'var(--color-bg-secondary)' : 'transparent',
        borderRadius: isUnread ? 'var(--radius-lg)' : 0,
        cursor: 'pointer',
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: 'var(--radius-md)',
          backgroundColor: iconBgColor,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        {icon}
      </div>

      {/* Content */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
          {isUnread && (
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--color-brand-accent)',
                flexShrink: 0,
              }}
            />
          )}
          <span
            style={{
              fontSize: 17,
              fontWeight: isUnread ? 700 : 600,
              color: 'var(--color-text-primary)',
            }}
          >
            {title}
          </span>
        </div>
        <div
          style={{
            fontSize: 15,
            color: 'var(--color-text-secondary)',
            marginTop: 4,
            lineHeight: 1.4,
          }}
        >
          {message}
        </div>
        {actionLabel && (
          <button
            style={{
              marginTop: 'var(--space-md)',
              padding: '8px 16px',
              backgroundColor: 'var(--color-bg-elevated)',
              color: 'var(--color-text-primary)',
              border: 'none',
              borderRadius: 'var(--radius-full)',
              fontSize: 14,
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}
          >
            {actionLabel}
          </button>
        )}
      </div>

      {/* Timestamp */}
      <span
        style={{
          fontSize: 13,
          color: 'var(--color-text-tertiary)',
          flexShrink: 0,
        }}
      >
        {timestamp}
      </span>
    </div>
  );
}

// Health Alert Card
function HealthAlertCard({
  title,
  message,
  severity,
}: {
  title: string;
  message: string;
  severity: 'warning' | 'info' | 'success';
}) {
  const colors = {
    warning: { bg: 'var(--color-heart-bg)', text: 'var(--color-heart-text)', icon: AlertCircle },
    info: { bg: 'var(--color-sleep-bg)', text: 'var(--color-sleep-text)', icon: Bell },
    success: { bg: 'var(--color-success-bg)', text: 'var(--color-success-text)', icon: TrendingUp },
  };

  const Icon = colors[severity].icon;

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 'var(--space-md)',
        padding: 'var(--space-lg)',
        backgroundColor: colors[severity].bg,
        borderRadius: 'var(--radius-lg)',
      }}
    >
      <Icon size={20} color={colors[severity].text} style={{ flexShrink: 0, marginTop: 2 }} />
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 15, fontWeight: 600, color: colors[severity].text, marginBottom: 2 }}>
          {title}
        </div>
        <div style={{ fontSize: 14, color: colors[severity].text, opacity: 0.85, lineHeight: 1.4 }}>
          {message}
        </div>
      </div>
      <ChevronRight size={18} color={colors[severity].text} style={{ opacity: 0.6, flexShrink: 0 }} />
    </div>
  );
}

// Filter Pills Component
function FilterPills({ 
  options, 
  selected, 
  onChange 
}: { 
  options: { id: string; label: string; count?: number }[]; 
  selected: string; 
  onChange: (id: string) => void;
}) {
  return (
    <div
      style={{
        display: 'flex',
        gap: 'var(--space-sm)',
        overflowX: 'auto',
        padding: '0 var(--space-xl)',
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
    >
      {options.map((option) => {
        const isSelected = option.id === selected;
        return (
          <button
            key={option.id}
            onClick={() => onChange(option.id)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-xs)',
              padding: '10px 16px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: isSelected ? 'var(--color-brand-primary)' : 'var(--color-bg-secondary)',
              border: isSelected ? 'none' : '1px solid var(--color-border-subtle)',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 150ms ease',
            }}
          >
            <span
              style={{
                fontSize: 14,
                fontWeight: isSelected ? 600 : 500,
                color: isSelected ? 'var(--color-text-inverse)' : 'var(--color-text-primary)',
              }}
            >
              {option.label}
            </span>
            {option.count !== undefined && option.count > 0 && (
              <span
                style={{
                  minWidth: 18,
                  height: 18,
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: isSelected ? 'rgba(255,255,255,0.25)' : 'var(--color-brand-accent)',
                  color: isSelected ? 'var(--color-text-inverse)' : 'var(--color-text-inverse)',
                  fontSize: 11,
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0 5px',
                }}
              >
                {option.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

export function InboxPage() {
  const [activeTab, setActiveTab] = useState('inbox');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const tabItems = [
    { id: 'home', label: 'Home', icon: <Home size={24} /> },
    { id: 'health', label: 'Health', icon: <Heart size={24} /> },
    { id: 'inbox', label: 'Inbox', icon: <Mail size={24} />, badge: 5 },
    { id: 'profile', label: 'Profile', icon: <User size={24} /> },
  ];

  const filterOptions = [
    { id: 'all', label: 'All', count: 5 },
    { id: 'messages', label: 'Messages', count: 2 },
    { id: 'appointments', label: 'Appointments', count: 1 },
    { id: 'notifications', label: 'Alerts', count: 2 },
    { id: 'tips', label: 'Tips' },
  ];

  return (
    <>
      <style>{globalStyles}</style>
      <div
        style={{
          maxWidth: 430,
          margin: '0 auto',
          backgroundColor: 'var(--color-bg-primary)',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
        }}
      >
        {/* iOS Status Bar */}
        <IOSStatusBar />

        {/* Inbox Header */}
        <InboxHeader />

        {/* Filter Pills */}
        <div style={{ paddingTop: 'var(--space-md)', paddingBottom: 'var(--space-lg)' }}>
          <FilterPills
            options={filterOptions}
            selected={selectedFilter}
            onChange={setSelectedFilter}
          />
        </div>

        {/* Scrollable Content Area */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            paddingBottom: 100,
          }}
        >
          {/* Pinned Appointment */}
          <div style={{ padding: '0 var(--space-xl) var(--space-lg)' }}>
            <AppointmentReminderCard
              doctorName="Dr. Sarah Chen"
              specialty="Cardiologist • Heart Health Checkup"
              dateTime="Tomorrow, 10:30 AM"
              type="video"
              imageUrl="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face"
            />
          </div>

          {/* Health Alert */}
          <div style={{ padding: '0 var(--space-xl) var(--space-lg)' }}>
            <HealthAlertCard
              title="Blood Pressure Trend"
              message="Your readings have been elevated this week. Consider reviewing with your doctor."
              severity="warning"
            />
          </div>

          {/* Messages Section */}
          <div style={{ padding: '0 var(--space-xl)' }}>
            <SectionHeader title="Messages" badge="2 new" />
          </div>

          <div style={{ padding: '0 var(--space-md)' }}>
            <MessageThreadItem
              senderName="Coach Marcus"
              senderInitials="CM"
              senderImage="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
              preview="Great progress this week! Let's talk about your sleep patterns..."
              timestamp="2h"
              unreadCount={2}
              isCoach
            />
            
            <MessageThreadItem
              senderName="Dr. Sarah Chen"
              senderInitials="SC"
              senderImage="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face"
              preview="Your recent lab results look good. I've added some notes..."
              timestamp="Yesterday"
              isCoach={false}
            />

            <MessageThreadItem
              senderName="Abel Support"
              senderInitials="AS"
              preview="Thank you for your feedback! We've implemented the changes..."
              timestamp="2 days"
              isCoach={false}
            />
          </div>

          {/* Notifications Section */}
          <div style={{ padding: 'var(--space-xl) var(--space-xl) 0' }}>
            <SectionHeader title="Notifications" />
          </div>

          <div style={{ padding: '0 var(--space-md)' }}>
            <SystemNotificationItem
              icon={<TrendingUp size={20} color="var(--color-success-text)" />}
              iconBgColor="var(--color-success-bg)"
              iconColor="var(--color-success-text)"
              title="Weekly Health Score"
              message="Your health score improved by 3 points! You're now at 78."
              timestamp="3h"
              isUnread
              actionLabel="View Report"
            />

            <SystemNotificationItem
              icon={<Watch size={20} color="var(--color-sleep-text)" />}
              iconBgColor="var(--color-sleep-bg)"
              iconColor="var(--color-sleep-text)"
              title="Device Synced"
              message="Your ScanWatch successfully synced 7 days of data."
              timestamp="5h"
            />

            <SystemNotificationItem
              icon={<Pill size={20} color="var(--color-body-text)" />}
              iconBgColor="var(--color-body-bg)"
              iconColor="var(--color-body-text)"
              title="Medication Reminder"
              message="Don't forget to take your evening supplements."
              timestamp="8h"
            />

            <SystemNotificationItem
              icon={<Award size={20} color="var(--color-activity-text)" />}
              iconBgColor="var(--color-activity-bg)"
              iconColor="var(--color-activity-text)"
              title="Achievement Unlocked"
              message="30-Day Activity Streak! You've been consistently active for a month."
              timestamp="1d"
              actionLabel="Share"
            />
          </div>

          {/* Tips Section */}
          <div style={{ padding: 'var(--space-xl)' }}>
            <SectionHeader title="Health Tips" action={<span style={{ fontSize: 14, color: 'var(--color-brand-accent)', fontWeight: 600, cursor: 'pointer' }}>See All</span>} />
            
            <Card>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-md)' }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--color-activity-bg)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Sparkles size={24} color="var(--color-activity-text)" />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: 16, fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: 'var(--space-xs)' }}>
                    Boost Your Morning Routine
                  </h3>
                  <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    Try starting your day with 10 minutes of light stretching. Studies show it can improve energy levels by up to 25%.
                  </p>
                  <div style={{ marginTop: 'var(--space-md)', display: 'flex', gap: 'var(--space-sm)' }}>
                    <Badge variant="activity">Wellness</Badge>
                    <Badge variant="default">3 min read</Badge>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Bottom padding for scroll */}
          <div style={{ height: 'var(--space-3xl)' }} />
        </div>

        {/* Bottom Tab Bar - Fixed */}
        <div
          style={{
            position: 'fixed',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50)',
            width: '100%',
            maxWidth: 430,
            zIndex: 100,
          }}
        >
          <TabBar
            items={tabItems}
            activeId={activeTab}
            onChange={setActiveTab}
          />
        </div>
      </div>
    </>
  );
}

export default InboxPage;
