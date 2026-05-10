import React from 'react';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "w-8 h-8" }: LogoProps) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="globeGradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fde047" />
          <stop offset="0.5" stopColor="#d4a017" />
          <stop offset="1" stopColor="#8a670f" />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Earth / Globe Outer Ring */}
      <circle cx="50" cy="50" r="45" stroke="url(#globeGradient)" strokeWidth="3" fill="transparent" filter="url(#glow)"/>
      
      {/* Globe Lat/Long grid lines */}
      <ellipse cx="50" cy="50" rx="20" ry="45" stroke="url(#globeGradient)" strokeWidth="1.5" fill="none" opacity="0.4"/>
      <ellipse cx="50" cy="50" rx="45" ry="20" stroke="url(#globeGradient)" strokeWidth="1.5" fill="none" opacity="0.4"/>
      
      {/* Horizontal and Vertical lines */}
      <line x1="5" y1="50" x2="95" y2="50" stroke="url(#globeGradient)" strokeWidth="1.5" opacity="0.4" strokeDasharray="3 3"/>
      <line x1="50" y1="5" x2="50" y2="95" stroke="url(#globeGradient)" strokeWidth="1.5" opacity="0.4" strokeDasharray="3 3"/>

      {/* Oil Drop Silhouette */}
      <path 
        d="M 50,15 C 50,15 25,50 25,72 A 25 25 0 0 0 75 72 C 75,50 50,15 50,15 Z" 
        fill="#050505" 
        stroke="url(#globeGradient)" 
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      
      {/* Oil Drop Inner Glow/Fill */}
      <path 
        d="M 50,25 C 50,25 32,53 32,71 A 18 18 0 0 0 68 71 C 68,53 50,25 50,25 Z" 
        fill="url(#globeGradient)" 
        opacity="0.9"
      />
      
      {/* Oil Drop Reflection/Highlight */}
      <path 
        d="M 38 65 Q 38 48 48 38" 
        stroke="#ffffff" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        opacity="0.8" 
        fill="none"
      />
    </svg>
  );
}

