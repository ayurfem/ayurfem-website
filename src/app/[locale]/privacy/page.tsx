'use client';

import { Link } from '@/i18n/routing';

export default function PrivacyPage() {
  return (
    <>
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-sage-100 via-cream-100 to-rose-50">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-6">Privacy Policy</h1>
            <p className="text-body text-lg">Last updated: January 2026</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose prose-sage">
            <div className="card p-8 md:p-12 space-y-8">
              <div>
                <h2 className="heading-md mb-4">Information We Collect</h2>
                <p className="text-body">
                  We collect information you provide directly to us, such as when you create an account,
                  make a purchase, book a consultation, or contact us. This may include your name, email
                  address, phone number, and health-related information you choose to share.
                </p>
              </div>

              <div>
                <h2 className="heading-md mb-4">How We Use Your Information</h2>
                <p className="text-body">
                  We use the information we collect to provide, maintain, and improve our services,
                  process transactions, send you related information, and communicate with you about
                  products, services, and events.
                </p>
              </div>

              <div>
                <h2 className="heading-md mb-4">Information Sharing</h2>
                <p className="text-body">
                  We do not sell, trade, or otherwise transfer your personal information to third parties
                  without your consent, except as necessary to provide our services or as required by law.
                </p>
              </div>

              <div>
                <h2 className="heading-md mb-4">Data Security</h2>
                <p className="text-body">
                  We implement appropriate technical and organizational measures to protect your personal
                  information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>

              <div>
                <h2 className="heading-md mb-4">Your Rights (GDPR)</h2>
                <p className="text-body">
                  Under GDPR, you have the right to access, rectify, erase, restrict processing,
                  data portability, and object to processing of your personal data. To exercise these
                  rights, please contact us at admin@ayurfem.com.
                </p>
              </div>

              <div>
                <h2 className="heading-md mb-4">Cookies</h2>
                <p className="text-body">
                  We use cookies to enhance your experience on our website. You can control cookies
                  through your browser settings.
                </p>
              </div>

              <div>
                <h2 className="heading-md mb-4">Contact Us</h2>
                <p className="text-body">
                  If you have questions about this Privacy Policy, please contact us at:{' '}
                  <a href="mailto:admin@ayurfem.com" className="text-sage-600 hover:text-sage-800">
                    admin@ayurfem.com
                  </a>
                </p>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link href="/" className="btn-secondary">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
