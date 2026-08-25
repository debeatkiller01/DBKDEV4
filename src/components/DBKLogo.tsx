import React from 'react';

interface DBKLogoProps {
  size?: number | string;
  className?: string;
  variant?: 'badge' | 'glyph' | 'monochrome';
}

/**
 * DBKLogo — Custom Engineered D+B+K Monogram
 *
 * Geometric Visual Architecture:
 * 1. "D" Foundation: The overall outer silhouette forms a modern, architecturally sound capital D.
 * 2. "B" Integration: Balanced upper and lower functional counter chambers.
 * 3. "K" Dynamics: A precision 45-degree directional vector slash and lower branching leg.
 * 4. Precision Dot / Node: Signature DBK blue accent representing intelligent software logic.
 */
export const DBKLogo: React.FC<DBKLogoProps> = ({
  size = 34,
  className = '',
  variant = 'badge',
}) => {
  if (variant === 'badge') {
    return (
      <div
        className={`relative flex items-center justify-center shrink-0 rounded-xl bg-[#0b0f19] border border-slate-800/90 shadow-2xs group-hover:border-slate-700 group-hover:shadow-xs transition-all duration-300 ${className}`}
        style={{ width: size, height: size }}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[70%] h-[70%] transition-transform duration-300 group-hover:scale-105"
        >
          {/* 1. Left Vertical Stem: Shared D, B, K backbone */}
          <rect x="4.5" y="4.5" width="4.5" height="23" rx="1.5" fill="#ffffff" />

          {/* 2. Upper Lobe: D & B upper chamber */}
          <path
            d="M9 4.5H19C23.6944 4.5 27.5 8.30558 27.5 13C27.5 15.2 26.6 17.2 25.1 18.6L20.8 15C21.5 14.5 22 13.8 22 13C22 11.3431 20.6569 10 19 10H9V4.5Z"
            fill="#ffffff"
          />

          {/* 3. Dynamic K-Leg & Lower D-Return (Signature DBK Blue) */}
          <path
            d="M13 14.5L23.2 27.5H27.5L16.2 13.5L13 14.5Z"
            fill="#3b82f6"
          />

          {/* 4. Lower D/B Horizontal Base */}
          <path
            d="M9 23H17.8L14.3 27.5H9V23Z"
            fill="#ffffff"
          />

          {/* 5. Center Code/Logic Precision Dot */}
          <circle cx="13" cy="14" r="1.3" fill="#60a5fa" />
        </svg>
      </div>
    );
  }

  // Pure standalone vector glyph
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: size, height: size }}
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      {/* 1. Left Vertical Stem */}
      <rect x="4.5" y="4.5" width="4.5" height="23" rx="1.5" fill="currentColor" />

      {/* 2. Upper Lobe */}
      <path
        d="M9 4.5H19C23.6944 4.5 27.5 8.30558 27.5 13C27.5 15.2 26.6 17.2 25.1 18.6L20.8 15C21.5 14.5 22 13.8 22 13C22 11.3431 20.6569 10 19 10H9V4.5Z"
        fill="currentColor"
      />

      {/* 3. Dynamic K-Leg */}
      <path
        d="M13 14.5L23.2 27.5H27.5L16.2 13.5L13 14.5Z"
        fill={variant === 'monochrome' ? 'currentColor' : '#2563eb'}
      />

      {/* 4. Lower Base */}
      <path
        d="M9 23H17.8L14.3 27.5H9V23Z"
        fill="currentColor"
      />
    </svg>
  );
};
