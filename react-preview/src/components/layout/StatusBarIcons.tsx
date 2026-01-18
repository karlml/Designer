import React from 'react';

/**
 * iOS Status Bar Icon Components
 * Extracted from /assets/iPhone 13 Pro Max.svg
 */

export interface IconProps {
  /** Icon color - use 'black' for light backgrounds, 'white' for dark backgrounds */
  color?: string;
  /** Icon size multiplier (default 1) */
  scale?: number;
  className?: string;
}

/**
 * iOS Cellular Signal Bars Icon
 * Shows 4 bars indicating signal strength
 */
export function SignalBarsIcon({ color = 'currentColor', scale = 1, className }: IconProps) {
  const width = 23 * scale;
  const height = 14 * scale;
  
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="316.6 32.125 22.966 13.8" 
      fill="none"
      className={className}
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M338.224 32.1249H336.883C336.142 32.1249 335.541 32.7041 335.541 33.4186V44.6311C335.541 45.3456 336.142 45.9248 336.883 45.9248H338.224C338.965 45.9248 339.566 45.3456 339.566 44.6311V33.4186C339.566 32.7041 338.965 32.1249 338.224 32.1249ZM330.569 35.1438H331.91C332.651 35.1438 333.252 35.723 333.252 36.4375V44.6312C333.252 45.3458 332.651 45.925 331.91 45.925H330.569C329.828 45.925 329.227 45.3458 329.227 44.6312V36.4375C329.227 35.723 329.828 35.1438 330.569 35.1438ZM325.597 38.1623H324.255C323.514 38.1623 322.913 38.7415 322.913 39.456V44.631C322.913 45.3455 323.514 45.9247 324.255 45.9247H325.597C326.338 45.9247 326.938 45.3455 326.938 44.631V39.456C326.938 38.7415 326.338 38.1623 325.597 38.1623ZM319.283 40.7497H317.941C317.2 40.7497 316.6 41.3289 316.6 42.0435V44.631C316.6 45.3455 317.2 45.9247 317.941 45.9247H319.283C320.024 45.9247 320.625 45.3455 320.625 44.631V42.0435C320.625 41.3289 320.024 40.7497 319.283 40.7497Z" 
        fill={color}
      />
    </svg>
  );
}

/**
 * iOS WiFi Icon
 * Shows 3-tier WiFi signal indicator
 */
export function WifiIcon({ color = 'currentColor', scale = 1, className }: IconProps) {
  const width = 20 * scale;
  const height = 14 * scale;
  
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="346.341 30 19.775 16.5" 
      fill="none"
      className={className}
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M356.341 34.8228C359.178 34.8229 361.906 35.9391 363.962 37.9406C364.117 38.0951 364.364 38.0932 364.517 37.9362L365.996 36.4068C366.073 36.3272 366.117 36.2194 366.116 36.1072C366.115 35.995 366.071 35.8877 365.993 35.8091C360.597 30.5135 352.085 30.5135 346.689 35.8091C346.611 35.8877 346.567 35.9949 346.566 36.1071C346.565 36.2193 346.608 36.3272 346.685 36.4068L348.166 37.9362C348.318 38.0934 348.566 38.0954 348.72 37.9406C350.776 35.939 353.505 34.8228 356.341 34.8228ZM356.341 39.7985C357.9 39.7984 359.403 40.3916 360.558 41.4629C360.714 41.6149 360.96 41.6117 361.113 41.4555L362.591 39.9261C362.669 39.8459 362.712 39.737 362.711 39.6239C362.71 39.5109 362.664 39.4029 362.585 39.3244C359.067 35.9732 353.619 35.9732 350.101 39.3244C350.022 39.4029 349.976 39.5109 349.975 39.624C349.974 39.7372 350.017 39.846 350.095 39.9261L351.573 41.4555C351.725 41.6117 351.972 41.6149 352.128 41.4629C353.282 40.3923 354.784 39.7991 356.341 39.7985ZM359.302 43.1465C359.305 43.2599 359.261 43.3692 359.182 43.4487L356.625 46.0911C356.55 46.1687 356.448 46.2124 356.341 46.2124C356.235 46.2124 356.133 46.1687 356.058 46.0911L353.5 43.4487C353.421 43.3692 353.378 43.2598 353.38 43.1464C353.383 43.033 353.431 42.9256 353.513 42.8496C355.146 41.4353 357.537 41.4353 359.17 42.8496C359.252 42.9257 359.3 43.0331 359.302 43.1465Z" 
        fill={color}
      />
    </svg>
  );
}

export interface BatteryIconProps extends IconProps {
  /** Battery fill level 0-100 */
  level?: number;
}

/**
 * iOS Battery Icon
 * Shows battery outline with fill level
 */
export function BatteryIcon({ color = 'currentColor', scale = 1, level = 100, className }: BatteryIconProps) {
  const width = 31 * scale;
  const height = 14 * scale;
  
  // Calculate fill width based on level (max fill is 19.55)
  const fillWidth = Math.max(0, Math.min(100, level)) * 0.1955;
  
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="373.691 32.125 30.854 13.8" 
      fill="none"
      className={className}
    >
      {/* Battery outline */}
      <rect 
        opacity="0.4" 
        x="373.691" 
        y="32.1249" 
        width="27.6" 
        height="13.8" 
        rx="4.025" 
        stroke={color} 
        strokeWidth="1.15"
      />
      {/* Battery cap/nub */}
      <path 
        opacity="0.5" 
        d="M403.016 36.7249V41.3249C403.943 40.9353 404.545 40.029 404.545 39.0249C404.545 38.0208 403.943 37.1145 403.016 36.7249Z" 
        fill={color}
      />
      {/* Battery fill */}
      <rect 
        x="375.416" 
        y="33.8499" 
        width={fillWidth} 
        height="10.35" 
        rx="2.3" 
        fill={color}
      />
    </svg>
  );
}

/**
 * Complete iOS Status Bar
 * Combines time, signal, wifi, and battery into a status bar layout
 */
export interface StatusBarProps {
  /** Time to display (default "9:41") */
  time?: string;
  /** Color variant */
  variant?: 'dark' | 'light';
  /** Battery level 0-100 */
  batteryLevel?: number;
  /** Whether to show the Dynamic Island */
  showDynamicIsland?: boolean;
}

export function StatusBar({ 
  time = '9:41', 
  variant = 'dark',
  batteryLevel = 100,
  showDynamicIsland = true,
}: StatusBarProps) {
  const color = variant === 'dark' ? '#000000' : '#FFFFFF';
  
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: showDynamicIsland ? 54 : 44,
        padding: '0 16px',
        paddingTop: showDynamicIsland ? 14 : 0,
        fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
        fontSize: '15px',
        fontWeight: 600,
        color: color,
      }}
    >
      {/* Left: Time */}
      <div style={{ flex: 1 }}>
        <span style={{ letterSpacing: '-0.3px' }}>{time}</span>
      </div>
      
      {/* Center: Dynamic Island */}
      {showDynamicIsland && (
        <div style={{ flex: 2, display: 'flex', justifyContent: 'center' }}>
          <div
            style={{
              width: 126,
              height: 37,
              backgroundColor: '#000',
              borderRadius: 22,
            }}
          />
        </div>
      )}
      
      {/* Right: Status icons */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 6 }}>
        <SignalBarsIcon color={color} />
        <WifiIcon color={color} />
        <BatteryIcon color={color} level={batteryLevel} />
      </div>
    </div>
  );
}

export default StatusBar;
