'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function ServicesPage() {
  const t = useTranslations('services');
  const common = useTranslations('common');

  const programs = [
    { key: 'hormone', icon: '🌸', duration: '8 weeks' },
    { key: 'fertility', icon: '🌱', duration: '12 weeks' },
    { key: 'menopause', icon: '🦋', duration: '10 weeks' },
  ];

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

      {/* 1:1 Consultations */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-5xl mb-6">🗓️</div>
              <h2 className="heading-lg mb-4">{t('consultation.title')}</h2>
              <p className="text-body mb-8">{t('consultation.description')}</p>
              <Link href="/contact" className="btn-primary">
                {t('booking')}
              </Link>
            </div>
            <div className="space-y-4">
              {/* Initial Consultation */}
              <div className="card p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-serif font-medium text-sage-800">
                    {t('consultation.initial')}
                  </h3>
                  <span className="text-2xl font-serif font-bold text-sage-700">
                    {t('consultation.initialPrice')}
                  </span>
                </div>
                <p className="text-sage-600 text-sm">
                  Comprehensive assessment of your constitution, health history, and current concerns.
                </p>
              </div>

              {/* Follow-up */}
              <div className="card p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-serif font-medium text-sage-800">
                    {t('consultation.followup')}
                  </h3>
                  <span className="text-2xl font-serif font-bold text-sage-700">
                    {t('consultation.followupPrice')}
                  </span>
                </div>
                <p className="text-sage-600 text-sm">
                  Review progress, adjust protocols, and address new concerns.
                </p>
              </div>

              {/* Package */}
              <div className="card p-6 bg-sage-50 border-2 border-sage-300">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-terracotta-100 text-terracotta-700 rounded-full mb-2">
                      Best Value
                    </span>
                    <h3 className="text-xl font-serif font-medium text-sage-800">
                      {t('consultation.package')}
                    </h3>
                  </div>
                  <span className="text-2xl font-serif font-bold text-sage-700">
                    {t('consultation.packagePrice')}
                  </span>
                </div>
                <p className="text-sage-600 text-sm">
                  {t('consultation.packageIncludes')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wellness Programs */}
      <section className="section-padding bg-sage-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg mb-4">{t('programs.title')}</h2>
            <p className="text-body">{t('programs.description')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="card p-8 text-center hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="text-5xl mb-4">{program.icon}</div>
                <h3 className="text-2xl font-serif font-medium text-sage-800 mb-3">
                  {t(`programs.${program.key}`)}
                </h3>
                <p className="text-sage-600 mb-4">
                  {t(`programs.${program.key}Desc`)}
                </p>
                <span className="inline-block px-4 py-2 bg-sage-100 text-sage-700 rounded-full text-sm font-medium">
                  {program.duration}
                </span>
                <div className="mt-6">
                  <Link href="/contact" className="btn-secondary w-full justify-center">
                    {common('learnMore')}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Wellness */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-video rounded-3xl bg-gradient-to-br from-sage-200 to-sage-300 flex items-center justify-center">
                <div className="text-8xl">🏢</div>
              </div>
            </div>
            <div>
              <h2 className="heading-lg mb-4">{t('corporate.title')}</h2>
              <p className="text-body mb-8">{t('corporate.description')}</p>
              <ul className="space-y-3 mb-8">
                {['Stress management workshops', 'Team wellness programs', 'Lunch & learn sessions', 'Customized corporate packages'].map((item, index) => (
                  <li key={index} className="flex items-center text-sage-700">
                    <svg className="w-5 h-5 mr-3 text-terracotta-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-primary">
                Inquire About Corporate Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-sage-700 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg text-white mb-6">Not Sure Where to Start?</h2>
            <p className="text-sage-200 mb-10">
              Book a free 15-minute discovery call and we'll help you find the right service for your needs.
            </p>
            <Link href="/contact" className="btn-accent text-lg px-10 py-4">
              Schedule Free Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
