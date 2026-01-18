import React from 'react';

interface DivergingColumnChartProps {
  /** Array of data points with min/max values representing range spans */
  data: Array<{
    min: number;
    max: number;
  }>;
  /** X-axis labels (e.g., years) */
  xAxisLabels?: string[];
  /** Reference baseline value (center line) - defaults to 0 */
  baseline?: number;
  /** Y-axis range bounds */
  yMin?: number;
  yMax?: number;
  /** Chart height in pixels */
  height?: number;
  /** Bar color - defaults to body category purple */
  color?: string;
  /** Whether to show grid lines */
  showGrid?: boolean;
}

export function DivergingColumnChart({
  data,
  xAxisLabels = [],
  baseline = 0,
  yMin,
  yMax,
  height = 200,
  color = 'var(--color-body-text)',
  showGrid = true,
}: DivergingColumnChartProps) {
  const chartHeight = height - 30; // Reserve space for x-axis labels
  
  // Calculate Y range from data if not provided
  const allMins = data.map(d => d.min);
  const allMaxs = data.map(d => d.max);
  const dataMin = Math.min(...allMins, baseline);
  const dataMax = Math.max(...allMaxs, baseline);
  
  // Add padding to the range
  const padding = (dataMax - dataMin) * 0.1 || 1;
  const computedYMin = yMin ?? dataMin - padding;
  const computedYMax = yMax ?? dataMax + padding;
  const range = computedYMax - computedYMin;
  
  // Convert value to percentage position (0 = top, 100 = bottom)
  const valueToPercent = (value: number) => {
    return ((computedYMax - value) / range) * 100;
  };
  
  const baselinePercent = valueToPercent(baseline);
  
  // Calculate bar width based on number of data points
  const barWidthPercent = 100 / (data.length * 2);
  const gapPercent = barWidthPercent * 0.3;

  return (
    <div style={{ position: 'relative', height }}>
      {/* Chart area */}
      <div
        style={{
          position: 'relative',
          height: chartHeight,
        }}
      >
        {/* Grid lines */}
        {showGrid && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              pointerEvents: 'none',
            }}
          >
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                style={{
                  borderTop: '1px solid var(--color-border-separator)',
                  width: '100%',
                }}
              />
            ))}
          </div>
        )}

        {/* Baseline (center line) */}
        <div
          style={{
            position: 'absolute',
            top: `${baselinePercent}%`,
            left: 0,
            right: 0,
            height: 1,
            backgroundColor: 'var(--color-border-subtle)',
          }}
        />

        {/* Bars container */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'stretch',
            paddingLeft: `${gapPercent}%`,
            paddingRight: `${gapPercent}%`,
          }}
        >
          {data.map((point, index) => {
            const minPercent = valueToPercent(point.min);
            const maxPercent = valueToPercent(point.max);
            
            // Calculate bar positioning
            // maxPercent is top (smaller % = higher on screen)
            // minPercent is bottom (larger % = lower on screen)
            const barTop = Math.min(maxPercent, minPercent);
            const barBottom = Math.max(maxPercent, minPercent);
            const barHeight = barBottom - barTop;
            
            // Determine if bar is above or below baseline
            const isAboveBaseline = point.max > baseline;
            const isBelowBaseline = point.min < baseline;
            const crossesBaseline = isAboveBaseline && isBelowBaseline;
            
            // Border radius based on position relative to baseline
            let borderRadius = '4px';
            if (!crossesBaseline) {
              if (isAboveBaseline) {
                borderRadius = '4px 4px 0 0';
              } else {
                borderRadius = '0 0 4px 4px';
              }
            }

            return (
              <div
                key={index}
                style={{
                  flex: 1,
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: `${barTop}%`,
                    height: `${barHeight}%`,
                    width: '60%',
                    maxWidth: 32,
                    backgroundColor: color,
                    borderRadius,
                    opacity: 0.7,
                    minHeight: barHeight > 0 ? 2 : 0,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* X-axis labels */}
      {xAxisLabels.length > 0 && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            paddingTop: 'var(--space-sm)',
          }}
        >
          {xAxisLabels.map((label, index) => (
            <span
              key={index}
              style={{
                flex: 1,
                textAlign: 'center',
                fontSize: 12,
                color: 'var(--color-text-tertiary)',
              }}
            >
              {label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
