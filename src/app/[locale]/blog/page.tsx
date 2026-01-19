'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function BlogPage() {
  const t = useTranslations('blog');

  const featuredPost = {
    id: 1,
    title: 'Understanding Your Dosha: A Beginner\'s Guide to Ayurvedic Constitution',
    excerpt: 'Discover the three doshas—Vata, Pitta, and Kapha—and learn how understanding your unique constitution can transform your approach to health and wellness.',
    category: 'Ayurveda Basics',
    date: 'January 15, 2026',
    readTime: '8 min read',
    image: '🧘',
  };

  const posts = [
    {
      id: 2,
      title: '5 Ayurvedic Herbs Every Woman Should Know',
      excerpt: 'From Shatavari to Ashwagandha, these powerful herbs have been supporting women\'s health for thousands of years.',
      category: 'Hormonal Health',
      date: 'January 10, 2026',
      readTime: '6 min read',
      image: '🌿',
    },
    {
      id: 3,
      title: 'Morning Rituals for Hormonal Balance',
      excerpt: 'Start your day with these simple Ayurvedic practices to support your natural hormone rhythms.',
      category: 'Lifestyle',
      date: 'January 5, 2026',
      readTime: '5 min read',
      image: '☀️',
    },
    {
      id: 4,
      title: 'Golden Milk Recipe for Better Sleep',
      excerpt: 'This warming turmeric drink is a traditional Ayurvedic remedy for calming the nervous system.',
      category: 'Recipes',
      date: 'December 28, 2025',
      readTime: '3 min read',
      image: '🥛',
    },
    {
      id: 5,
      title: 'Navigating Perimenopause with Ayurveda',
      excerpt: 'How ancient wisdom can help you embrace this natural transition with grace and vitality.',
      category: 'Hormonal Health',
      date: 'December 20, 2025',
      readTime: '7 min read',
      image: '🦋',
    },
    {
      id: 6,
      title: 'The Science Behind Ayurvedic Practices',
      excerpt: 'Modern research is validating what practitioners have known for millennia.',
      category: 'Ayurveda Basics',
      date: 'December 15, 2025',
      readTime: '6 min read',
      image: '🔬',
    },
    {
      id: 7,
      title: 'Seasonal Eating: Winter Foods for Your Dosha',
      excerpt: 'Nourish your body with the right foods for the cold season based on your constitution.',
      category: 'Recipes',
      date: 'December 10, 2025',
      readTime: '5 min read',
      image: '❄️',
    },
  ];

  const categories = ['all', 'ayurveda', 'hormones', 'recipes', 'lifestyle'];

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

      {/* Featured Post */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-sage-600 mb-6">
            {t('featured')}
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="aspect-video rounded-3xl bg-gradient-to-br from-sage-200 to-sage-300 flex items-center justify-center">
              <span className="text-8xl">{featuredPost.image}</span>
            </div>
            <div>
              <span className="inline-block px-3 py-1 text-xs font-medium bg-terracotta-100 text-terracotta-700 rounded-full mb-4">
                {featuredPost.category}
              </span>
              <h3 className="heading-md mb-4 hover:text-sage-600 transition-colors cursor-pointer">
                {featuredPost.title}
              </h3>
              <p className="text-body mb-6">{featuredPost.excerpt}</p>
              <div className="flex items-center text-sm text-sage-500 mb-6">
                <span>{featuredPost.date}</span>
                <span className="mx-3">•</span>
                <span>{featuredPost.readTime}</span>
              </div>
              <button className="btn-primary">
                {t('readMore')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding bg-sage-50">
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

          <h2 className="text-sm font-semibold uppercase tracking-wider text-sage-600 mb-8">
            {t('recent')}
          </h2>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="card group hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-cream-100 to-rose-100 flex items-center justify-center">
                  <span className="text-5xl">{post.image}</span>
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-sage-100 text-sage-700 rounded-full mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-serif font-medium text-sage-800 mb-3 group-hover:text-sage-600 transition-colors cursor-pointer line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sage-600 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-sage-500">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="btn-secondary">
              Load More Posts
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-sage-700 text-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="heading-lg text-white mb-4">Stay Connected</h2>
            <p className="text-sage-200 mb-8">
              Subscribe to receive weekly wellness tips, Ayurvedic recipes, and exclusive content.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-sage-600 border border-sage-500 rounded-full text-white placeholder-sage-300 focus:outline-none focus:ring-2 focus:ring-sage-400"
              />
              <button type="submit" className="btn-accent whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
