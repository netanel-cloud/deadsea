'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Logo from './Logo';

export default function Header() {
  const { language, setLanguage, t, isRTL } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#attractions', label: t.nav.attractions },
    { href: '#about', label: t.nav.about },
    { href: '#testimonials', label: t.nav.testimonials },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="relative z-10">
            <Logo size="md" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`font-medium transition-colors hover:text-deadsea-blue ${
                  isScrolled ? 'text-deep-night' : 'text-white'
                }`}
              >
                {item.label}
              </a>
            ))}

            {/* Language Switcher */}
            <button
              onClick={() => setLanguage(language === 'he' ? 'en' : 'he')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all ${
                isScrolled
                  ? 'border-deadsea-blue text-deadsea-blue hover:bg-deadsea-blue hover:text-white'
                  : 'border-white text-white hover:bg-white hover:text-deadsea-blue'
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
              <span className="text-sm font-medium">
                {language === 'he' ? 'EN' : 'עב'}
              </span>
            </button>

            {/* CTA Button */}
            <a
              href="https://deadsea.fun"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sunset-orange hover:bg-sunset-orange-dark text-white px-6 py-2.5 rounded-full font-medium transition-all transform hover:scale-105"
            >
              {t.attractions.bookNow}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden relative z-10 p-2 ${
              isScrolled || isMobileMenuOpen ? 'text-deep-night' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ${
            isMobileMenuOpen
              ? 'opacity-100 visible translate-y-0'
              : 'opacity-0 invisible -translate-y-4'
          }`}
        >
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-deep-night font-medium py-2 hover:text-deadsea-blue transition-colors"
              >
                {item.label}
              </a>
            ))}

            <div className="flex items-center gap-4 pt-4 border-t border-desert-sand">
              <button
                onClick={() => setLanguage(language === 'he' ? 'en' : 'he')}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-deadsea-blue text-deadsea-blue"
              >
                <span>{language === 'he' ? 'English' : 'עברית'}</span>
              </button>

              <a
                href="https://deadsea.fun"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-sunset-orange text-white text-center px-6 py-2.5 rounded-full font-medium"
              >
                {t.attractions.bookNow}
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
