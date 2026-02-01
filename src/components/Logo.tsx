'use client';

import { useLanguage } from '@/context/LanguageContext';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className = '', size = 'md' }: LogoProps) {
  const { language } = useLanguage();

  const sizes = {
    sm: { width: 120, height: 40 },
    md: { width: 160, height: 53 },
    lg: { width: 200, height: 67 },
  };

  const { width, height } = sizes[size];

  return (
    <svg
      viewBox="0 0 200 67"
      width={width}
      height={height}
      className={className}
      aria-label={language === 'he' ? 'תיירות ים המלח' : 'Dead Sea Tourism'}
    >
      {/* Wave pattern representing the Dead Sea */}
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1E6F8C" />
          <stop offset="50%" stopColor="#2A8BAD" />
          <stop offset="100%" stopColor="#1E6F8C" />
        </linearGradient>
        <linearGradient id="sunGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E8915A" />
          <stop offset="100%" stopColor="#D97941" />
        </linearGradient>
        <linearGradient id="mountainGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#8B6F4E" />
          <stop offset="100%" stopColor="#A68B66" />
        </linearGradient>
      </defs>

      {/* Sun/sunset circle */}
      <circle cx="30" cy="25" r="18" fill="url(#sunGradient)" />

      {/* Mountain silhouette */}
      <path
        d="M5 50 L20 30 L35 45 L50 28 L65 50 Z"
        fill="url(#mountainGradient)"
      />

      {/* Wave lines */}
      <path
        d="M5 55 Q20 50 35 55 T65 55"
        stroke="url(#waveGradient)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M5 62 Q20 57 35 62 T65 62"
        stroke="url(#waveGradient)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        opacity="0.6"
      />

      {/* Text */}
      <text
        x="75"
        y="32"
        fontFamily="system-ui, sans-serif"
        fontSize="18"
        fontWeight="700"
        fill="#1A1A2E"
      >
        {language === 'he' ? 'תיירות' : 'DEAD SEA'}
      </text>
      <text
        x="75"
        y="52"
        fontFamily="system-ui, sans-serif"
        fontSize="14"
        fontWeight="500"
        fill="#1E6F8C"
      >
        {language === 'he' ? 'ים המלח' : 'TOURISM'}
      </text>
    </svg>
  );
}
