/**
 * Biomarker Results Page - Full Page View
 * Shows Creatinine biomarker with Diverging Column Chart and historical readings
 */

import { useState } from 'react';
import {
  Card,
  NavHeader,
  TabBar,
  DivergingColumnChart,
  BiomarkerListCard,
  SegmentedControl,
  SectionHeader,
  Badge,
  StatusBar,
  globalStyles,
} from './components';
import type { TabId } from './components';

import {
  FlaskConical,
  TrendingUp,
  Info,
} from 'lucide-react';

// Flask icon component matching the BiomarkerListCard style
function FlaskIcon({ color }: { color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9 3V8.5L4.5 16.5C3.5 18.17 4.67 20 6.6 20H17.4C19.33 20 20.5 18.17 19.5 16.5L15 8.5V3M9 3H15M9 3H8M15 3H16M10 12H14"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface BiomarkerResultsPageProps {
  hideTabBar?: boolean;
}

export function BiomarkerResultsPage({ hideTabBar = false }: BiomarkerResultsPageProps) {
  const [activeTab, setActiveTab] = useState<TabId>('clinic');
  const [selectedPeriod, setSelectedPeriod] = useState('All');

  // Historical creatinine data for the diverging column chart
  // Shows deviation from optimal range (0.7-1.2 mg/dL for adults)
  // Baseline of 0 represents the optimal midpoint
  const creatinineChartData = [
    { min: -0.15, max: -0.05 },  // 2020 - slightly below optimal
    { min: -0.10, max: 0.02 },   // 2021 - trending toward optimal
    { min: -0.08, max: 0.05 },   // 2022 - near optimal
    { min: -0.12, max: -0.02 },  // 2023 - slightly below
    { min: -0.18, max: -0.08 },  // 2024 - below optimal (current)
  ];

  const biomarkerReadings = [
    { 
      label: 'Creatinine', 
      value: 0.64, 
      unit: 'mg/dL', 
      status: 'below-range' as const, 
      date: 'Jan 4, 2025', 
      category: 'body' as const
    },
    { 
      label: 'Creatinine', 
      value: 0.72, 
      unit: 'mg/dL', 
      status: 'in-range' as const, 
      date: 'Sep 15, 2024', 
      category: 'body' as const
    },
    { 
      label: 'Creatinine', 
      value: 0.68, 
      unit: 'mg/dL', 
      status: 'below-range' as const, 
      date: 'Jun 22, 2024', 
      category: 'body' as const
    },
    { 
      label: 'Creatinine', 
      value: 0.75, 
      unit: 'mg/dL', 
      status: 'in-range' as const, 
      date: 'Mar 10, 2024', 
      category: 'body' as const
    },
    { 
      label: 'Creatinine', 
      value: 0.71, 
      unit: 'mg/dL', 
      status: 'in-range' as const, 
      date: 'Dec 5, 2023', 
      category: 'body' as const
    },
  ];

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
        <StatusBar variant="dark" />
        
        {/* Navigation Header */}
        <NavHeader 
          title="Creatinine" 
          showBack 
          showClose
          onBack={() => console.log('Navigate back')}
          onClose={() => console.log('Close')}
          bordered
        />

        {/* Scrollable Content Area */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            paddingBottom: 100, // Space for tab bar
          }}
        >
          {/* Biomarker Hero Section */}
          <div
            style={{
              padding: 'var(--space-xl)',
              backgroundColor: 'var(--color-bg-secondary)',
              borderBottom: '1px solid var(--color-border-separator)',
            }}
          >
            {/* Icon and Title */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-lg)' }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--color-body-bg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <FlaskIcon color="var(--color-body-text)" />
              </div>
              <div>
                <h1 style={{ fontSize: 24, fontWeight: 700, color: 'var(--color-text-primary)', margin: 0 }}>
                  Creatinine
                </h1>
                <span style={{ fontSize: 14, color: 'var(--color-text-secondary)' }}>
                  Kidney Function Marker
                </span>
              </div>
            </div>

            {/* Latest Value Display */}
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-sm)', marginBottom: 'var(--space-sm)' }}>
              <span style={{ fontSize: 48, fontWeight: 300, color: 'var(--color-text-primary)', letterSpacing: '-1px' }}>
                0.64
              </span>
              <span style={{ fontSize: 18, color: 'var(--color-text-secondary)' }}>mg/dL</span>
            </div>

            {/* Status Badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
              <Badge variant="heart">Below Range</Badge>
              <span style={{ fontSize: 13, color: 'var(--color-text-tertiary)' }}>
                Last updated Jan 4, 2025
              </span>
            </div>
          </div>

          {/* Reference Range Info */}
          <div
            style={{
              padding: 'var(--space-lg) var(--space-xl)',
              backgroundColor: 'var(--color-bg-elevated)',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-md)',
            }}
          >
            <Info size={18} color="var(--color-text-tertiary)" />
            <span style={{ fontSize: 13, color: 'var(--color-text-secondary)' }}>
              Reference range: <strong>0.7 - 1.2 mg/dL</strong> for adults
            </span>
          </div>

          {/* Chart Section */}
          <div style={{ padding: 'var(--space-xl)' }}>
            {/* Period Selector */}
            <div style={{ marginBottom: 'var(--space-xl)' }}>
              <SegmentedControl
                options={['1Y', '3Y', 'All']}
                selected={selectedPeriod}
                onChange={setSelectedPeriod}
                fullWidth
              />
            </div>

            {/* Chart Card */}
            <Card>
              {/* Chart Header */}
              <div style={{ marginBottom: 'var(--space-lg)' }}>
                <div style={{ 
                  fontSize: 13, 
                  color: 'var(--color-text-secondary)', 
                  marginBottom: 'var(--space-xs)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  fontWeight: 500,
                }}>
                  Historical Range
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-sm)' }}>
                  <div style={{ 
                    width: 8, 
                    height: 28, 
                    backgroundColor: 'var(--color-body-text)', 
                    borderRadius: 3,
                    opacity: 0.8,
                  }} />
                  <span style={{ fontSize: 32, fontWeight: 300, color: 'var(--color-text-primary)' }}>
                    0.64 - 0.75
                  </span>
                  <span style={{ fontSize: 15, color: 'var(--color-text-secondary)' }}>mg/dL</span>
                </div>
                <div style={{ 
                  fontSize: 13, 
                  color: 'var(--color-text-tertiary)', 
                  marginTop: 'var(--space-xs)',
                }}>
                  2020 - 2025 • 5 readings
                </div>
              </div>

              {/* Diverging Column Chart */}
              <DivergingColumnChart
                data={creatinineChartData}
                xAxisLabels={['2020', '2021', '2022', '2023', '2024']}
                baseline={0}
                height={200}
                color="var(--color-body-text)"
              />

              {/* Trend Indicator */}
              <div 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 'var(--space-sm)',
                  marginTop: 'var(--space-lg)',
                  padding: 'var(--space-md)',
                  backgroundColor: 'var(--color-heart-bg)',
                  borderRadius: 'var(--radius-md)',
                }}
              >
                <TrendingUp size={18} color="var(--color-heart-text)" style={{ transform: 'rotate(180deg)' }} />
                <span style={{ fontSize: 13, color: 'var(--color-heart-text)', fontWeight: 500 }}>
                  Trending slightly below optimal range
                </span>
              </div>
            </Card>
          </div>

          {/* Historical Readings Section */}
          <div style={{ padding: '0 var(--space-xl) var(--space-xl)' }}>
            <SectionHeader 
              title="History" 
              badge={`${biomarkerReadings.length} results`}
            />
            
            <BiomarkerListCard
              readings={biomarkerReadings}
              separateCards={true}
            />
          </div>

          {/* About Section */}
          <div style={{ padding: '0 var(--space-xl) var(--space-3xl)' }}>
            <Card>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-md)' }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--color-sleep-bg)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <FlaskConical size={18} color="var(--color-sleep-text)" />
                </div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: 'var(--space-xs)' }}>
                    About Creatinine
                  </h3>
                  <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                    Creatinine is a waste product produced by your muscles from the breakdown of creatine. 
                    Your kidneys filter creatinine from your blood and excrete it in urine. 
                    Low creatinine levels may indicate reduced muscle mass, liver problems, or a diet low in protein.
                  </p>
                </div>
              </div>
            </Card>
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

export default BiomarkerResultsPage;
