/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 760 122" role="img" className={className} xmlns="http://www.w3.org/2000/svg">
      <title>Shoebox Investments Inc logo</title>
      <desc>Deep forest green and champagne gold wordmark with geometric investment grid mark</desc>

      <defs>
        <linearGradient id="goldFill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4B472" />
          <stop offset="100%" stopColor="#B8943E" />
        </linearGradient>
        <linearGradient id="greenFill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1A3929" />
          <stop offset="100%" stopColor="#0E2116" />
        </linearGradient>
      </defs>

      <g transform="translate(18 22)">
        <rect x="0" y="0" width="78" height="78" rx="2" fill="none" stroke="#1A3929" strokeWidth="2.25" />
        <rect x="12" y="12" width="21" height="21" rx="1" fill="url(#greenFill)" />
        <rect x="45" y="12" width="21" height="21" rx="1" fill="url(#goldFill)" />
        <rect x="12" y="45" width="21" height="21" rx="1" fill="url(#goldFill)" />
        <rect x="45" y="45" width="21" height="21" rx="1" fill="#1A3929" opacity="0.28" />

        <line x1="92" y1="0" x2="92" y2="78" stroke="#C4A25A" strokeWidth="1" />

        <text
          x="112"
          y="45"
          fill="#1A3929"
          fontFamily="Georgia, 'Times New Roman', serif"
          fontSize="42"
          fontWeight="400"
          textLength="252"
          lengthAdjust="spacingAndGlyphs"
        >
          SHOEBOX
        </text>
        <text
          x="112"
          y="72"
          fill="#C4A25A"
          fontFamily="-apple-system, 'Helvetica Neue', Arial, sans-serif"
          fontSize="12"
          fontWeight="500"
          letterSpacing="4"
          textLength="252"
          lengthAdjust="spacingAndGlyphs"
        >
          INVESTMENTS INC
        </text>
      </g>
    </svg>
  );
}
