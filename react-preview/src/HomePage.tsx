/**
 * Home Page - Full Home View
 * A comprehensive home dashboard showing personalized greeting,
 * quick actions, health insights, activity rings, device setup,
 * and activity stream.
 */

import { useState } from 'react';
import {
  Card,
  TabBar,
  Badge,
  Avatar,
  StatusBar,
  globalStyles,
} from './components';
import type { TabId } from './components';

import {
  Mail,
  Calendar,
  Bell,
  Sparkles,
  AlertCircle,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Watch,
  TrendingUp,
  Award,
  Pill,
  Clock,
  Video,
  Sun,
  Moon as MoonIcon,
  CloudSun,
  Heart,
  Footprints,
  Activity,
  Zap,
  Link2,
  Scale,
  Circle,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

// ============================================
// GREETING HEADER WITH TIME-BASED MESSAGE
// ============================================
function getGreeting(): { text: string; icon: React.ReactNode } {
  const hour = new Date().getHours();
  if (hour < 12) return { text: 'Good morning', icon: <Sun size={20} color="var(--color-activity-text)" /> };
  if (hour < 17) return { text: 'Good afternoon', icon: <CloudSun size={20} color="var(--color-activity-text)" /> };
  return { text: 'Good evening', icon: <MoonIcon size={20} color="var(--color-sleep-text)" /> };
}

// ============================================
// HOME SECTION HEADER
// ============================================
function HomeSectionHeader({ title, action }: { title: string; action?: React.ReactNode }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 'var(--space-lg) var(--space-xl) var(--space-sm)',
      }}
    >
      <h2 style={{ 
        fontSize: 13, 
        fontWeight: 600, 
        color: 'var(--color-text-tertiary)',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        margin: 0,
      }}>
        {title}
      </h2>
      {action}
    </div>
  );
}

