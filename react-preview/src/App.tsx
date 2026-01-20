/**
 * Component Preview - Showcases all React components from components.tsx
 */

import { useState } from 'react';
import {
  Avatar,
  Card,
  Button,
  SegmentedControl,
  Toggle,
  ProgressBar,
  NavHeader,
  InfoRow,
  SettingsItem,
  SettingsItemEditable,
  SettingsItemPlain,
  SelectionCard,
  DropdownSelect,
  AppointmentCard,
  FeatureCard,
  HeroCard,
  Badge,
  PartnerBadge,
  TabBar,
  ChatMessage,
  ChatDate,
  ChatInput,
  ChatDisclaimer,
  CircularProgress,
  MetricCard,
  SectionHeader,
  Modal,
  ModalHeader,
  DeviceCard,
  SettingsSectionCard,
  FAB,
  DiscoveryCard,
  DiscoveryCarousel,
  ProductThumbnail,
  FilledButton,
  DateNavigator,
  ListItem,
  NavigationHeader,
  ScreenHeader,
  BarChart,
  DivergingColumnChart,
  StatsCard,
  DeviceStatusIndicator,
  CategoryCard,
  ContentGridCard,
  PageTitle,
  SubsectionTitle,
  TrendChart,
  TrendHeader,
  ChartModalHeader,
  AreaChart,
  ChallengeCard,
  EmptyStateCard,
  ProfileInfoButton,
  PromoCard,
  FeatureToggleRow,
  ProfileHeader,
  globalStyles,
  // New medical/health components
  CategoryPill,
  CategoryPillScroll,
  BiomarkerListCard,
  BiologicalAgeGauge,
  HealthScoreCard,
  DoctorAnalysisCard,
  RecommendationBubble,
  RecommendationStack,
  // Notification/Message list components
  NotificationListDemo,
  // iOS Status Bar (from assets)
  StatusBar,
} from './components';

import {
  Plus,
  Activity,
  Heart,
  Moon,
  User,
  Settings,
  Fingerprint,
  Droplets,
  Pill,
  Brain,
  Leaf,
  Flame,
  Sparkles,
  CheckCircle,
  TrendingDown,
  Bell,
  Star,
} from 'lucide-react';
import type { TabId } from './components';

