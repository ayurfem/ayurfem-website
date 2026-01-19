'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function HomePage() {
  const t = useTranslations('home');
  const hero = useTranslations('hero');
  const common = useTranslations('common');

  const testimonials = [
    {
      quote: "After years of feeling dismissed by doctors, AYURFEM finally listened. My PCOS symptoms have improved dramatically.",
      author: "Sarah M.",
      location: "Barcelona, Spain",
    },
    {
      quote: "The personalized approach made all the difference. I feel like myself again after struggling through perimenopause.",
      author: "Marie L.",
      location: "Geneva, Switzerland",
    },
    {
      quote: "I was skeptical at first, but the combination of ancient wisdom and modern research really works.",
      author: "Elena R.",
      location: "Madrid, Spain",
    },
  ];

  const conditions = [
    { key: 'pcos', icon: '🌸' },
    { key: 'fertility', icon: '🌱' },
    { key: 'menopause', icon: '🦋' },
    { key: 'thyroid', icon: '⚖️' },
    { key: 'digestive', icon: '🍃' },
    { key: 'stress', icon: '🧘' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-sage-100 via-cream-100 to-rose-50" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23627462' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="container-custom relative z-10 text-center px-4">
          <h1 className="heading-xl mb-6 animate-fade-in text-balance max-w-4xl mx-auto">
            {hero('title')}
          </h1>
          <p className="text-body max-w-2xl mx-auto mb-10 animate-slide-up text-balance">
            {hero('subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              {hero('cta')}
            </Link>
            <Link href="/about" className="btn-secondary text-lg px-8 py-4">
              {hero('secondary')}
            </Link>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream-50 to-transparent" />
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">{t('introduction.title')}</h2>
              <p className="text-body mb-8">{t('introduction.text')}</p>
              <Link href="/about" className="btn-secondary">
                {common('learnMore')}
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { stat: t('introduction.stat1'), label: t('introduction.stat1Label') },
                { stat: t('introduction.stat2'), label: t('introduction.stat2Label') },
                { stat: t('introduction.stat3'), label: t('introduction.stat3Label') },
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white rounded-2xl shadow-sm"
                >
                  <div className="text-3xl md:text-4xl font-serif font-bold text-sage-700 mb-2">
                    {item.stat}
                  </div>
                  <div className="text-sm text-sage-600">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="section-padding bg-sage-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg mb-4">{t('approach.title')}</h2>
            <p className="text-body">{t('approach.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { key: 'pillar1', icon: '🎯' },
              { key: 'pillar2', icon: '🌿' },
              { key: 'pillar3', icon: '☀️' },
              { key: 'pillar4', icon: '💫' },
            ].map((pillar, index) => (
              <div
                key={index}
                className="card p-6 text-center hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="text-4xl mb-4">{pillar.icon}</div>
                <h3 className="text-xl font-serif font-medium text-sage-800 mb-3">
                  {t(`approach.${pillar.key}`)}
                </h3>
                <p className="text-sage-600 text-sm leading-relaxed">
                  {t(`approach.${pillar.key}Desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions Section */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg mb-4">{t('conditions.title')}</h2>
            <p className="text-body">{t('conditions.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditions.map((condition, index) => (
              <div
                key={index}
                className="card-bordered p-6 flex items-start space-x-4 hover:border-sage-300 transition-colors duration-300"
              >
                <div className="text-3xl">{condition.icon}</div>
                <div>
                  <h3 className="text-lg font-serif font-medium text-sage-800">
                    {t(`conditions.${condition.key}`)}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary">
              {common('viewAll')} Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-sage-700 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg text-white mb-4">{t('testimonials.title')}</h2>
            <p className="text-sage-200">{t('testimonials.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-sage-600/50 rounded-2xl p-8 backdrop-blur-sm"
              >
                <div className="text-3xl text-sage-300 mb-4">"</div>
                <p className="text-sage-100 mb-6 italic leading-relaxed">
                  {testimonial.quote}
                </p>
                <div>
                  <div className="font-medium text-white">{testimonial.author}</div>
                  <div className="text-sage-300 text-sm">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-cream-100 to-rose-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-6">{t('cta.title')}</h2>
            <p className="text-body mb-10">{t('cta.text')}</p>
            <Link href="/contact" className="btn-accent text-lg px-10 py-4">
              {t('cta.button')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
