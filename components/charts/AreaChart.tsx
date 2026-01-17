import React from 'react';


interface AreaChartProps {
  data: number[];
  height?: number;
  color?: string;
  showLastValue?: boolean;
  gradientId?: string;
}

export function AreaChart({ 
  data, 
  height = 140, 
  color = 'var(--color-brand-accent)', 
  showLastValue = true,
  gradientId = 'areaGradient'
}: AreaChartProps) {
  const viewBoxWidth = 1000;
  const viewBoxHeight = 100;
  
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;

  // Convert value to Y coordinate (inverted)
  const getY = (val: number) => ((max - val) / range) * viewBoxHeight;
  const getX = (index: number) => (index / (data.length - 1)) * viewBoxWidth;

  // Create stepped path for fill
  let fillPath = `M 0 ${viewBoxHeight}`;
  data.forEach((val, i) => {
    const x = getX(i);
    const y = getY(val);
    if (i === 0) {
      fillPath += ` L 0 ${y}`;
    } else {
      // Step: horizontal then vertical
      fillPath += ` L ${x} ${getY(data[i - 1])} L ${x} ${y}`;
    }
  });
  fillPath += ` L ${viewBoxWidth} ${getY(data[data.length - 1])} L ${viewBoxWidth} ${viewBoxHeight} Z`;

  // Create stepped path for line
  let linePath = '';
  data.forEach((val, i) => {
    const x = getX(i);
    const y = getY(val);
    if (i === 0) {
      linePath += `M ${x} ${y}`;
    } else {
      // Step: horizontal then vertical
      linePath += ` L ${x} ${getY(data[i - 1])} L ${x} ${y}`;
    }
  });

  const lastValueY = (getY(data[data.length - 1]) / viewBoxHeight) * 100;

  return (
    <div style={{ position: 'relative', height }}>
      <svg 
        width="100%" 
        height="100%" 
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        preserveAspectRatio="none"
        style={{ display: 'block' }}
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.25" />
            <stop offset="100%" stopColor={color} stopOpacity="0.02" />
          </linearGradient>
        </defs>
        <path d={fillPath} fill={`url(#${gradientId})`} />
        <path 
          d={linePath} 
          fill="none" 
          stroke={color} 
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      {showLastValue && (
        <div
          style={{
            position: 'absolute',
            right: 8,
            top: `${lastValueY}%`,
            transform: 'translateY(-50%)',
            backgroundColor: 'var(--color-bg-secondary)',
            borderRadius: 'var(--radius-sm)',
            padding: '2px 8px',
            fontSize: 12,
            color: 'var(--color-text-secondary)',
            border: '1px solid var(--color-border-subtle)',
          }}
        >
          {data[data.length - 1]}
        </div>
      )}
    </div>
  );
}