// ============================================
// QUICK ACTION CARDS
// ============================================
function QuickActionCards({ onNavigate }: { onNavigate?: (tab: 'coach' | 'clinic') => void }) {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      gap: 'var(--space-md)',
      padding: '0 var(--space-xl)',
      marginBottom: 'var(--space-xl)',
    }}>
      {/* Book with Coach */}
      <button
        onClick={() => onNavigate?.('coach')}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-lg)',
          padding: '20px var(--space-xl)',
          backgroundColor: 'var(--color-activity-bg)',
          border: 'none',
          borderRadius: 'var(--radius-xl)',
          cursor: 'pointer',
          fontFamily: 'inherit',
          transition: 'transform 150ms ease, opacity 150ms ease',
          position: 'relative',
          overflow: 'hidden',
          minHeight: 88,
        }}
      >
        {/* Human image */}
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: 'var(--radius-full)',
            overflow: 'hidden',
            flexShrink: 0,
            border: '3px solid var(--color-bg-primary)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
          }}
        >
          <img 
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop&crop=face"
            alt="Coach"
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
            }}
          />
        </div>
        
        {/* Text content */}
        <div style={{ textAlign: 'left', flex: 1 }}>
          <div style={{ 
            fontSize: 18, 
            fontWeight: 700, 
            color: 'var(--color-text-primary)',
            lineHeight: 1.2,
            marginBottom: 6,
          }}>
            Book with Coach
          </div>
          <div style={{ 
            fontSize: 14, 
            color: 'var(--color-text-secondary)',
            lineHeight: 1.4,
          }}>
            Get personalized health guidance
          </div>
        </div>
        
        {/* Arrow icon */}
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'var(--color-bg-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          }}
        >
          <ArrowRight size={20} color="var(--color-activity-text)" />
        </div>
      </button>

      {/* Book at Clinic */}
      <button
        onClick={() => onNavigate?.('clinic')}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-lg)',
          padding: '20px var(--space-xl)',
          backgroundColor: 'var(--color-heart-bg)',
          border: 'none',
          borderRadius: 'var(--radius-xl)',
          cursor: 'pointer',
          fontFamily: 'inherit',
          transition: 'transform 150ms ease, opacity 150ms ease',
          position: 'relative',
          overflow: 'hidden',
          minHeight: 88,
        }}
      >
        {/* Human image */}
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: 'var(--radius-full)',
            overflow: 'hidden',
            flexShrink: 0,
            border: '3px solid var(--color-bg-primary)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
          }}
        >
          <img 
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face"
            alt="Doctor"
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
            }}
          />
        </div>
        
        {/* Text content */}
        <div style={{ textAlign: 'left', flex: 1 }}>
          <div style={{ 
            fontSize: 18, 
            fontWeight: 700, 
            color: 'var(--color-text-primary)',
            lineHeight: 1.2,
            marginBottom: 6,
          }}>
            Book at Clinic
          </div>
          <div style={{ 
            fontSize: 14, 
            color: 'var(--color-text-secondary)',
            lineHeight: 1.4,
          }}>
            See a doctor for checkups & tests
          </div>
        </div>
        
        {/* Arrow icon */}
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'var(--color-bg-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          }}
        >
          <ArrowRight size={20} color="var(--color-heart-text)" />
        </div>
      </button>

      {/* Chat with AI Health Coach */}
      <button
        onClick={() => onNavigate?.('coach')}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-lg)',
          padding: '20px var(--space-xl)',
          backgroundColor: 'var(--color-sleep-bg)',
          border: 'none',
          borderRadius: 'var(--radius-xl)',
          cursor: 'pointer',
          fontFamily: 'inherit',
          transition: 'transform 150ms ease, opacity 150ms ease',
          position: 'relative',
          overflow: 'hidden',
          minHeight: 88,
        }}
      >
        {/* Beta badge - top right corner */}
        <span style={{
          position: 'absolute',
          top: 12,
          right: 12,
          fontSize: 10,
          fontWeight: 700,
          color: 'var(--color-sleep-text)',
          backgroundColor: 'var(--color-bg-primary)',
          padding: '3px 8px',
          borderRadius: 'var(--radius-full)',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
        }}>
          Beta
        </span>
        
        {/* AI Avatar/Icon */}
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: 'var(--radius-full)',
            overflow: 'hidden',
            flexShrink: 0,
            border: '3px solid var(--color-bg-primary)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Sparkles size={32} color="white" />
        </div>
        
        {/* Text content */}
        <div style={{ textAlign: 'left', flex: 1 }}>
          <div style={{ 
            fontSize: 18, 
            fontWeight: 700, 
            color: 'var(--color-text-primary)',
            lineHeight: 1.2,
            marginBottom: 6,
          }}>
            Chat with AI Coach
          </div>
          <div style={{ 
            fontSize: 14, 
            color: 'var(--color-text-secondary)',
            lineHeight: 1.4,
          }}>
            Get instant health answers 24/7
          </div>
        </div>
        
        {/* Arrow icon */}
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'var(--color-bg-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          }}
        >
          <ArrowRight size={20} color="var(--color-sleep-text)" />
        </div>
      </button>
    </div>
  );
}

function GreetingHeader({ name, avatarUrl, initials }: { name: string; avatarUrl?: string; initials?: string }) {
  const { text, icon } = getGreeting();
  const today = new Date();
  const dateStr = today.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  
  return (
    <div
      style={{
        padding: 'var(--space-lg) var(--space-xl)',
        backgroundColor: 'var(--color-bg-primary)',
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-lg)',
      }}
    >
      {/* Profile Avatar */}
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: 'var(--radius-full)',
          backgroundColor: 'var(--color-bg-elevated)',
          overflow: 'hidden',
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {avatarUrl ? (
          <img 
            src={avatarUrl} 
            alt={name}
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
            }} 
          />
        ) : (
          <span style={{ 
            fontSize: 20, 
            fontWeight: 600, 
            color: 'var(--color-text-secondary)',
          }}>
            {initials || name.split(' ').map(n => n[0]).join('').toUpperCase()}
          </span>
        )}
      </div>
      
      {/* Greeting Text */}
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', marginBottom: 4 }}>
          {icon}
          <span style={{ fontSize: 15, color: 'var(--color-text-secondary)' }}>{dateStr}</span>
        </div>
        <h1 style={{ 
          fontSize: 28, 
          fontWeight: 700, 
          color: 'var(--color-text-primary)',
          letterSpacing: -0.3,
          margin: 0,
        }}>
          {text}, {name}
        </h1>
      </div>
    </div>
  );
}

// ============================================
// EXPANDABLE TODAY'S INSIGHTS CARD
// ============================================
type InsightItem = {
  id: string;
  icon: React.ReactNode;
  iconBgColor: string;
  title: string;
  highlight?: string;
  isPrimary?: boolean;
};

