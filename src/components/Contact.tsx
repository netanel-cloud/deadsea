'use client';

import { useState, FormEvent } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Contact() {
  const { t, isRTL } = useLanguage();
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formState);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormState({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-desert-sand-light to-desert-sand">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-deep-night mb-4">
            {t.contact.title}
          </h2>
          <p className="text-xl text-earth-brown max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className={`grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto ${isRTL ? 'lg:grid-flow-dense' : ''}`}>
          {/* Contact Form */}
          <div className={`bg-white rounded-2xl shadow-xl p-8 ${isRTL ? 'lg:col-start-2' : ''}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-deep-night font-medium mb-2">
                  {t.contact.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-desert-sand-dark focus:border-deadsea-blue focus:ring-2 focus:ring-deadsea-blue/20 outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-deep-night font-medium mb-2">
                    {t.contact.form.phone}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-desert-sand-dark focus:border-deadsea-blue focus:ring-2 focus:ring-deadsea-blue/20 outline-none transition-all"
                    dir="ltr"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-deep-night font-medium mb-2">
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-desert-sand-dark focus:border-deadsea-blue focus:ring-2 focus:ring-deadsea-blue/20 outline-none transition-all"
                    dir="ltr"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-deep-night font-medium mb-2">
                  {t.contact.form.message}
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-desert-sand-dark focus:border-deadsea-blue focus:ring-2 focus:ring-deadsea-blue/20 outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-sunset-orange hover:bg-sunset-orange-dark text-white py-4 rounded-full font-medium text-lg transition-all transform hover:scale-[1.02] shadow-lg"
              >
                {t.contact.form.submit}
              </button>

              {isSubmitted && (
                <div className="bg-green-100 text-green-700 text-center py-3 rounded-lg">
                  {t.contact.form.success}
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className={`space-y-8 ${isRTL ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
            {/* Info Cards */}
            <div className="space-y-4">
              {/* Phone */}
              <a
                href={`tel:${t.contact.info.phone.replace(/-/g, '')}`}
                className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 bg-deadsea-blue rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-earth-brown text-sm">{t.contact.form.phone}</div>
                  <div className="text-deep-night font-bold text-lg" dir="ltr">
                    {t.contact.info.phone}
                  </div>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/972${t.contact.info.phone.replace(/-/g, '').substring(1)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-green-500 text-white rounded-xl p-5 shadow-md hover:shadow-lg hover:bg-green-600 transition-all group"
              >
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <div className="text-white/80 text-sm">WhatsApp</div>
                  <div className="font-bold text-lg">{t.contact.whatsapp}</div>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${t.contact.info.email}`}
                className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 bg-deadsea-blue rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-earth-brown text-sm">{t.contact.form.email}</div>
                  <div className="text-deep-night font-bold text-lg" dir="ltr">
                    {t.contact.info.email}
                  </div>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-md">
                <div className="w-14 h-14 bg-deadsea-blue rounded-full flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-earth-brown text-sm">
                    {isRTL ? 'כתובת' : 'Address'}
                  </div>
                  <div className="text-deep-night font-bold text-lg">
                    {t.contact.info.address}
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-md">
                <div className="w-14 h-14 bg-deadsea-blue rounded-full flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-earth-brown text-sm">
                    {isRTL ? 'שעות פעילות' : 'Hours'}
                  </div>
                  <div className="text-deep-night font-bold text-lg">
                    {t.contact.info.hours}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
