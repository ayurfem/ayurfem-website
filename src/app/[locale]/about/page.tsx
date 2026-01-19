'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function AboutPage() {
  const t = useTranslations('about');
  const common = useTranslations('common');

  const values = [
    { key: 'value1', icon: '🔬' },
    { key: 'value2', icon: '💜' },
    { key: 'value3', icon: '💪' },
    { key: 'value4', icon: '🌍' },
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

      {/* Mission Section */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-lg mb-6">{t('mission.title')}</h2>
              <p className="text-body leading-relaxed">{t('mission.text')}</p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-sage-200 to-sage-300 flex items-center justify-center">
                <div className="text-8xl">🌸</div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-terracotta-200 rounded-full opacity-60" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-rose-200 rounded-full opacity-60" />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-sage-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-cream-200 to-rose-200 flex items-center justify-center">
                <div className="text-8xl">🧘</div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-sage-200 rounded-full opacity-60" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="heading-lg mb-6">{t('story.title')}</h2>
              <p className="text-body leading-relaxed">{t('story.text')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg mb-4">{t('values.title')}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="card p-8 text-center hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-serif font-medium text-sage-800 mb-3">
                  {t(`values.${value.key}`)}
                </h3>
                <p className="text-sage-600 text-sm leading-relaxed">
                  {t(`values.${value.key}Desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-sage-700 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg text-white mb-6">Ready to Start Your Journey?</h2>
            <p className="text-sage-200 mb-10">
              Book a free discovery call to see how AYURFEM can support your wellness goals.
            </p>
            <Link href="/contact" className="btn-accent text-lg px-10 py-4">
              {common('bookNow')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