function TodaysInsightsCard({ 
  insights, 
  isExpanded, 
  onToggle,
}: { 
  insights: InsightItem[]; 
  isExpanded: boolean; 
  onToggle: () => void;
}) {
  const primaryInsight = insights.find(i => i.isPrimary) || insights[0];
  const otherInsights = insights.filter(i => i.id !== primaryInsight.id);
  
  return (
    <div style={{ padding: '0 var(--space-xl)', marginBottom: 'var(--space-md)' }}>
      <Card padding="none">
        {/* Primary Insight - Always visible */}
        <div
          onClick={onToggle}
          role="button"
          tabIndex={0}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-md)',
            padding: 'var(--space-lg)',
            cursor: 'pointer',
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 'var(--radius-md)',
              backgroundColor: primaryInsight.iconBgColor,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            {primaryInsight.icon}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ 
              fontSize: 11, 
              fontWeight: 600, 
              color: 'var(--color-text-tertiary)',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              marginBottom: 2,
            }}>
              Today's Highlight
            </div>
            <div style={{ fontSize: 16, fontWeight: 600, color: 'var(--color-text-primary)' }}>
              {primaryInsight.title}
              {primaryInsight.highlight && (
                <span style={{ color: 'var(--color-success-text)', marginLeft: 4 }}>
                  {primaryInsight.highlight}
                </span>
              )}
            </div>
          </div>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 'var(--space-xs)',
            color: 'var(--color-text-tertiary)',
          }}>
            {otherInsights.length > 0 && (
              <span style={{ fontSize: 13 }}>+{otherInsights.length}</span>
            )}
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
        </div>
        
        {/* Expanded Insights */}
        {isExpanded && otherInsights.length > 0 && (
          <div style={{ borderTop: '1px solid var(--color-border-separator)' }}>
            {otherInsights.map((insight, index) => (
              <div
                key={insight.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-md)',
                  padding: 'var(--space-md) var(--space-lg)',
                  borderTop: index > 0 ? '1px solid var(--color-border-separator)' : 'none',
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: insight.iconBgColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {insight.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 15, color: 'var(--color-text-primary)' }}>
                    {insight.title}
                    {insight.highlight && (
                      <span style={{ color: 'var(--color-success-text)', marginLeft: 4 }}>
                        {insight.highlight}
                      </span>
                    )}
                  </div>
                </div>
                <ChevronRight size={18} color="var(--color-text-tertiary)" />
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}

// ============================================
// CONNECT & SYNC SETUP CARD
// ============================================
type ConnectionItem = {
  id: string;
  name: string;
  icon: React.ReactNode;
  iconBgColor: string;
  isConnected: boolean;
};

function ConnectSyncCard({ 
  connections, 
  onNavigateToDevices 
}: { 
  connections: ConnectionItem[];
  onNavigateToDevices: () => void;
}) {
  const connectedCount = connections.filter(c => c.isConnected).length;
  const totalCount = connections.length;
  const progress = (connectedCount / totalCount) * 100;
  
  // If all connected, don't show the setup card
  if (connectedCount === totalCount) return null;
  
  return (
    <div style={{ padding: '0 var(--space-xl)', marginBottom: 'var(--space-md)' }}>
      <Card padding="lg">
        {/* Header */}
        <div style={{ marginBottom: 'var(--space-lg)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 'var(--space-xs)' }}>
            <span style={{ 
              fontSize: 11, 
              fontWeight: 600, 
              color: 'var(--color-text-tertiary)',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}>
              Complete Setup
            </span>
            <span style={{ fontSize: 13, color: 'var(--color-text-secondary)' }}>
              {connectedCount}/{totalCount} connected
            </span>
          </div>
          <h3 style={{ 
            fontSize: 18, 
            fontWeight: 600, 
            color: 'var(--color-text-primary)',
            margin: '0 0 var(--space-sm) 0',
          }}>
            Connect & Synchronize
          </h3>
          <p style={{ 
            fontSize: 14, 
            color: 'var(--color-text-secondary)',
            margin: 0,
            lineHeight: 1.4,
          }}>
            Connect your health devices to get personalized insights
          </p>
        </div>
        
        {/* Progress Bar */}
        <div style={{ marginBottom: 'var(--space-lg)' }}>
          <div style={{
            height: 6,
            borderRadius: 3,
            backgroundColor: 'var(--color-bg-elevated)',
            overflow: 'hidden',
          }}>
            <div style={{
              height: '100%',
              width: `${progress}%`,
              backgroundColor: 'var(--color-success-text)',
              borderRadius: 3,
              transition: 'width 300ms ease',
            }} />
          </div>
        </div>
        
        {/* Connection Items Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(5, 1fr)', 
          gap: 'var(--space-sm)',
          marginBottom: 'var(--space-lg)',
        }}>
          {connections.map((conn) => (
            <div
              key={conn.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 'var(--space-xs)',
              }}
            >
              <div style={{ position: 'relative' }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: conn.isConnected ? conn.iconBgColor : 'var(--color-bg-elevated)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: conn.isConnected ? 1 : 0.5,
                  }}
                >
                  {conn.icon}
                </div>
                {conn.isConnected && (
                  <div style={{
                    position: 'absolute',
                    bottom: -2,
                    right: -2,
                    width: 16,
                    height: 16,
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: 'var(--color-success-text)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid var(--color-bg-secondary)',
                  }}>
                    <CheckCircle2 size={10} color="white" />
                  </div>
                )}
              </div>
              <span style={{ 
                fontSize: 10, 
                color: conn.isConnected ? 'var(--color-text-primary)' : 'var(--color-text-tertiary)',
                textAlign: 'center',
                lineHeight: 1.2,
              }}>
                {conn.name}
              </span>
            </div>
          ))}
        </div>
        
        {/* Action Button */}
        <button
          onClick={onNavigateToDevices}
          style={{
            width: '100%',
            height: 48,
            backgroundColor: 'var(--color-brand-primary)',
            color: 'var(--color-text-inverse)',
            border: 'none',
            borderRadius: 'var(--radius-full)',
            fontSize: 15,
            fontWeight: 600,
            cursor: 'pointer',
            fontFamily: 'inherit',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'var(--space-sm)',
          }}
        >
          <Link2 size={18} />
          Connect Devices
        </button>
      </Card>
    </div>
  );
}

// ============================================
// QUICK STATS ROW - ACTIVITY RINGS
// ============================================
type StatRing = {
  id: string;
  label: string;
  value: number;
  max: number;
  unit?: string;
  color: string;
  bgColor: string;
  icon: React.ReactNode;
};

function ActivityRing({ stat, size = 64 }: { stat: StatRing; size?: number }) {
  const strokeWidth = 5;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const percentage = Math.min((stat.value / stat.max) * 100, 100);
  const offset = circumference - (percentage / 100) * circumference;
  
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
      gap: 'var(--space-xs)',
    }}>
      <div style={{ position: 'relative', width: size, height: size }}>
        <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={stat.bgColor}
            strokeWidth={strokeWidth}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={stat.color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ transition: 'stroke-dashoffset 600ms ease-in-out' }}
          />
        </svg>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {stat.icon}
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ 
          fontSize: 15, 
          fontWeight: 700, 
          color: 'var(--color-text-primary)',
          lineHeight: 1,
        }}>
          {stat.value.toLocaleString()}{stat.unit && <span style={{ fontSize: 11 }}>{stat.unit}</span>}
        </div>
        <div style={{ 
          fontSize: 11, 
          color: 'var(--color-text-tertiary)',
          marginTop: 2,
        }}>
          {stat.label}
        </div>
      </div>
    </div>
  );
}

