import * as React from 'react';

// The SVG path data for the pin icon.
const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;

// Styling for the pin icon.
const pinStyle = {
  cursor: 'pointer',
  fill: '#d00', // Red fill color for the pin.
  stroke: 'none', // No stroke (border) for the pin.
};

// The Pin component is a function component that takes a 'size' prop with a default value of 20.
function Pin({ size = 20 }) {
  return (
    // The SVG element representing the pin icon.
    <svg height={size} viewBox='0 0 24 24' style={pinStyle}>
      {/* The 'path' element defines the shape of the pin using the 'ICON' data. */}
      <path d={ICON} />
    </svg>
  );
}

// React.memo is used to memoize the Pin component, preventing unnecessary re-renders if props don't change.
// This can be beneficial for performance optimization in certain scenarios.
export default React.memo(Pin);
