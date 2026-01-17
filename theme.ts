/**
 * Withings "Soft Wellness" Design System
 * Theme Configuration for React Native / Expo
 * 
 * Based on Withings Health Mate app analysis
 */

// ============================================================================
// COLOR TOKENS
// ============================================================================

export const colors = {
  // Background Colors
  background: {
    /** Main app background — warm off-white */
    primary: '#F7F6F4',
    /** Card surfaces, modals */
    secondary: '#FFFFFF',
    /** Slightly darker for depth, tab bars */
    elevated: '#EDEBE8',
    /** Modal backdrop dimming */
    overlay: 'rgba(158, 158, 158, 0.4)',
  },

  // Brand Colors
  brand: {
    /** Primary navy — avatars, primary buttons */
    primary: '#2B3A67',
    /** Charts, progress indicators, interactive */
    accent: '#4A6CF7',
  },

  // Category/Semantic Colors
  category: {
    activity: {
      background: '#F9F3DC',
      text: '#8B7B3D',
      icon: '#8B7B3D',
    },
    body: {
      background: '#EDE4F3',
      text: '#6B4D8A',
      icon: '#6B4D8A',
    },
    heart: {
      background: '#FCE4EC',
      text: '#C75B7A',
      icon: '#C75B7A',
    },
    sleep: {
      background: '#E3F2FD',
      text: '#4A6FA5',
      icon: '#4A6FA5',
    },
    success: {
      background: '#E8F5E9',
      text: '#4CAF50',
      icon: '#4CAF50',
    },
  },

  // Chart Colors
  chart: {
    primary: '#4A6CF7',
    secondary: '#50C4A1',
    tertiary: '#9575CD',
    areaGradientStart: 'rgba(74, 108, 247, 0.3)',
    areaGradientEnd: 'rgba(74, 108, 247, 0.05)',
  },

  // Text Colors
  text: {
    /** Headlines, primary content */
    primary: '#1A1A1A',
    /** Body text, descriptions */
    secondary: '#5C5C5C',
    /** Captions, timestamps, disabled */
    tertiary: '#9E9E9E',
    /** Text on dark/colored backgrounds */
    inverse: '#FFFFFF',
    /** Interactive text, links */
    link: '#4A6CF7',
  },

  // UI Element Colors
  ui: {
    borderSubtle: '#E5E5E5',
    borderSeparator: '#F0F0F0',
    toggleTrackOn: '#1A1A1A',
    toggleTrackOff: '#E5E5E5',
    toggleThumb: '#FFFFFF',
  },
} as const;

// ============================================================================
// SPACING TOKENS
// ============================================================================

/** Base unit: 8px */
export const spacing = {
  /** 4px */
  xs: 4,
  /** 8px */
  sm: 8,
  /** 12px */
  md: 12,
  /** 16px */
  lg: 16,
  /** 20px - Screen horizontal margins */
  xl: 20,
  /** 24px */
  '2xl': 24,
  /** 32px */
  '3xl': 32,
  /** 40px */
  '4xl': 40,
} as const;

// ============================================================================
// BORDER RADIUS TOKENS
// ============================================================================

export const borderRadius = {
  /** 4px - Small badges, tags */
  xs: 4,
  /** 8px - Buttons, inputs, small cards */
  sm: 8,
  /** 12px - Standard cards, list containers */
  md: 12,
  /** 16px - Large cards, feature cards */
  lg: 16,
  /** 20px - Modal sheets, hero cards */
  xl: 20,
  /** 24px - Bottom sheet top corners */
  '2xl': 24,
  /** Circular elements */
  full: 9999,
} as const;

// ============================================================================
// TYPOGRAPHY TOKENS
// ============================================================================

