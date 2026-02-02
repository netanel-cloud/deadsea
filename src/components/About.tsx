'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function About() {
  const { t, isRTL } = useLanguage();

  const valueIcons = [
    // Local
    <svg key="local" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>,
    // Professional
    <svg key="pro" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>,
    // Experience
    <svg key="exp" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>,
  ];

  return (
    <section id="about" className="py-20 bg-desert-sand-light">
      <div className="container mx-auto px-4">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${isRTL ? 'lg:grid-flow-dense' : ''}`}>
          {/* Image/Visual Side */}
          <div className={`relative ${isRTL ? 'lg:col-start-2' : ''}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Placeholder for image */}
              <div className="aspect-[4/3] bg-gradient-to-br from-deadsea-blue to-deadsea-blue-dark flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <svg
                    className="w-24 h-24 mx-auto mb-4 opacity-50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="opacity-70">Replace with team/landscape image</p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-sunset-orange/20 rounded-full blur-2xl" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-deadsea-blue/20 rounded-full blur-2xl" />
          </div>

          {/* Content Side */}
          <div className={isRTL ? 'lg:col-start-1 lg:row-start-1' : ''}>
            <span className="text-sunset-orange font-medium text-lg">
              {t.about.subtitle}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-deep-night mt-2 mb-6">
              {t.about.title}
            </h2>

            <div className="prose prose-lg text-earth-brown max-w-none">
              {t.about.description.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Values */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              {t.about.values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="text-deadsea-blue mb-2 flex justify-center">
                    {valueIcons[index]}
                  </div>
                  <h4 className="font-bold text-deep-night mb-1">
                    {value.title}
                  </h4>
                  <p className="text-sm text-earth-brown-light">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
