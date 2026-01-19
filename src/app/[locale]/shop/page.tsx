'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function ShopPage() {
  const t = useTranslations('shop');

  const products = [
    {
      id: 1,
      name: 'Hormone Harmony Blend',
      description: 'Adaptogenic herb blend supporting hormonal balance',
      price: '€45',
      category: 'herbs',
      image: '🌿',
      bestseller: true,
    },
    {
      id: 2,
      name: 'Shatavari Capsules',
      description: 'Traditional support for female reproductive health',
      price: '€35',
      category: 'herbs',
      image: '💊',
    },
    {
      id: 3,
      name: 'Fertility Support Tea',
      description: 'Organic herbal blend for preconception wellness',
      price: '€22',
      category: 'teas',
      image: '🍵',
    },
    {
      id: 4,
      name: 'Calming Moon Tea',
      description: 'Evening blend for relaxation and restful sleep',
      price: '€18',
      category: 'teas',
      image: '🌙',
    },
    {
      id: 5,
      name: 'Abhyanga Body Oil',
      description: 'Warming sesame oil blend for self-massage',
      price: '€38',
      category: 'oils',
      image: '🫒',
      bestseller: true,
    },
    {
      id: 6,
      name: 'Stress Relief Kit',
      description: 'Complete kit: tea, oil, and supplement for stress support',
      price: '€85',
      category: 'kits',
      image: '🎁',
    },
    {
      id: 7,
      name: 'Ashwagandha Root Extract',
      description: 'Premium adaptogen for stress resilience',
      price: '€32',
      category: 'herbs',
      image: '🌱',
    },
    {
      id: 8,
      name: 'Menopause Transition Kit',
      description: 'Complete support kit for perimenopause symptoms',
      price: '€95',
      category: 'kits',
      image: '🦋',
    },
  ];

  const categories = ['all', 'herbs', 'teas', 'oils', 'kits'];

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

      {/* Shop Section */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 bg-white border border-sage-200 text-sage-600 hover:bg-sage-50 hover:border-sage-400"
              >
                {t(`categories.${category}`)}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="card group hover:-translate-y-1 transition-transform duration-300"
              >
                {/* Product Image */}
                <div className="aspect-square bg-gradient-to-br from-sage-100 to-cream-100 flex items-center justify-center relative">
                  <span className="text-6xl">{product.image}</span>
                  {product.bestseller && (
                    <span className="absolute top-3 left-3 px-3 py-1 text-xs font-medium bg-terracotta-500 text-white rounded-full">
                      Bestseller
                    </span>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-5">
                  <h3 className="font-serif font-medium text-sage-800 mb-2 group-hover:text-sage-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sage-600 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-serif font-bold text-sage-700">
                      {product.price}
                    </span>
                    <button className="px-4 py-2 text-sm font-medium text-sage-600 bg-sage-100 rounded-full hover:bg-sage-200 transition-colors">
                      {t('viewDetails')}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Free Shipping Banner */}
          <div className="mt-16 bg-sage-100 rounded-2xl p-8 text-center">
            <div className="text-4xl mb-4">🚚</div>
            <h3 className="text-xl font-serif font-medium text-sage-800 mb-2">
              Free Shipping on Orders Over €75
            </h3>
            <p className="text-sage-600">
              We ship throughout Europe with sustainable packaging
            </p>
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="section-padding bg-sage-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="heading-lg mb-4">Our Quality Promise</h2>
            <p className="text-body">
              Every product is carefully sourced and formulated with your wellness in mind.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: '🌿', title: 'Ethically Sourced', desc: 'Herbs from sustainable farms' },
              { icon: '🔬', title: 'Lab Tested', desc: 'Third-party purity verification' },
              { icon: '🌍', title: 'Eco-Friendly', desc: 'Recyclable packaging' },
              { icon: '❤️', title: 'Made with Love', desc: 'Small batch production' },
            ].map((item, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h4 className="font-serif font-medium text-sage-800 mb-2">{item.title}</h4>
                <p className="text-sage-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-sage-700 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg text-white mb-6">Need Personalized Recommendations?</h2>
            <p className="text-sage-200 mb-10">
              Book a consultation and get a customized product protocol for your unique needs.
            </p>
            <Link href="/contact" className="btn-accent text-lg px-10 py-4">
              Book Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
