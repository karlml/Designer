/**
 * App Shell with Tab Navigation
 * - Home: Contains Inbox page
 * - Coach: AI health coaching
 * - Clinic: Contains Biomarker results page
 * - Shop: Products (scales, watches, supplements)
 * - Inbox: Contains Inbox page
 * - Profile: User profile and settings
 */

import { useState } from 'react';
import {
  TabBar,
  StatusBar,
  globalStyles,
} from './components';
import type { TabId } from './components';

import {
  Sparkles,
  Stethoscope,
  User,
  Bell,
} from 'lucide-react';

import { InboxPage } from './InboxPage';
import { BiomarkerResultsPage } from './BiomarkerResultsPage';
import { ProfilePage } from './ProfilePage';
import { CoachPage } from './CoachPage';
import { ShopPage } from './ShopPage';

// Empty placeholder page component - matches structure of other pages
function EmptyPage({ title, icon }: { title: string; icon: React.ReactNode }) {
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
      {/* iOS Status Bar */}
      <StatusBar variant="dark" batteryLevel={87} />
      
      {/* Page Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: 56,
          padding: '0 var(--space-xl)',
          backgroundColor: 'var(--color-bg-primary)',
          borderBottom: '1px solid var(--color-border-separator)',
        }}
      >
        <h1 style={{ 
          fontSize: 17, 
          fontWeight: 600, 
          color: 'var(--color-text-primary)',
        }}>
          {title}
        </h1>
      </div>

      {/* Content Area */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 'var(--space-xl)',
        }}
      >
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: 'var(--radius-xl)',
            backgroundColor: 'var(--color-bg-secondary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 'var(--space-lg)',
          }}
        >
          {icon}
        </div>
        <h2
          style={{
            fontSize: 24,
            fontWeight: 600,
            color: 'var(--color-text-secondary)',
            marginBottom: 'var(--space-sm)',
          }}
        >
          {title}
        </h2>
        <p
          style={{
            fontSize: 15,
            color: 'var(--color-text-tertiary)',
            textAlign: 'center',
          }}
        >
          Coming soon
        </p>
      </div>
    </div>
  );
}

export function AppShell() {
  const [activeTab, setActiveTab] = useState<TabId>('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <InboxPage hideTabBar />;
      case 'coach':
        return <CoachPage hideTabBar />;
      case 'clinic':
        return <BiomarkerResultsPage hideTabBar />;
      case 'shop':
        return <ShopPage hideTabBar />;
      case 'inbox':
        return <InboxPage hideTabBar />;
      case 'profile':
        return <ProfilePage hideTabBar />;
      default:
        return <InboxPage hideTabBar />;
    }
  };

  return (
    <>
      <style>{globalStyles}</style>
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
        {/* Page Content */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          {renderContent()}
        </div>

        {/* Bottom Tab Bar - uses standardized tabs */}
        <TabBar
          activeId={activeTab}
          onChange={setActiveTab}
        />
      </div>
    </>
  );
}

export default AppShell;
