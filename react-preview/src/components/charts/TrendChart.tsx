import React from 'react';


interface TrendChartProps {
  data: number[];
  noiseData?: number[];
  yAxisLabels?: string[];
  xAxisLabels?: Array<{ label: string; subLabel?: string }>;
  height?: number;
  unit?: string;
  projectionStartIndex?: number;
}

export function TrendChart({
  data,
  noiseData,
  yAxisLabels = [],
  xAxisLabels = [],
  height = 300,
  unit = '',
  projectionStartIndex,
}: TrendChartProps) {
  const chartHeight = height - 50;
  const viewBoxWidth = 1000;
  const viewBoxHeight = 200;
  
  // Calculate bounds from data
  const allValues = [...data, ...(noiseData || [])];
  const minVal = Math.min(...allValues);
  const maxVal = Math.max(...allValues);
  const range = maxVal - minVal || 1;
  
  // Convert value to Y coordinate (inverted - higher values = lower Y)
  const getY = (val: number) => ((maxVal - val) / range) * viewBoxHeight;
  const getX = (index: number, total: number) => (index / (total - 1)) * viewBoxWidth;

  // Generate noise path
  const noisePath = noiseData
    ? noiseData.map((val, i) => `${i === 0 ? 'M' : 'L'}${getX(i, noiseData.length)},${getY(val)}`).join(' ')
    : '';

  // Generate main data path
  const mainPath = data.map((val, i) => `${i === 0 ? 'M' : 'L'}${getX(i, data.length)},${getY(val)}`).join(' ');
  
  // Projected path (from projectionStartIndex to end)
  const projectedPath = projectionStartIndex !== undefined && projectionStartIndex < data.length - 1
    ? data.slice(projectionStartIndex).map((val, i) => 
        `${i === 0 ? 'M' : 'L'}${getX(projectionStartIndex + i, data.length)},${getY(val)}`
      ).join(' ')
    : '';

  // Solid path (up to projectionStartIndex)
  const solidPath = projectionStartIndex !== undefined
    ? data.slice(0, projectionStartIndex + 1).map((val, i) => 
        `${i === 0 ? 'M' : 'L'}${getX(i, data.length)},${getY(val)}`
      ).join(' ')
    : mainPath;

  return (
    <div style={{ position: 'relative', height, paddingRight: 45 }}>
      {/* Y-axis labels */}
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 50,
          width: 40,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          fontSize: 12,
          color: 'var(--color-text-tertiary)',
        }}
      >
        {unit && <span>{unit}</span>}
        {yAxisLabels.map((label, i) => (
          <span key={i}>{label}</span>
        ))}
      </div>

      {/* Chart area */}
      <div style={{ position: 'relative', height: chartHeight }}>
        <svg
          width="100%"
          height="100%"
          viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
          preserveAspectRatio="none"
          style={{ display: 'block' }}
        >
          {/* Horizontal grid lines */}
          {yAxisLabels.map((_, i) => (
            <line
              key={i}
              x1="0"
              y1={(i / (yAxisLabels.length - 1)) * viewBoxHeight}
              x2={viewBoxWidth}
              y2={(i / (yAxisLabels.length - 1)) * viewBoxHeight}
              stroke="var(--color-border-subtle)"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
          ))}

          {/* Background noise data (gray zigzag) */}
          {noisePath && (
            <path
              d={noisePath}
              fill="none"
              stroke="var(--color-text-tertiary)"
              strokeWidth="1"
              opacity="0.4"
              vectorEffect="non-scaling-stroke"
            />
          )}

          {/* Main trend line (solid portion) */}
          <path
            d={solidPath}
            fill="none"
            stroke="var(--color-brand-accent)"
            strokeWidth="2.5"
            vectorEffect="non-scaling-stroke"
          />

          {/* Projected portion (dashed) */}
          {projectedPath && (
            <path
              d={projectedPath}
              fill="none"
              stroke="var(--color-brand-accent)"
              strokeWidth="2.5"
              strokeDasharray="6 6"
              vectorEffect="non-scaling-stroke"
            />
          )}
        </svg>

        {/* Data points as HTML elements for consistent sizing */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none' }}>
          {data.map((val, i) => {
            const isProjected = projectionStartIndex !== undefined && i > projectionStartIndex;
            return (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  left: `${(i / (data.length - 1)) * 100}%`,
                  top: `${(getY(val) / viewBoxHeight) * 100}%`,
                  width: 10,
                  height: 10,
                  backgroundColor: 'var(--color-bg-secondary)',
                  border: '2.5px solid var(--color-brand-accent)',
                  borderStyle: isProjected ? 'dashed' : 'solid',
                  borderRadius: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
            );
          })}
        </div>
      </div>

      {/* X-axis labels */}
      {xAxisLabels.length > 0 && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingTop: 'var(--space-md)',
          }}
        >
          {xAxisLabels.map((item, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 14, color: 'var(--color-text-primary)' }}>{item.label}</div>
              {item.subLabel && (
                <div
                  style={{
                    fontSize: 12,
                    color: item.subLabel.startsWith('+') ? 'var(--color-heart-text)' : 'var(--color-success-text)',
                  }}
                >
                  {item.subLabel}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