export const typography = {
  fontFamily: {
    default: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "Helvetica Neue", sans-serif',
  },
  
  // Type scale with all properties
  styles: {
    /** 34px Bold - Large hero numbers (step counts) */
    display: {
      fontSize: 34,
      fontWeight: '700' as const,
      lineHeight: 37,
      letterSpacing: -0.5,
    },
    /** 28px Bold - Screen titles */
    title1: {
      fontSize: 28,
      fontWeight: '700' as const,
      lineHeight: 34,
      letterSpacing: -0.3,
    },
    /** 22px Bold - Section headers */
    title2: {
      fontSize: 22,
      fontWeight: '700' as const,
      lineHeight: 28,
      letterSpacing: -0.2,
    },
    /** 20px Semibold - Card titles */
    title3: {
      fontSize: 20,
      fontWeight: '600' as const,
      lineHeight: 26,
      letterSpacing: 0,
    },
    /** 17px Semibold - List item titles, button text */
    headline: {
      fontSize: 17,
      fontWeight: '600' as const,
      lineHeight: 23,
      letterSpacing: 0,
    },
    /** 17px Regular - Primary body text */
    body: {
      fontSize: 17,
      fontWeight: '400' as const,
      lineHeight: 24,
      letterSpacing: 0,
    },
    /** 15px Regular - Secondary descriptions */
    bodySmall: {
      fontSize: 15,
      fontWeight: '400' as const,
      lineHeight: 21,
      letterSpacing: 0,
    },
    /** 13px Regular - Timestamps, meta info */
    caption: {
      fontSize: 13,
      fontWeight: '400' as const,
      lineHeight: 17,
      letterSpacing: 0.2,
    },
    /** 11px Semibold - All-caps labels */
    captionCaps: {
      fontSize: 11,
      fontWeight: '600' as const,
      lineHeight: 13,
      letterSpacing: 1.5,
      textTransform: 'uppercase' as const,
    },
    /** 24px Bold - Data values in cards */
    metricValue: {
      fontSize: 24,
      fontWeight: '700' as const,
      lineHeight: 26,
      letterSpacing: -0.3,
    },
    /** 15px Regular - Units (kcal, km, %) */
    metricUnit: {
      fontSize: 15,
      fontWeight: '400' as const,
      lineHeight: 17,
      letterSpacing: 0,
    },
    /** 48px Bold - Hero metric display */
    metricHero: {
      fontSize: 48,
      fontWeight: '700' as const,
      lineHeight: 52,
      letterSpacing: -1,
    },
  },
} as const;

// ============================================================================
// SHADOW TOKENS
// ============================================================================

export const shadows = {
  none: {
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  sm: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 3,
    elevation: 1,
  },
  md: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  lg: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 6,
  },
} as const;

// ============================================================================
// ANIMATION TOKENS
// ============================================================================

export const animation = {
  // Timing functions (for react-native-reanimated)
  easing: {
    default: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    inOut: [0.42, 0, 0.58, 1] as [number, number, number, number],
    spring: [0.34, 1.56, 0.64, 1] as [number, number, number, number],
  },
  // Durations in milliseconds
  duration: {
    fast: 150,
    normal: 250,
    slow: 400,
    slower: 600,
  },
} as const;

// ============================================================================
// COMPONENT DIMENSIONS
// ============================================================================

export const dimensions = {
  // Navigation
  navBarHeight: 56,
  tabBarHeight: 83,
  
  // Touch targets
  touchTargetMin: 44,
  
  // Avatars
  avatarNav: 44,
  avatarProfile: 80,
  
  // Icons
  iconSmall: 20,
  iconDefault: 24,
  iconLarge: 28,
  
  // Buttons
  buttonHeightPrimary: 52,
  buttonHeightSecondary: 36,
  
  // Form elements
  segmentedControlHeight: 36,
  toggleWidth: 51,
  toggleHeight: 31,
  
  // List items
  listItemHeight: 66,
  
  // Cards
  categoryIconContainer: 40,
  
  // Charts
  circularProgressSmall: 80,
  circularProgressLarge: 120,
  circularProgressStroke: 6,
} as const;

// ============================================================================
// COMPLETE THEME OBJECT
// ============================================================================

export const theme = {
  colors,
  spacing,
  borderRadius,
  typography,
  shadows,
  animation,
  dimensions,
} as const;

export type Theme = typeof theme;
export type Colors = typeof colors;
export type Spacing = typeof spacing;
export type BorderRadius = typeof borderRadius;
export type Typography = typeof typography;
export type Shadows = typeof shadows;

export default theme;
