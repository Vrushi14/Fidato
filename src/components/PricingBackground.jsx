import React from 'react';

const PricingBackground = () => (
  <svg
    className="pricing-background"
    width="100%"
    height="100%"
    viewBox="0 0 1440 2693"
    preserveAspectRatio="xMidYMin slice"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      minHeight: '2693px',
      zIndex: -1,
      pointerEvents: 'none',
    }}
  >
    <g opacity="0.61">
      <g filter="url(#pricing-blur)">
        <ellipse cx="1230.26" cy="514.246" rx="512.742" ry="393.246" fill="#C1BCFF" />
        <ellipse cx="297.742" cy="432.246" rx="512.742" ry="393.246" fill="#FFBCBD" />
        <ellipse cx="-1.17346" cy="623.005" rx="399.115" ry="305.918" fill="#FFD9DD" />
        <ellipse cx="442.115" cy="720.918" rx="399.115" ry="305.918" fill="#DEB5FF" />
        <ellipse cx="1113.11" cy="707.918" rx="399.115" ry="305.918" fill="#DEB5FF" />
        <ellipse cx="1182.68" cy="647.65" rx="442.435" ry="339.135" fill="#FFAAC2" />
        <ellipse cx="42.8567" cy="647.65" rx="132.091" ry="68.0413" fill="#FFDA58" />
        <ellipse cx="42.8567" cy="621.934" rx="132.091" ry="68.0413" fill="#FFDD65" />
        <ellipse cx="651.5" cy="903" rx="322.5" ry="285" fill="#C173FF" fillOpacity="0.56" />
        <ellipse cx="731.5" cy="696" rx="381.5" ry="370" fill="#FFBCBD" />
        <ellipse cx="727.606" cy="806.594" rx="363.606" ry="278.594" fill="#C173FF" />
      </g>
    </g>
    <defs>
      <filter id="pricing-blur" x="-800" y="-300" width="3040" height="1800" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur" />
      </filter>
    </defs>
  </svg>
);

export default PricingBackground;