function App() {
  const [selectedSegment, setSelectedSegment] = useState('Week');
  const [toggleState, setToggleState] = useState(false);
  const [activeTab, setActiveTab] = useState<TabId>('home');
  const [chatInput, setChatInput] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <style>{globalStyles}</style>
      <div style={{ 
        maxWidth: 430, 
        margin: '0 auto', 
        backgroundColor: 'var(--color-bg-primary)',
        minHeight: '100vh',
        paddingBottom: 100
      }}>
        {/* Header */}
        <div style={{ padding: 'var(--space-xl)', textAlign: 'center', borderBottom: '1px solid var(--color-border-separator)' }}>
          <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>React Components Preview</h1>
          <p style={{ color: 'var(--color-text-secondary)' }}>Original components from components.tsx</p>
        </div>

        <div style={{ padding: 'var(--space-xl)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3xl)' }}>

          {/* ============================================ */}
          {/* iOS STATUS BAR (from assets) */}
          {/* ============================================ */}
          <section>
            <SubsectionTitle>iOS Status Bar</SubsectionTitle>
            <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', marginBottom: 'var(--space-md)' }}>
              Icons extracted from iPhone 13 Pro Max.svg asset
            </p>
            
            {/* Complete Status Bar - Dark on Light */}
            <div style={{ marginTop: 'var(--space-md)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', backgroundColor: 'var(--color-bg-secondary)' }}>
              <StatusBar variant="dark" batteryLevel={100} />
            </div>
            
            {/* Complete Status Bar - Light on Dark */}
            <div style={{ marginTop: 'var(--space-md)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', backgroundColor: '#1a1a1a' }}>
              <StatusBar variant="light" batteryLevel={75} />
            </div>
            
            {/* Without Dynamic Island */}
            <div style={{ marginTop: 'var(--space-md)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', backgroundColor: 'var(--color-bg-secondary)' }}>
              <StatusBar variant="dark" showDynamicIsland={false} batteryLevel={45} />
            </div>
          </section>

          {/* ============================================ */}
          {/* AVATARS */}
          {/* ============================================ */}
          <section>
            <SubsectionTitle>Avatar</SubsectionTitle>
            <Card>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-lg)', flexWrap: 'wrap' }}>
                <Avatar initials="SM" size="sm" />
                <Avatar initials="MD" size="md" />
                <Avatar initials="LG" size="lg" />
                <Avatar initials="XL" size="xl" />
              </div>
            </Card>
          </section>

          {/* ============================================ */}
          {/* BUTTONS */}
          {/* ============================================ */}
          <section>
            <SubsectionTitle>Button</SubsectionTitle>
            <Card>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                <Button>Primary Button</Button>
                <Button variant="secondary">Secondary Button</Button>
                <div style={{ display: 'flex', gap: 'var(--space-md)' }}>
                  <Button variant="icon" icon={<Bell size={20} />} />
                  <Button variant="icon-dark" icon={<Plus size={20} />} />
                </div>
                <Button fullWidth>Full Width Button</Button>
              </div>
            </Card>
          </section>

          {/* ============================================ */}
          {/* CARDS */}
          {/* ============================================ */}
          <section>
            <SubsectionTitle>Card</SubsectionTitle>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
              <Card>Default Card with content</Card>
              <Card category="activity">Activity Category Card</Card>
              <Card category="body">Body Category Card</Card>
              <Card category="heart">Heart Category Card</Card>
              <Card category="sleep">Sleep Category Card</Card>
              <Card category="success">Success Category Card</Card>
              <Card shadow>Card with Shadow</Card>
            </div>
          </section>

          {/* ============================================ */}
          {/* SEGMENTED CONTROL */}
          {/* ============================================ */}
          <section>
            <SubsectionTitle>Segmented Control</SubsectionTitle>
            <Card>
              <SegmentedControl
                options={['Day', 'Week', 'Month', 'Year']}
                selected={selectedSegment}
                onChange={setSelectedSegment}
                fullWidth
              />
            </Card>
          </section>

          {/* ============================================ */}
          {/* TOGGLE */}
          {/* ============================================ */}
          <section>
            <SubsectionTitle>Toggle</SubsectionTitle>
            <Card>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-lg)' }}>
                <Toggle checked={toggleState} onChange={setToggleState} />
                <span>{toggleState ? 'On' : 'Off'}</span>
              </div>
            </Card>
          </section>

          {/* ============================================ */}
          {/* PROGRESS BARS */}
          {/* ============================================ */}
          <section>
            <SubsectionTitle>Progress Bar</SubsectionTitle>
            <Card>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
                <ProgressBar progress={25} />
                <ProgressBar progress={50} />
                <ProgressBar progress={75} />
                <ProgressBar progress={100} />
              </div>
            </Card>
          </section>

          {/* ============================================ */}
          {/* CIRCULAR PROGRESS */}
          {/* ============================================ */}
          <section>
            <SubsectionTitle>Circular Progress</SubsectionTitle>
            <Card>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-xl)', justifyContent: 'center' }}>
                <CircularProgress value={3500} max={10000} size={80} />
                <CircularProgress value={7500} max={10000} size={100} />
                <CircularProgress value={9200} max={10000} size={120} />
              </div>
            </Card>
          </section>

          {/* ============================================ */}
          {/* BADGES */}
          {/* ============================================ */}
          <section>
            <SubsectionTitle>Badges</SubsectionTitle>
            <Card>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-md)' }}>
                <Badge>Default</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="activity">Activity</Badge>
                <Badge variant="body">Body</Badge>
                <Badge variant="heart">Heart</Badge>
                <Badge showDot>With Dot</Badge>
                <PartnerBadge label="W" />
              </div>
            </Card>
          </section>

          {/* ============================================ */}
          {/* NAV HEADER */}
          {/* ============================================ */}
          <section>
            <SubsectionTitle>Navigation Headers</SubsectionTitle>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', marginLeft: 'calc(var(--space-xl) * -1)', marginRight: 'calc(var(--space-xl) * -1)' }}>
              <NavHeader title="Settings" showBack showClose />
              <NavHeader title="Profile" showBack bordered />
            </div>
          </section>

          {/* ============================================ */}
          {/* NAVIGATION HEADER (Avatar) */}
          {/* ============================================ */}
          <section>
            <SubsectionTitle>Navigation Header (Avatar)</SubsectionTitle>
            <div style={{ marginLeft: 'calc(var(--space-xl) * -1)', marginRight: 'calc(var(--space-xl) * -1)' }}>
              <NavigationHeader
                avatar={{ initials: 'KE' }}
                title="January 17"
                rightContent={
                  <>
                    <Button variant="icon" icon={<Bell size={20} />} />
                    <Button variant="icon" icon={<Plus size={20} />} />
                  </>
                }
              />
            </div>
          </section>

          {/* ============================================ */}
          {/* SCREEN HEADER */}
          {/* ============================================ */}
          <section>
            <SubsectionTitle>Screen Header</SubsectionTitle>
            <div style={{ marginLeft: 'calc(var(--space-xl) * -1)', marginRight: 'calc(var(--space-xl) * -1)' }}>
              <ScreenHeader title="ACTIVITY" />
            </div>
          </section>

          {/* ============================================ */}
          {/* MODAL HEADER */}
          {/* ============================================ */}
          <section>
            <SubsectionTitle>Modal Header</SubsectionTitle>
            <ModalHeader
              title="SELECT DATE"
              actionLabel="Save"
            />
          </section>

          {/* ============================================ */}
          {/* INFO ROW */}
          {/* ============================================ */}
          <section>
            <SubsectionTitle>Info Row</SubsectionTitle>
            <Card padding="none">
              <InfoRow label="Distance" value="4.2 km" />
              <div style={{ borderTop: '1px solid var(--color-border-separator)' }} />
              <InfoRow label="Duration" value="45 min" />
              <div style={{ borderTop: '1px solid var(--color-border-separator)' }} />
              <InfoRow label="Calories" value="320 kcal" />
            </Card>
          </section>

          {/* ============================================ */}
          {/* SETTINGS ITEMS */}
          {/* ============================================ */}
          <section>
            <SubsectionTitle>Settings Items</SubsectionTitle>
            <Card padding="none">
              <SettingsItem
                icon={<User size={20} />}
                iconCategory="body"
                title="Account"
                showChevron
              />
              <div style={{ borderTop: '1px solid var(--color-border-separator)' }} />
              <SettingsItem
                icon={<Bell size={20} />}
                iconCategory="activity"
                title="Notifications"
                toggle={{ checked: toggleState, onChange: setToggleState }}
                showChevron={false}
              />
              <div style={{ borderTop: '1px solid var(--color-border-separator)' }} />
              <SettingsItem
                icon={<Settings size={20} />}
                iconCategory="sleep"
                title="Language"
                value="English"
                showChevron
              />
            </Card>
          </section>

          {/* ============================================ */}
          {/* SETTINGS ITEM EDITABLE */}
          {/* ============================================ */}
          <section>
            <SubsectionTitle>Settings Item Editable</SubsectionTitle>
            <Card padding="none">
              <SettingsItemEditable
                icon={<Activity size={20} />}
                title="Daily Goal"
                value="10,000"
              />
            </Card>
          </section>

          {/* ============================================ */}
          {/* SETTINGS ITEM PLAIN */}
          {/* ============================================ */}
          <section>
            <SubsectionTitle>Settings Item Plain</SubsectionTitle>
            <Card padding="none">
              <SettingsItemPlain icon={<Fingerprint size={20} />} title="Privacy Settings" />
            </Card>
          </section>

          {/* ============================================ */}
          {/* SELECTION CARD */}
          {/* ============================================ */}
          <section>
            <SubsectionTitle>Selection Card</SubsectionTitle>
            <SelectionCard
              icon={<Heart size={20} />}
              iconCategory="heart"
              title="Blood Pressure"
              subtitle="Last measured 2 days ago"
              showEdit
            />
          </section>

          {/* ============================================ */}
          {/* DROPDOWN SELECT */}
          {/* ============================================ */}
          <section>
            <SubsectionTitle>Dropdown Select</SubsectionTitle>
            <DropdownSelect label="Select a category" />
          </section>

          {/* ============================================ */}
          {/* APPOINTMENT CARD */}
          {/* ============================================ */}
          <section>
            <SubsectionTitle>Appointment Card</SubsectionTitle>
            <AppointmentCard
              imageUrl="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop"
              time="Today, 2:30 PM"
              doctorName="Dr. Sarah Johnson"
            />
          </section>

          {/* ============================================ */}
          {/* LIST ITEM */}
          {/* ============================================ */}
          <section>
            <SubsectionTitle>List Item</SubsectionTitle>
            <Card padding="none">
              <ListItem
                icon={<Activity size={20} />}
                iconCategory="activity"
                title="Morning Run"
                subtitle="5.2 km • 32 min"
                value="320 cal"
              />
              <div style={{ borderTop: '1px solid var(--color-border-separator)' }} />
              <ListItem
                avatar={{ initials: 'JD' }}
                title="John Doe"
                subtitle="Completed a workout"
              />
            </Card>
          </section>

          {/* ============================================ */}
          {/* NOTIFICATION LIST */}
          {/* ============================================ */}
          <section>
            <SubsectionTitle>Notification List</SubsectionTitle>
            <NotificationListDemo />
          </section>

          {/* ============================================ */}
          {/* METRIC CARD */}
          {/* ============================================ */}
          <section>
            <SubsectionTitle>Metric Card</SubsectionTitle>
            <MetricCard
              icon={<Activity size={20} />}
              category="activity"
              label="Steps"
              value="8,432"
              unit="steps"
              subtitle="Goal: 10,000"
              timestamp="Today"
            />
          </section>

          {/* ============================================ */}
          {/* STATS CARD */}
          {/* ============================================ */}
          <section>
            <SubsectionTitle>Stats Card</SubsectionTitle>
            <StatsCard
              label="Steps today"
              value="8,432"
              progress={{ current: 8432, goal: 10000 }}
              infoRows={[
                { label: 'Distance', value: '5.8 km' },
                { label: 'Calories', value: '342 kcal' },
              ]}
            />
          </section>

          {/* ============================================ */}
          {/* SECTION HEADER */}
          {/* ============================================ */}
          <section>
            <SectionHeader
              title="Activity"
              badge="Today"
              action={<Button variant="secondary">See All</Button>}
            />
            <Card>Section content goes here</Card>
          </section>

          {/* ============================================ */}
          {/* DATE NAVIGATOR */}
          {/* ============================================ */}
          <section>
            <SubsectionTitle>Date Navigator</SubsectionTitle>
            <DateNavigator
              label="January 2025"
              onPrevious={() => {}}
              onNext={() => {}}
            />
          </section>

          {/* ============================================ */}
          {/* DEVICE CARD */}
          {/* ============================================ */}
          <section>
            <SubsectionTitle>Device Card</SubsectionTitle>
            <DeviceCard
              name="ScanWatch 2"
              syncedDaysAgo={1}
              batteryPercent={85}
            />
          </section>

          {/* ============================================ */}
          {/* DEVICE STATUS INDICATOR */}
          {/* ============================================ */}
          <section>
            <SubsectionTitle>Device Status Indicator</SubsectionTitle>
            <Card>
              <div style={{ display: 'flex', gap: 'var(--space-lg)' }}>
                <DeviceStatusIndicator isConnected />
                <DeviceStatusIndicator isConnected={false} />
              </div>
            </Card>
          </section>

          {/* ============================================ */}
          {/* CATEGORY CARD */}
          {/* ============================================ */}
          <section>
            <SubsectionTitle>Category Card</SubsectionTitle>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
              <CategoryCard icon={<Activity size={24} />} label="Steps" count={12} />
              <CategoryCard icon={<Heart size={24} />} label="Heart Rate" count={8} />
            </div>
          </section>

          {/* ============================================ */}
          {/* SETTINGS SECTION CARD */}
          {/* ============================================ */}
          <section>
            <SubsectionTitle>Settings Section Card</SubsectionTitle>
            <SettingsSectionCard
              icon={<Bell size={24} />}
              title="Notifications"
              description="Manage your notification preferences and alerts"
            >
              <SettingsItem title="Push Notifications" toggle={{ checked: true, onChange: () => {} }} showChevron={false} />
              <div style={{ borderTop: '1px solid var(--color-border-separator)' }} />
              <SettingsItem title="Email Notifications" toggle={{ checked: false, onChange: () => {} }} showChevron={false} />
            </SettingsSectionCard>
          </section>

          {/* ============================================ */}
          {/* FEATURE CARD */}
          {/* ============================================ */}
          <section>
            <SubsectionTitle>Feature Card</SubsectionTitle>
            <FeatureCard
              imageUrl="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=200&fit=crop"
              title="Track Your Sleep"
              description="Monitor your sleep patterns and get personalized insights to improve your rest."
              buttonText="Get Started"
              showCoveredBadge
            />
          </section>

          {/* ============================================ */}
          {/* HERO CARD */}
          {/* ============================================ */}
          <section>
            <SubsectionTitle>Hero Card</SubsectionTitle>
            <HeroCard
              imageUrl="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=220&fit=crop"
              title="Start Your Journey"
              subtitle="Track, analyze, and improve your health"
              buttonText="Learn More"
            />
          </section>

          {/* ============================================ */}
          {/* DISCOVERY CAROUSEL */}
          {/* ============================================ */}
          <section>
            <SubsectionTitle>Discovery Cards</SubsectionTitle>
            <DiscoveryCarousel>
              <DiscoveryCard
                illustration={<Activity size={48} color="#fff" />}
                illustrationBg="#5C8A4D"
                title="Track Steps"
                status="Start now"
              />
              <DiscoveryCard
                illustration={<Heart size={48} color="#fff" />}
                illustrationBg="#C75B7A"
                title="Heart Health"
                status="Completed"
                isCompleted
              />
              <DiscoveryCard
                illustration={<Moon size={48} color="#fff" />}
                illustrationBg="#4A6FA5"
                title="Sleep Better"
                status="3 lessons left"
              />
            </DiscoveryCarousel>
          </section>

          {/* ============================================ */}
          {/* PRODUCT THUMBNAILS */}
          {/* ============================================ */}
          <section>
            <SubsectionTitle>Product Thumbnails</SubsectionTitle>
            <Card>
              <div style={{ display: 'flex', gap: 'var(--space-md)' }}>
                <ProductThumbnail>
                  <img src="/products/Longevity Complex.png" alt="Longevity Complex" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </ProductThumbnail>
                <ProductThumbnail>
                  <img src="/products/Reservatrol.png" alt="Reservatrol" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </ProductThumbnail>
                <ProductThumbnail>
                  <img src="/products/Omega 3.png" alt="Omega 3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </ProductThumbnail>
              </div>
            </Card>
          </section>

          {/* ============================================ */}
          {/* CONTENT GRID CARD */}
          {/* ============================================ */}
          <section>
            <SubsectionTitle>Content Grid Card</SubsectionTitle>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-md)' }}>
              <ContentGridCard
                imageUrl="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&h=200&fit=crop"
                icon={<Activity size={16} />}
                label="Workout"
              />
              <ContentGridCard
                imageUrl="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=200&h=200&fit=crop"
                icon={<Moon size={16} />}
                label="Sleep"
              />
            </div>
          </section>

          {/* ============================================ */}
          {/* BAR CHART */}
          {/* ============================================ */}
          <section>
            <SubsectionTitle>Bar Chart</SubsectionTitle>
            <Card>
              <BarChart
                data={[3200, 5400, 7800, 4200, 8500, 9200, 6800]}
                labels={['M', 'T', 'W', 'T', 'F', 'S', 'S']}
                maxValue={10000}
                height={180}
              />
            </Card>
          </section>

          {/* ============================================ */}
          {/* DIVERGING COLUMN CHART */}
          {/* ============================================ */}
          <section>
            <SubsectionTitle>Diverging Column Chart</SubsectionTitle>
            <Card>
              {/* Range indicator like in the reference */}
              <div style={{ marginBottom: 'var(--space-lg)' }}>
                <div style={{ 
                  fontSize: 13, 
                  color: 'var(--color-text-secondary)', 
                  marginBottom: 'var(--space-xs)' 
                }}>
                  Range
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-sm)' }}>
                  <div style={{ 
                    width: 8, 
                    height: 24, 
                    backgroundColor: 'var(--color-body-text)', 
                    borderRadius: 2,
                    opacity: 0.7 
                  }} />
                  <span style={{ fontSize: 28, fontWeight: 300 }}>4.2 - 4.6</span>
                  <span style={{ fontSize: 15, color: 'var(--color-text-secondary)' }}>mEq/L</span>
                </div>
                <div style={{ 
                  fontSize: 13, 
                  color: 'var(--color-text-tertiary)', 
                  marginTop: 'var(--space-xs)' 
                }}>
                  Jan 2, 2026 - Jan 4, 2027
                </div>
              </div>
              <DivergingColumnChart
                data={[
                  { min: -0.3, max: 0.1 },
                  { min: -0.2, max: 0.05 },
                  { min: -0.1, max: 0.2 },
                  { min: 0.1, max: 0.5 },
                  { min: 0.2, max: 0.8 },
                ]}
                xAxisLabels={['2020', '2021', '2022', '2023', '2024']}
                baseline={0}
                height={180}
              />
            </Card>
          </section>

          {/* ============================================ */}
          {/* AREA CHART */}
          {/* ============================================ */}
          <section>
            <SubsectionTitle>Area Chart</SubsectionTitle>
            <Card>
              <AreaChart
                data={[65, 68, 72, 70, 75, 73, 78, 76, 80]}
                height={140}
              />
            </Card>
          </section>

          {/* ============================================ */}
          {/* TREND CHART */}
          {/* ============================================ */}
          <section>
            <SubsectionTitle>Trend Chart</SubsectionTitle>
            <Card>
              <TrendHeader value="+2.3 kg" isPositive={false} />
              <TrendChart
                data={[72, 73, 74, 73.5, 74.2, 74.8, 75.1]}
                yAxisLabels={['76', '74', '72', '70']}
                xAxisLabels={[
                  { label: 'Jan', subLabel: '-0.5' },
                  { label: 'Feb' },
                  { label: 'Mar' },
                  { label: 'Apr', subLabel: '+1.2' },
                  { label: 'May' },
                  { label: 'Jun' },
                  { label: 'Jul', subLabel: '+1.6' },
                ]}
                height={280}
                projectionStartIndex={5}
              />
            </Card>
          </section>

          {/* ============================================ */}
          {/* CHAT COMPONENTS */}
          {/* ============================================ */}
          <section>
            <SubsectionTitle>Chat Components</SubsectionTitle>
            <Card>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                <ChatDate date="Today" />
                <ChatMessage
                  content="Hello! How can I help you with your health goals today?"
                  avatarUrl="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop"
                  signature="Dr. AI"
                />
                <ChatMessage
                  content="I'd like to understand my sleep patterns better."
                  sent
                />
              </div>
            </Card>
            <div style={{ marginTop: 'var(--space-lg)' }}>
              <ChatInput
                placeholder="Ask anything..."
                value={chatInput}
                onChange={setChatInput}
              />
              <ChatDisclaimer />
            </div>
          </section>

          {/* ============================================ */}
          {/* CHALLENGE CARD */}
          {/* ============================================ */}
          <section>
            <SubsectionTitle>Challenge Card</SubsectionTitle>
            <ChallengeCard
              illustration={
                <div style={{ 
                  width: 120, 
                  height: 80, 
                  background: 'linear-gradient(135deg, #4A6CF7 0%, #7C3AED 100%)',
                  borderRadius: 12,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Activity size={40} color="#fff" />
                </div>
              }
              title="10K Steps Challenge"
              description="Walk 10,000 steps every day for 7 days"
            />
          </section>

          {/* ============================================ */}
          {/* EMPTY STATE CARD */}
          {/* ============================================ */}
          <section>
            <SubsectionTitle>Empty State Card</SubsectionTitle>
            <EmptyStateCard
              illustration={<Moon size={64} color="var(--color-text-tertiary)" />}
              message="No sleep data recorded yet"
            />
          </section>

          {/* ============================================ */}
          {/* PROFILE COMPONENTS */}
          {/* ============================================ */}
          <section>
            <SubsectionTitle>Profile Components</SubsectionTitle>
            <div style={{ marginLeft: 'calc(var(--space-xl) * -1)', marginRight: 'calc(var(--space-xl) * -1)' }}>
              <ProfileHeader
                avatar={{ initials: 'KE' }}
                name="Karl Eyr"
              />
            </div>
            <div style={{ marginTop: 'var(--space-md)' }}>
              <ProfileInfoButton text="Complete your profile" />
            </div>
          </section>

          {/* ============================================ */}
          {/* PROMO CARD */}
          {/* ============================================ */}
          <section>
            <SubsectionTitle>Promo Card</SubsectionTitle>
            <PromoCard
              badge={<Badge variant="success">New</Badge>}
              title="Premium Features"
              description="Unlock advanced insights, personalized coaching, and more with Premium."
              linkText="Learn more about Premium"
            />
          </section>

          {/* ============================================ */}
          {/* FEATURE TOGGLE ROW */}
          {/* ============================================ */}
          <section>
            <SubsectionTitle>Feature Toggle Row</SubsectionTitle>
            <FeatureToggleRow
              image={<Activity size={40} color="var(--color-text-secondary)" />}
              title="Auto-sync"
              badge={<Badge variant="success">Recommended</Badge>}
              description="Automatically sync your data when the app is open"
              checked={toggleState}
              onChange={setToggleState}
            />
          </section>

          {/* ============================================ */}
          {/* FLOATING ACTION BUTTON */}
          {/* ============================================ */}
          <section>
            <SubsectionTitle>Floating Action Button</SubsectionTitle>
            <Card>
              <div style={{ display: 'flex', gap: 'var(--space-lg)', justifyContent: 'center' }}>
                <FAB icon={<Plus size={24} />} />
                <FAB icon={<Plus size={24} />} variant="primary" />
              </div>
            </Card>
          </section>

          {/* ============================================ */}
          {/* FILLED BUTTON */}
          {/* ============================================ */}
          <section>
            <SubsectionTitle>Filled Button</SubsectionTitle>
            <Card>
              <FilledButton>Shop now</FilledButton>
            </Card>
          </section>

          {/* ============================================ */}
          {/* TAB BAR */}
          {/* ============================================ */}
          <section>
            <SubsectionTitle>Tab Bar</SubsectionTitle>
            <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', marginBottom: 'var(--space-md)' }}>
              Standardized tabs: Home, Coach, Clinic, Shop, Inbox, Profile
            </p>
            <div style={{ marginLeft: 'calc(var(--space-xl) * -1)', marginRight: 'calc(var(--space-xl) * -1)' }}>
              <TabBar
                activeId={activeTab}
                onChange={setActiveTab}
              />
            </div>
          </section>

          {/* ============================================ */}
          {/* MODAL */}
          {/* ============================================ */}
          <section>
            <SubsectionTitle>Modal</SubsectionTitle>
            <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
            <Modal
              isOpen={modalOpen}
              onClose={() => setModalOpen(false)}
              title="Example Modal"
            >
              <div style={{ textAlign: 'center', padding: 'var(--space-xl)' }}>
                <PageTitle>Modal Content</PageTitle>
                <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-xl)' }}>
                  This is an example of the Modal component from your design system.
                </p>
                <Button fullWidth onClick={() => setModalOpen(false)}>
                  Close Modal
                </Button>
              </div>
            </Modal>
          </section>

          {/* ============================================ */}
          {/* TYPOGRAPHY */}
          {/* ============================================ */}
          <section>
            <SubsectionTitle>Typography</SubsectionTitle>
            <Card>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                <PageTitle>Page Title</PageTitle>
                <SubsectionTitle>Subsection Title</SubsectionTitle>
                <p style={{ fontSize: 17, color: 'var(--color-text-primary)' }}>Body text - Primary</p>
                <p style={{ fontSize: 15, color: 'var(--color-text-secondary)' }}>Body text - Secondary</p>
                <p style={{ fontSize: 13, color: 'var(--color-text-tertiary)' }}>Caption text - Tertiary</p>
              </div>
            </Card>
          </section>

          {/* ============================================ */}
          {/* NEW MEDICAL/HEALTH COMPONENTS */}
          {/* ============================================ */}
          <div style={{ 
            marginTop: 'var(--space-3xl)', 
            paddingTop: 'var(--space-xl)', 
            borderTop: '2px solid var(--color-brand-accent)' 
          }}>
            <PageTitle>Medical & Health Components</PageTitle>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-xl)' }}>
              New components for health tracking and medical data display
            </p>
          </div>

          {/* ============================================ */}
          {/* CATEGORY PILLS */}
          {/* ============================================ */}
          <section>
            <SubsectionTitle>Category Pills</SubsectionTitle>
            <div style={{ marginLeft: 'calc(var(--space-xl) * -1)', marginRight: 'calc(var(--space-xl) * -1)' }}>
              <CategoryPillScroll>
                <CategoryPill
                  icon={<Droplets size={16} />}
                  label="Blod"
                  iconBgColor="#FCE4EC"
                  iconColor="#C75B7A"
                />
                <CategoryPill
                  icon={<Heart size={16} />}
                  label="Hjerte"
                  iconBgColor="#FCE4EC"
                  iconColor="#C75B7A"
                />
                <CategoryPill
                  icon={<Star size={16} />}
                  label="Hormoner"
                  iconBgColor="#FEF3C7"
                  iconColor="#D97706"
                />
                <CategoryPill
                  icon={<Droplets size={16} />}
                  label="Nyrer"
                  iconBgColor="#DBEAFE"
                  iconColor="#3B82F6"
                />
                <CategoryPill
                  icon={<Leaf size={16} />}
                  label="Lever"
                  iconBgColor="#D1FAE5"
                  iconColor="#059669"
                />
                <CategoryPill
                  icon={<Pill size={16} />}
                  label="Vitaminer"
                  iconBgColor="#FEF3C7"
                  iconColor="#D97706"
                />
                <CategoryPill
                  icon={<Flame size={16} />}
                  label="Metabolisme"
                  iconBgColor="#FEF3C7"
                  iconColor="#D97706"
                />
                <CategoryPill
                  icon={<Brain size={16} />}
                  label="Hjerne"
                  iconBgColor="#EDE9FE"
                  iconColor="#7C3AED"
                />
              </CategoryPillScroll>
            </div>
          </section>

          {/* ============================================ */}
          {/* BIOMARKER LIST CARD */}
          {/* ============================================ */}
          <section>
            <SubsectionTitle>Biomarker List Card (Lab Results)</SubsectionTitle>
            <BiomarkerListCard
              readings={[
                { label: 'eGFR - Low Range', value: 4.2, unit: 'mL/min', status: 'in-range', date: 'September 2026', category: 'body' },
                { label: 'Creatinine', value: 0.64, unit: 'mg/dL', status: 'below-range', date: 'August 2026', category: 'body' },
                { label: 'eGFR - High Range', value: '>60', unit: 'mL/min', status: 'above-range', date: 'July 2026', category: 'body' },
                { label: 'Creatinine', value: 0.64, unit: 'mg/dL', status: 'below-range', date: 'August 2026', category: 'body' },
              ]}
              separateCards={true}
            />
          </section>
          
          {/* ============================================ */}
          {/* BIOMARKER LIST CARD (GROUPED) */}
          {/* ============================================ */}
          <section>
            <SubsectionTitle>Biomarker List Card (Grouped)</SubsectionTitle>
            <BiomarkerListCard
              readings={[
                { label: 'Vitamin B9 (Folat)', value: 53.5, unit: 'nmol/L', status: 'optimal', date: 'Jan 2026', category: 'body' },
                { label: 'Vitamin D', value: 202, unit: 'nmol/L', status: 'optimal', date: 'Jan 2026', category: 'body' },
                { label: 'Magnesium', value: 0.68, unit: 'nmol/L', status: 'normal', date: 'Jan 2026', category: 'heart' },
              ]}
              separateCards={false}
            />
          </section>

          {/* ============================================ */}
          {/* BIOLOGICAL AGE GAUGE */}
          {/* ============================================ */}
          <section>
            <SubsectionTitle>Biological Age Gauge</SubsectionTitle>
            <BiologicalAgeGauge
              biologicalAge={27}
              chronologicalAge={30}
              label="Biologisk alder"
              youngerLabel="Yngre"
              actualLabel="Faktisk alder"
              olderLabel="Eldre"
              description="Din biologiske alder er 3 år yngre enn din kronologiske alder basert på prøvesvar fra 28. juni 2024"
            />
          </section>

          {/* ============================================ */}
          {/* HEALTH SCORE CARD - VO2 Max */}
          {/* ============================================ */}
          <section>
            <SubsectionTitle>Health Score Card (VO2 Max)</SubsectionTitle>
            <HealthScoreCard
              label="VO2 maks"
              value={49.6}
              badgeText="God"
              badgeVariant="success"
              infoText="Du er blant topp 20% i forhold til befolkningen."
              infoIcon={<Sparkles size={16} />}
            />
          </section>

          {/* ============================================ */}
          {/* HEALTH SCORE CARD - Heart Health */}
          {/* ============================================ */}
          <section>
            <SubsectionTitle>Health Score Card (Heart Health)</SubsectionTitle>
            <HealthScoreCard
              label="Din hjertehelse"
              value={78}
              maxValue={100}
              badgeText="God"
              badgeVariant="success"
              showProgress
              progressValue={78}
              description="Din hjerte-score er god, noe som indikerer lav risiko for å utvikle hjerte- og karsykdommer innen de neste 10 årene."
            />
          </section>

          {/* ============================================ */}
          {/* DOCTOR ANALYSIS CARD */}
          {/* ============================================ */}
          <section>
            <SubsectionTitle>Doctor Analysis Card</SubsectionTitle>
            <DoctorAnalysisCard
              title="Legeanalyse"
              date="Legesvar den 23.06.24"
              authorDescription="Utviklet sammen med Dr. Sol Malm Hagen basert på dine helsedata og helsemål"
              summaryTitle="Oppsummering"
              highlightedContent={{
                text: "Fra dine testresultater... oksygen-opptak (VO2 maks) er et enestående mål på kondisjon og aerob utholdenhet. Muligheten til å se den nåværende",
                backgroundColor: 'var(--color-brand-primary)',
                textColor: 'var(--color-text-inverse)',
              }}
            />
          </section>

          {/* ============================================ */}
          {/* RECOMMENDATION BUBBLES */}
          {/* ============================================ */}
          <section>
            <SubsectionTitle>Recommendation Bubbles</SubsectionTitle>
            <RecommendationStack>
              <RecommendationBubble
                icon={<CheckCircle size={16} />}
                title="Ta D-vitamin tilskudd om vinteren"
                description="Vitamin D-nivået ditt er litt lavt, det er veldig vanlig. Jeg anbefaler et tilskudd i vinterhalvåret."
                backgroundColor="var(--color-success-bg)"
                iconBgColor="var(--color-bg-secondary)"
                iconColor="var(--color-success-text)"
              />
              <RecommendationBubble
                icon={<TrendingDown size={16} />}
                title="Reduser kolesterol med kosthold og aktivitet"
                description="Kolesterolet ditt ligger litt høyere enn anbefalt, men ikke i en alvorlig grad. Jeg anbefaler at du har fokus på et sunt kosthold og regelmessig fysisk aktivitet."
                backgroundColor="var(--color-success-bg)"
                iconBgColor="var(--color-bg-secondary)"
                iconColor="var(--color-success-text)"
              />
            </RecommendationStack>
          </section>

        </div>
      </div>
    </>
  );
}

export default App;
