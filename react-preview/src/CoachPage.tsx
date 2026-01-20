/**
 * Coach Page
 * - Segmented control for Activity and Food
 * - Tab-specific content areas
 */

import { useState } from 'react';
import {
  StatusBar,
  SegmentedControl,
  globalStyles,
} from './components';
import {
  Activity,
  Utensils,
} from 'lucide-react';

interface CoachPageProps {
  hideTabBar?: boolean;
}

export function CoachPage({ hideTabBar }: CoachPageProps) {
  const [selectedTab, setSelectedTab] = useState('Activity');

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
          Coach
        </h1>
      </div>

      {/* Segmented Control */}
      <div
        style={{
          padding: '0 var(--space-xl) var(--space-lg)',
        }}
      >
        <SegmentedControl
          options={['Activity', 'Food']}
          selected={selectedTab}
          onChange={setSelectedTab}
          fullWidth
        />
      </div>

      {/* Content Area */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          paddingBottom: 100,
        }}
      >
        {selectedTab === 'Activity' ? (
          <div
            style={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0 var(--space-xl)',
            }}
          >
            <div
              style={{
                width: 80,
                height: 80,
                borderRadius: 'var(--radius-xl)',
                backgroundColor: 'var(--color-activity-bg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 'var(--space-lg)',
              }}
            >
              <Activity size={40} color="var(--color-activity-text)" />
            </div>
            <h2
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: 'var(--color-text-primary)',
                marginBottom: 'var(--space-sm)',
              }}
            >
              Activity Coaching
            </h2>
            <p
              style={{
                fontSize: 15,
                color: 'var(--color-text-secondary)',
                textAlign: 'center',
                maxWidth: 280,
              }}
            >
              Track your workouts, steps, and daily movement to reach your fitness goals.
            </p>
          </div>
        ) : (
          <div
            style={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0 var(--space-xl)',
            }}
          >
            <div
              style={{
                width: 80,
                height: 80,
                borderRadius: 'var(--radius-xl)',
                backgroundColor: 'var(--color-success-bg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 'var(--space-lg)',
              }}
            >
              <Utensils size={40} color="var(--color-success-text)" />
            </div>
            <h2
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: 'var(--color-text-primary)',
                marginBottom: 'var(--space-sm)',
              }}
            >
              Food Coaching
            </h2>
            <p
              style={{
                fontSize: 15,
                color: 'var(--color-text-secondary)',
                textAlign: 'center',
                maxWidth: 280,
              }}
            >
              Log your meals and get personalized nutrition advice for a healthier diet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CoachPage;
