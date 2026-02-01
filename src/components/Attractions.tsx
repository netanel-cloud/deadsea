'use client';

import { ReactNode } from 'react';
import { useLanguage } from '@/context/LanguageContext';

const attractionIcons: Record<string, ReactNode> = {
  riders: (
    <svg className="w-12 h-12" viewBox="0 0 64 64" fill="currentColor">
      <path d="M52 36c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zM12 36c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zM44 28H20l-4-12h-6v4h4l6 18h20l6-18h-8v8z" />
      <circle cx="32" cy="20" r="6" />
    </svg>
  ),
  jeeps: (
    <svg className="w-12 h-12" viewBox="0 0 64 64" fill="currentColor">
      <path d="M56 28h-4l-4-12H16l-4 12H8c-2.2 0-4 1.8-4 4v12h4v4h8v-4h32v4h8v-4h4V32c0-2.2-1.8-4-4-4zM16 44c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm32 0c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zM12 28l3-8h34l3 8H12z" />
    </svg>
  ),
  bikes: (
    <svg className="w-12 h-12" viewBox="0 0 64 64" fill="currentColor">
      <circle cx="12" cy="44" r="8" fill="none" stroke="currentColor" strokeWidth="4" />
      <circle cx="52" cy="44" r="8" fill="none" stroke="currentColor" strokeWidth="4" />
      <path d="M12 44l12-20h12l4 8-18 12M40 32l12 12M32 24l8 8" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  ),
  sinkholes: (
    <svg className="w-12 h-12" viewBox="0 0 64 64" fill="currentColor">
      <path d="M32 4L8 28l8 8 16-16 16 16 8-8L32 4z" />
      <path d="M16 40c0 8 7.2 16 16 16s16-8 16-16H16z" opacity="0.6" />
      <circle cx="24" cy="44" r="3" fill="white" opacity="0.5" />
      <circle cx="40" cy="48" r="2" fill="white" opacity="0.5" />
    </svg>
  ),
  asado: (
    <svg className="w-12 h-12" viewBox="0 0 64 64" fill="currentColor">
      <path d="M32 8c-2 4-4 8-4 12 0 4 4 8 4 8s4-4 4-8c0-4-2-8-4-12z" />
      <path d="M20 16c-1.5 3-3 6-3 9 0 3 3 6 3 6s3-3 3-6c0-3-1.5-6-3-9z" opacity="0.7" />
      <path d="M44 16c-1.5 3-3 6-3 9 0 3 3 6 3 6s3-3 3-6c0-3-1.5-6-3-9z" opacity="0.7" />
      <rect x="8" y="36" width="48" height="8" rx="2" />
      <rect x="12" y="44" width="4" height="16" />
      <rect x="48" y="44" width="4" height="16" />
    </svg>
  ),
  accommodation: (
    <svg className="w-12 h-12" viewBox="0 0 64 64" fill="currentColor">
      <path d="M32 8L4 32h8v24h40V32h8L32 8zm12 40H20V36c0-6.6 5.4-12 12-12s12 5.4 12 12v12z" />
      <circle cx="32" cy="16" r="2" fill="white" />
      <circle cx="28" cy="12" r="1" fill="white" opacity="0.7" />
      <circle cx="36" cy="14" r="1" fill="white" opacity="0.7" />
    </svg>
  ),
};

export default function Attractions() {
  const { t, isRTL } = useLanguage();

  return (
    <section id="attractions" className="py-20 bg-salt-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-deep-night mb-4">
            {t.attractions.title}
          </h2>
          <p className="text-xl text-earth-brown max-w-2xl mx-auto">
            {t.attractions.subtitle}
          </p>
        </div>

        {/* Attractions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.attractions.items.map((attraction, index) => (
            <div
              key={attraction.id}
              className={`group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up stagger-${index + 1}`}
            >
              {/* Card Image/Icon Area */}
              <div className="relative h-48 bg-gradient-to-br from-deadsea-blue to-deadsea-blue-dark flex items-center justify-center">
                <div className="text-white/90 transform group-hover:scale-110 transition-transform duration-300">
                  {attractionIcons[attraction.id]}
                </div>

                {/* Decorative wave */}
                <svg
                  className="absolute bottom-0 left-0 right-0 w-full"
                  viewBox="0 0 400 40"
                  preserveAspectRatio="none"
                >
                  <path
                    fill="white"
                    d="M0,20 Q100,40 200,20 T400,20 L400,40 L0,40 Z"
                  />
                </svg>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-deep-night mb-3">
                  {attraction.title}
                </h3>
                <p className="text-earth-brown mb-4 leading-relaxed">
                  {attraction.description}
                </p>

                {/* Meta info */}
                <div className={`flex gap-4 mb-6 text-sm text-earth-brown-light ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {attraction.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {attraction.age}
                  </span>
                </div>

                {/* CTA Button */}
                <a
                  href="https://deadsea.fun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-sunset-orange hover:bg-sunset-orange-dark text-white text-center py-3 rounded-full font-medium transition-all transform hover:scale-105"
                >
                  {t.attractions.bookNow}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
