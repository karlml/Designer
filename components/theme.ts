/**
 * Withings "Soft Wellness" Design System
 * Theme & Global Styles
 */

export const styles = `
  @import url('https://fonts.googleapis.com/css2?family=SF+Pro+Display:wght@400;500;600;700&family=SF+Pro+Text:wght@400;500;600;700&display=swap');
  
  :root {
    /* Background Colors */
    --color-bg-primary: #F7F6F4;
    --color-bg-secondary: #FFFFFF;
    --color-bg-elevated: #EDEBE8;
    --color-bg-overlay: rgba(158, 158, 158, 0.4);

    /* Brand Colors */
    --color-brand-primary: #2B3A67;
    --color-brand-accent: #4A6CF7;

    /* Category Colors */
    --color-activity-bg: #F9F3DC;
    --color-activity-text: #8B7B3D;
    --color-body-bg: #EDE4F3;
    --color-body-text: #6B4D8A;
    --color-heart-bg: #FCE4EC;
    --color-heart-text: #C75B7A;
    --color-sleep-bg: #E3F2FD;
    --color-sleep-text: #4A6FA5;
    --color-success-bg: #E8F5E9;
    --color-success-text: #4CAF50;

    /* Text Colors */
    --color-text-primary: #1A1A1A;
    --color-text-secondary: #5C5C5C;
    --color-text-tertiary: #9E9E9E;
    --color-text-inverse: #FFFFFF;

    /* UI Colors */
    --color-border-subtle: #E5E5E5;
    --color-border-separator: #F0F0F0;

    /* Spacing */
    --space-xs: 4px;
    --space-sm: 8px;
    --space-md: 12px;
    --space-lg: 16px;
    --space-xl: 20px;
    --space-2xl: 24px;
    --space-3xl: 32px;

    /* Radii */
    --radius-sm: 8px;
    --radius-md: 12px;
    --radius-lg: 16px;
    --radius-xl: 20px;
    --radius-2xl: 24px;
    --radius-full: 9999px;

    /* Shadows */
    --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.04);
    --shadow-md: 0 2px 8px rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 4px 16px rgba(0, 0, 0, 0.08);
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif;
    background: var(--color-bg-primary);
    color: var(--color-text-primary);
    -webkit-font-smoothing: antialiased;
  }
`;

export { styles as globalStyles };