function QuickStatsRow({ stats }: { stats: StatRing[] }) {
  return (
    <div style={{ padding: '0 var(--space-xl)', marginBottom: 'var(--space-lg)' }}>
      <Card>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-around', 
          alignItems: 'flex-start',
        }}>
          {stats.map((stat) => (
            <ActivityRing key={stat.id} stat={stat} />
          ))}
        </div>
      </Card>
    </div>
  );
}

// ============================================
// INBOX HEADER
// ============================================
function InboxHeader() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 'var(--space-sm) var(--space-xl) var(--space-md)',
        backgroundColor: 'var(--color-bg-primary)',
      }}
    >
      <h2 style={{ 
        fontSize: 20, 
        fontWeight: 700, 
        color: 'var(--color-text-primary)',
        letterSpacing: -0.3,
        margin: 0,
      }}>
        Activity
      </h2>
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
  iconColor?: string;
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
                  minWidth: 20,
                  height: 20,
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: isSelected ? 'rgba(255,255,255,0.25)' : 'var(--color-brand-accent)',
                  color: isSelected ? 'var(--color-text-inverse)' : 'var(--color-text-inverse)',
                  fontSize: 12,
                  fontWeight: 700,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  lineHeight: 1,
                  paddingLeft: 6,
                  paddingRight: 6,
                  boxSizing: 'border-box',
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

