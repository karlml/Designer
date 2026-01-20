/**
 * Profile Page - Full Page View
 * Displays user profile with avatar, name, profile completion prompt,
 * and organized settings sections
 */

import { useState } from 'react';
import {
  Card,
  TabBar,
  SettingsItem,
  SettingsSectionCard,
  ProfileHeader,
  ProfileInfoButton,
  Badge,
  StatusBar,
  globalStyles,
} from './components';
import type { TabId } from './components';

import {
  User,
  Bell,
  Globe,
  Shield,
  CreditCard,
  Watch,
  Heart,
  Moon,
  Activity,
  HelpCircle,
  FileText,
  LogOut,
  ChevronRight,
  Smartphone,
  Share2,
  Star,
  Ruler,
} from 'lucide-react';

// Profile Page Header - clean minimal style
function ProfilePageHeader() {
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
        Profile
      </h1>
    </div>
  );
}

// Section divider with optional title
function SectionDivider({ title }: { title?: string }) {
  return (
    <div style={{ padding: 'var(--space-lg) var(--space-xl) var(--space-sm)' }}>
      {title && (
        <span style={{
          fontSize: 13,
          fontWeight: 600,
          color: 'var(--color-text-tertiary)',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
        }}>
          {title}
        </span>
      )}
    </div>
  );
}

interface ProfilePageProps {
  hideTabBar?: boolean;
}

