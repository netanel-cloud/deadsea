'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Testimonials() {
  const { t, isRTL } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % t.testimonials.items.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) =>
      prev === 0 ? t.testimonials.items.length - 1 : prev - 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-deep-night mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-xl text-earth-brown max-w-2xl mx-auto">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto relative">
          {/* Navigation Arrows */}
          <button
            onClick={isRTL ? nextTestimonial : prevTestimonial}
            className={`absolute top-1/2 -translate-y-1/2 ${isRTL ? '-right-4 md:-right-16' : '-left-4 md:-left-16'} w-12 h-12 bg-deadsea-blue text-white rounded-full flex items-center justify-center shadow-lg hover:bg-deadsea-blue-dark transition-colors z-10`}
            aria-label="Previous"
          >
            <svg className={`w-6 h-6 ${isRTL ? '' : 'rotate-180'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <button
            onClick={isRTL ? prevTestimonial : nextTestimonial}
            className={`absolute top-1/2 -translate-y-1/2 ${isRTL ? '-left-4 md:-left-16' : '-right-4 md:-right-16'} w-12 h-12 bg-deadsea-blue text-white rounded-full flex items-center justify-center shadow-lg hover:bg-deadsea-blue-dark transition-colors z-10`}
            aria-label="Next"
          >
            <svg className={`w-6 h-6 ${isRTL ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonial Card */}
          <div className="bg-desert-sand-light rounded-3xl p-8 md:p-12 shadow-lg">
            {/* Quote icon */}
            <div className="text-deadsea-blue/20 mb-6">
              <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Content */}
            <blockquote className="text-xl md:text-2xl text-deep-night leading-relaxed mb-8">
              {t.testimonials.items[activeIndex].text}
            </blockquote>

            {/* Rating */}
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.testimonials.items[activeIndex].rating }).map((_, i) => (
                <svg
                  key={i}
                  className="w-6 h-6 text-sunset-orange"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Author */}
            <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              {/* Avatar placeholder */}
              <div className="w-14 h-14 bg-deadsea-blue rounded-full flex items-center justify-center text-white text-xl font-bold">
                {t.testimonials.items[activeIndex].name.charAt(0)}
              </div>
              <div className={isRTL ? 'text-right' : ''}>
                <div className="font-bold text-deep-night text-lg">
                  {t.testimonials.items[activeIndex].name}
                </div>
                <div className="text-earth-brown">
                  {t.testimonials.items[activeIndex].location}
                </div>
              </div>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {t.testimonials.items.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex
                    ? 'bg-deadsea-blue w-8'
                    : 'bg-desert-sand-dark hover:bg-earth-brown'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