// Unified inbox item type
type InboxItem = {
  id: string;
  type: 'message' | 'appointment' | 'alert' | 'tip';
  timestamp: string;
  sortOrder: number;
  isUnread?: boolean;
  data: any;
};

interface HomePageProps {
  hideTabBar?: boolean;
  onNavigate?: (tab: 'coach' | 'clinic') => void;
}

export function HomePage({ hideTabBar = false, onNavigate }: HomePageProps) {
  const [activeTab, setActiveTab] = useState<TabId>('home');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [insightsExpanded, setInsightsExpanded] = useState(false);

  // Today's insights data
  const todaysInsights: InsightItem[] = [
    {
      id: 'sleep',
      icon: <MoonIcon size={20} color="var(--color-sleep-text)" />,
      iconBgColor: 'var(--color-sleep-bg)',
      title: 'Your sleep was 8h 12min',
      highlight: '— best this week!',
      isPrimary: true,
    },
    {
      id: 'heart',
      icon: <Heart size={20} color="var(--color-heart-text)" />,
      iconBgColor: 'var(--color-heart-bg)',
      title: 'Resting HR dropped to 58 bpm',
      highlight: '↓ 3',
    },
    {
      id: 'activity',
      icon: <Zap size={20} color="var(--color-activity-text)" />,
      iconBgColor: 'var(--color-activity-bg)',
      title: 'You hit your step goal 5 days in a row',
    },
  ];

  // Connection items for setup card
  const connectionItems: ConnectionItem[] = [
    {
      id: 'apple-health',
      name: 'Apple Health',
      icon: <Heart size={20} color="var(--color-heart-text)" />,
      iconBgColor: 'var(--color-heart-bg)',
      isConnected: true,
    },
    {
      id: 'garmin',
      name: 'Garmin',
      icon: <Watch size={20} color="var(--color-activity-text)" />,
      iconBgColor: 'var(--color-activity-bg)',
      isConnected: false,
    },
    {
      id: 'abel-scale',
      name: 'Abel Scale',
      icon: <Scale size={20} color="var(--color-body-text)" />,
      iconBgColor: 'var(--color-body-bg)',
      isConnected: true,
    },
    {
      id: 'oura',
      name: 'Oura Ring',
      icon: <Circle size={20} color="var(--color-sleep-text)" />,
      iconBgColor: 'var(--color-sleep-bg)',
      isConnected: false,
    },
    {
      id: 'furst',
      name: 'Fürst',
      icon: <Activity size={20} color="var(--color-success-text)" />,
      iconBgColor: 'var(--color-success-bg)',
      isConnected: false,
    },
  ];

  // Quick stats data
  const quickStats: StatRing[] = [
    {
      id: 'steps',
      label: 'Steps',
      value: 7842,
      max: 10000,
      color: 'var(--color-activity-text)',
      bgColor: 'var(--color-activity-bg)',
      icon: <Footprints size={20} color="var(--color-activity-text)" />,
    },
    {
      id: 'sleep',
      label: 'Sleep',
      value: 8.2,
      max: 8,
      unit: 'h',
      color: 'var(--color-sleep-text)',
      bgColor: 'var(--color-sleep-bg)',
      icon: <MoonIcon size={20} color="var(--color-sleep-text)" />,
    },
    {
      id: 'heart',
      label: 'Heart',
      value: 78,
      max: 100,
      color: 'var(--color-heart-text)',
      bgColor: 'var(--color-heart-bg)',
      icon: <Heart size={20} color="var(--color-heart-text)" />,
    },
  ];

  const handleNavigateToDevices = () => {
    // In a real app, this would navigate to the Profile page's Connected Devices section
    console.log('Navigate to Profile > Connected Devices');
  };

  // All inbox items in a unified list
  const allItems: InboxItem[] = [
    {
      id: 'appt-1',
      type: 'appointment',
      timestamp: 'Tomorrow',
      sortOrder: 0,
      isUnread: true,
      data: {
        doctorName: 'Dr. Sarah Chen',
        specialty: 'General Practitioner • Muscle and Joint Pains',
        dateTime: 'Tomorrow, 10:30 AM',
        type: 'video',
        imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face',
      },
    },
    {
      id: 'msg-1',
      type: 'message',
      timestamp: '2h',
      sortOrder: 1,
      isUnread: true,
      data: {
        senderName: 'Coach Marcus',
        senderInitials: 'CM',
        senderImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
        preview: "Great progress this week! Let's talk about your sleep patterns...",
        unreadCount: 2,
        isCoach: true,
      },
    },
    {
      id: 'alert-1',
      type: 'alert',
      timestamp: '3h',
      sortOrder: 2,
      isUnread: true,
      data: {
        icon: <TrendingUp size={20} color="var(--color-success-text)" />,
        iconBgColor: 'var(--color-success-bg)',
        title: 'Weekly Health Score',
        message: "Your health score improved by 3 points! You're now at 78.",
        actionLabel: 'View Report',
      },
    },
    {
      id: 'alert-2',
      type: 'alert',
      timestamp: '4h',
      sortOrder: 3,
      isUnread: false,
      data: {
        icon: <AlertCircle size={20} color="var(--color-heart-text)" />,
        iconBgColor: 'var(--color-heart-bg)',
        iconColor: 'var(--color-heart-text)',
        title: 'Blood Pressure Trend',
        message: 'Your readings have been elevated this week. Consider reviewing with your doctor.',
      },
    },
    {
      id: 'alert-3',
      type: 'alert',
      timestamp: '5h',
      sortOrder: 4,
      isUnread: false,
      data: {
        icon: <Watch size={20} color="var(--color-sleep-text)" />,
        iconBgColor: 'var(--color-sleep-bg)',
        title: 'Device Synced',
        message: 'Your ScanWatch successfully synced 7 days of data.',
      },
    },
    {
      id: 'msg-2',
      type: 'message',
      timestamp: 'Yesterday',
      sortOrder: 5,
      isUnread: false,
      data: {
        senderName: 'Dr. Sarah Chen',
        senderInitials: 'SC',
        senderImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face',
        preview: "Your recent lab results look good. I've added some notes...",
        isCoach: false,
      },
    },
    {
      id: 'alert-4',
      type: 'alert',
      timestamp: '8h',
      sortOrder: 6,
      isUnread: false,
      data: {
        icon: <Pill size={20} color="var(--color-body-text)" />,
        iconBgColor: 'var(--color-body-bg)',
        title: 'Medication Reminder',
        message: "Don't forget to take your evening supplements.",
      },
    },
    {
      id: 'alert-5',
      type: 'alert',
      timestamp: '1d',
      sortOrder: 7,
      isUnread: false,
      data: {
        icon: <Award size={20} color="var(--color-activity-text)" />,
        iconBgColor: 'var(--color-activity-bg)',
        title: 'Achievement Unlocked',
        message: "30-Day Activity Streak! You've been consistently active for a month.",
        actionLabel: 'Share',
      },
    },
    {
      id: 'msg-3',
      type: 'message',
      timestamp: '2 days',
      sortOrder: 8,
      isUnread: false,
      data: {
        senderName: 'Abel Support',
        senderInitials: 'AS',
        preview: "Thank you for your feedback! We've implemented the changes...",
        isCoach: false,
      },
    },
    {
      id: 'tip-1',
      type: 'tip',
      timestamp: '2d',
      sortOrder: 9,
      isUnread: false,
      data: {
        title: 'Boost Your Morning Routine',
        description: 'Try starting your day with 10 minutes of light stretching. Studies show it can improve energy levels by up to 25%.',
        category: 'Wellness',
        readTime: '3 min read',
      },
    },
  ];

  // Filter items based on selected filter
  const filteredItems = allItems.filter((item) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'messages') return item.type === 'message';
    if (selectedFilter === 'appointments') return item.type === 'appointment';
    if (selectedFilter === 'notifications') return item.type === 'alert';
    if (selectedFilter === 'tips') return item.type === 'tip';
    return true;
  });

  // Count items for filter badges
  const filterOptions = [
    { id: 'all', label: 'All', count: allItems.filter(i => i.isUnread).length },
    { id: 'messages', label: 'Messages', count: allItems.filter(i => i.type === 'message' && i.isUnread).length },
    { id: 'appointments', label: 'Appointments', count: allItems.filter(i => i.type === 'appointment' && i.isUnread).length },
    { id: 'notifications', label: 'Alerts', count: allItems.filter(i => i.type === 'alert' && i.isUnread).length },
    { id: 'tips', label: 'Tips' },
  ];

  // Render an inbox item based on its type
  const renderItem = (item: InboxItem) => {
    switch (item.type) {
      case 'appointment':
        return (
          <div key={item.id} style={{ padding: '0 var(--space-lg) var(--space-md)' }}>
            <AppointmentReminderCard {...item.data} />
          </div>
        );
      case 'message':
        return (
          <div key={item.id} style={{ padding: '0 var(--space-lg) var(--space-sm)' }}>
            <MessageThreadItem {...item.data} timestamp={item.timestamp} />
          </div>
        );
      case 'alert':
        return (
          <div key={item.id} style={{ padding: '0 var(--space-lg) var(--space-sm)' }}>
            <SystemNotificationItem {...item.data} timestamp={item.timestamp} isUnread={item.isUnread} />
          </div>
        );
      case 'tip':
        return (
          <div key={item.id} style={{ padding: '0 var(--space-lg) var(--space-md)' }}>
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
                    {item.data.title}
                  </h3>
                  <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    {item.data.description}
                  </p>
                  <div style={{ marginTop: 'var(--space-md)', display: 'flex', gap: 'var(--space-sm)' }}>
                    <Badge variant="activity">{item.data.category}</Badge>
                    <Badge variant="default">{item.data.readTime}</Badge>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'var(--color-bg-primary)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{globalStyles}</style>
      {/* iOS Status Bar */}
      <StatusBar variant="dark" batteryLevel={87} />

      {/* Scrollable Content Area - includes everything */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          paddingBottom: 100,
        }}
      >
        {/* ============================================ */}
        {/* HOME HEADER SECTION */}
        {/* ============================================ */}
        
        {/* Personalized Greeting */}
        <GreetingHeader 
          name="Karl" 
          avatarUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
          initials="KE"
        />
        
        {/* ============================================ */}
        {/* QUICK ACTIONS SECTION */}
        {/* ============================================ */}
        <HomeSectionHeader title="Quick Actions" />
        <QuickActionCards onNavigate={onNavigate} />
        
        {/* ============================================ */}
        {/* TODAY'S INSIGHTS SECTION */}
        {/* ============================================ */}
        <HomeSectionHeader title="Today" />
        <TodaysInsightsCard
          insights={todaysInsights}
          isExpanded={insightsExpanded}
          onToggle={() => setInsightsExpanded(!insightsExpanded)}
        />
        
        {/* Quick Stats - Activity Rings */}
        <QuickStatsRow stats={quickStats} />
        
        {/* ============================================ */}
        {/* SETUP SECTION */}
        {/* ============================================ */}
        <ConnectSyncCard
          connections={connectionItems}
          onNavigateToDevices={handleNavigateToDevices}
        />
        
        {/* ============================================ */}
        {/* ACTIVITY STREAM SECTION */}
        {/* ============================================ */}
        
        {/* Activity Header */}
        <InboxHeader />

        {/* Filter Pills */}
        <div style={{ paddingBottom: 'var(--space-md)' }}>
          <FilterPills
            options={filterOptions}
            selected={selectedFilter}
            onChange={setSelectedFilter}
          />
        </div>

        {/* Activity Stream Content */}
        <div style={{ paddingTop: 'var(--space-sm)' }}>
          {/* Unified filtered list */}
          {filteredItems.map(renderItem)}

          {/* Empty state */}
          {filteredItems.length === 0 && (
            <div style={{ 
              padding: 'var(--space-3xl)', 
              textAlign: 'center',
              color: 'var(--color-text-tertiary)',
            }}>
              <Mail size={48} style={{ opacity: 0.3, marginBottom: 'var(--space-md)' }} />
              <p>No items to show</p>
            </div>
          )}

          {/* Bottom padding for scroll */}
          <div style={{ height: 'var(--space-3xl)' }} />
        </div>
      </div>

      {/* Bottom Tab Bar - uses standardized tabs */}
      {!hideTabBar && (
        <TabBar
          activeId={activeTab}
          onChange={setActiveTab}
        />
      )}
    </div>
  );
}

export default HomePage;
