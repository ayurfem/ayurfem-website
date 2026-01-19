'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function ContactPage() {
  const t = useTranslations('contact');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-sage-100 via-cream-100 to-rose-50">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-6">{t('title')}</h1>
            <p className="text-body text-lg">{t('subtitle')}</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="card p-8 md:p-10">
                {formSubmitted ? (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-6">✨</div>
                    <h3 className="heading-md mb-4 text-sage-800">{t('form.success')}</h3>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="btn-secondary mt-4"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-sage-700 mb-2">
                        {t('form.name')} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="input-field"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-sage-700 mb-2">
                        {t('form.email')} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="input-field"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-sage-700 mb-2">
                        {t('form.phone')}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="input-field"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-sage-700 mb-2">
                        {t('form.subject')} *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        className="input-field"
                      >
                        <option value="">Select a topic...</option>
                        <option value="consultation">Book a Consultation</option>
                        <option value="programs">Wellness Programs</option>
                        <option value="products">Product Inquiry</option>
                        <option value="corporate">Corporate Wellness</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-sage-700 mb-2">
                        {t('form.message')} *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="input-field resize-none"
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full">
                      {t('form.submit')}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info & FAQ */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div className="card p-8">
                <h3 className="text-xl font-serif font-medium text-sage-800 mb-6">
                  {t('info.title')}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-sage-800">Email</p>
                      <a href="mailto:admin@ayurfem.com" className="text-sage-600 hover:text-sage-800 transition-colors">
                        {t('info.email')}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-sage-800">Hours</p>
                      <p className="text-sage-600">{t('info.hours')}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-sage-800">Response Time</p>
                      <p className="text-sage-600">{t('info.response')}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="card p-8">
                <h3 className="text-xl font-serif font-medium text-sage-800 mb-6">
                  {t('faq.title')}
                </h3>
                <div className="space-y-6">
                  {['q1', 'q2', 'q3'].map((q, index) => (
                    <div key={index}>
                      <h4 className="font-medium text-sage-800 mb-2">
                        {t(`faq.${q}`)}
                      </h4>
                      <p className="text-sage-600 text-sm leading-relaxed">
                        {t(`faq.a${index + 1}`)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="card p-8 bg-sage-50">
                <h3 className="text-xl font-serif font-medium text-sage-800 mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  {[
                    { name: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
                    { name: 'Facebook', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
                    { name: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={`https://${social.name.toLowerCase()}.com/ayurfem`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-sage-600 hover:text-sage-800 hover:bg-sage-100 transition-colors"
                      aria-label={social.name}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d={social.icon} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map/Location Section (placeholder) */}
      <section className="section-padding bg-sage-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-lg mb-4">Online & In-Person Sessions</h2>
            <p className="text-body mb-8">
              We offer video consultations worldwide, with in-person sessions available in select cities across Spain and Switzerland.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Barcelona', 'Madrid', 'Geneva', 'Zurich'].map((city, index) => (
                <span
                  key={index}
                  className="px-6 py-3 bg-white rounded-full text-sage-700 font-medium shadow-sm"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