export function ProfilePage({ hideTabBar = false }: ProfilePageProps) {
  const [activeTab, setActiveTab] = useState<TabId>('profile');
  
  // Toggle states for various settings
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [healthReminders, setHealthReminders] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

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

      {/* Page Header */}
      <ProfilePageHeader />

      {/* Scrollable Content Area */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          paddingBottom: 120,
        }}
      >
        {/* Profile Header with Avatar and Name */}
        <ProfileHeader
          avatar={{ initials: 'KE' }}
          name="Karl Eyr"
        />

        {/* Complete Profile Prompt */}
        <div style={{ padding: '0 var(--space-xl)', marginTop: 'var(--space-md)' }}>
          <ProfileInfoButton text="Complete your profile" />
        </div>

        {/* ============================================ */}
        {/* ACCOUNT SETTINGS SECTION */}
        {/* ============================================ */}
        <SectionDivider title="Account" />
        
        <div style={{ padding: '0 var(--space-xl)' }}>
          <Card padding="none">
            <SettingsItem
              icon={<User size={20} />}
              iconCategory="body"
              title="Account"
              showChevron
            />
            <div style={{ borderTop: '1px solid var(--color-border-separator)', marginLeft: 72 }} />
            <SettingsItem
              icon={<Bell size={20} />}
              iconCategory="activity"
              title="Notifications"
              toggle={{ checked: notificationsEnabled, onChange: setNotificationsEnabled }}
              showChevron={false}
            />
            <div style={{ borderTop: '1px solid var(--color-border-separator)', marginLeft: 72 }} />
            <SettingsItem
              icon={<Globe size={20} />}
              iconCategory="sleep"
              title="Language"
              value="English"
              showChevron
            />
          </Card>
        </div>

        {/* ============================================ */}
        {/* HEALTH & DEVICES SECTION */}
        {/* ============================================ */}
        <SectionDivider title="Health & Devices" />
        
        <div style={{ padding: '0 var(--space-xl)' }}>
          <Card padding="none">
            <SettingsItem
              icon={<Watch size={20} />}
              iconCategory="default"
              title="Connected Devices"
              value="2"
              showChevron
            />
            <div style={{ borderTop: '1px solid var(--color-border-separator)', marginLeft: 72 }} />
            <SettingsItem
              icon={<Heart size={20} />}
              iconCategory="heart"
              title="Health Data"
              showChevron
            />
            <div style={{ borderTop: '1px solid var(--color-border-separator)', marginLeft: 72 }} />
            <SettingsItem
              icon={<Activity size={20} />}
              iconCategory="activity"
              title="Health Reminders"
              toggle={{ checked: healthReminders, onChange: setHealthReminders }}
              showChevron={false}
            />
          </Card>
        </div>

        {/* ============================================ */}
        {/* PREFERENCES SECTION */}
        {/* ============================================ */}
        <SectionDivider title="Preferences" />
        
        <div style={{ padding: '0 var(--space-xl)' }}>
          <Card padding="none">
            <SettingsItem
              icon={<Moon size={20} />}
              iconCategory="sleep"
              title="Dark Mode"
              toggle={{ checked: darkMode, onChange: setDarkMode }}
              showChevron={false}
            />
            <div style={{ borderTop: '1px solid var(--color-border-separator)', marginLeft: 72 }} />
            <SettingsItem
              icon={<Smartphone size={20} />}
              iconCategory="default"
              title="App Icon"
              value="Default"
              showChevron
            />
            <div style={{ borderTop: '1px solid var(--color-border-separator)', marginLeft: 72 }} />
            <SettingsItem
              icon={<Ruler size={20} />}
              iconCategory="default"
              title="Units"
              value="Metric"
              showChevron
            />
          </Card>
        </div>

        {/* ============================================ */}
        {/* SUBSCRIPTION & PAYMENTS SECTION */}
        {/* ============================================ */}
        <SectionDivider title="Subscription" />
        
        <div style={{ padding: '0 var(--space-xl)' }}>
          <Card padding="none">
            <SettingsItem
              icon={<Star size={20} />}
              iconCategory="activity"
              title="Premium Plan"
              value="Active"
              showChevron
            />
            <div style={{ borderTop: '1px solid var(--color-border-separator)', marginLeft: 72 }} />
            <SettingsItem
              icon={<CreditCard size={20} />}
              iconCategory="default"
              title="Payment Methods"
              showChevron
            />
          </Card>
        </div>

        {/* ============================================ */}
        {/* PRIVACY & SECURITY SECTION */}
        {/* ============================================ */}
        <SectionDivider title="Privacy & Security" />
        
        <div style={{ padding: '0 var(--space-xl)' }}>
          <Card padding="none">
            <SettingsItem
              icon={<Shield size={20} />}
              iconCategory="success"
              title="Privacy Settings"
              showChevron
            />
            <div style={{ borderTop: '1px solid var(--color-border-separator)', marginLeft: 72 }} />
            <SettingsItem
              icon={<Share2 size={20} />}
              iconCategory="default"
              title="Data Sharing"
              showChevron
            />
          </Card>
        </div>

        {/* ============================================ */}
        {/* SUPPORT SECTION */}
        {/* ============================================ */}
        <SectionDivider title="Support" />
        
        <div style={{ padding: '0 var(--space-xl)' }}>
          <Card padding="none">
            <SettingsItem
              icon={<HelpCircle size={20} />}
              iconCategory="sleep"
              title="Help Center"
              showChevron
            />
            <div style={{ borderTop: '1px solid var(--color-border-separator)', marginLeft: 72 }} />
            <SettingsItem
              icon={<FileText size={20} />}
              iconCategory="default"
              title="Terms & Privacy"
              showChevron
            />
          </Card>
        </div>

        {/* ============================================ */}
        {/* LOG OUT */}
        {/* ============================================ */}
        <div style={{ padding: 'var(--space-xl)' }}>
          <Card padding="none">
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 'var(--space-sm)',
                padding: 'var(--space-lg)',
                cursor: 'pointer',
              }}
            >
              <LogOut size={20} color="var(--color-heart-text)" />
              <span style={{ 
                fontSize: 17, 
                fontWeight: 500, 
                color: 'var(--color-heart-text)',
              }}>
                Log Out
              </span>
            </div>
          </Card>
        </div>

        {/* App Version */}
        <div style={{ 
          textAlign: 'center', 
          padding: 'var(--space-lg)', 
          color: 'var(--color-text-tertiary)',
          fontSize: 13,
        }}>
          Abel Health v2.4.1 (Build 2026.01)
        </div>

      </div>

      {/* Bottom Tab Bar */}
      {!hideTabBar && (
        <TabBar
          activeId={activeTab}
          onChange={setActiveTab}
        />
      )}
    </div>
  );
}

export default ProfilePage;
