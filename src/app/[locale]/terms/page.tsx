'use client';

import { Link } from '@/i18n/routing';

export default function TermsPage() {
  return (
    <>
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-sage-100 via-cream-100 to-rose-50">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-6">Terms of Service</h1>
            <p className="text-body text-lg">Last updated: January 2026</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose prose-sage">
            <div className="card p-8 md:p-12 space-y-8">
              <div>
                <h2 className="heading-md mb-4">Acceptance of Terms</h2>
                <p className="text-body">
                  By accessing and using AYURFEM's website and services, you accept and agree to be
                  bound by the terms and provisions of this agreement.
                </p>
              </div>

              <div>
                <h2 className="heading-md mb-4">Services</h2>
                <p className="text-body">
                  AYURFEM provides Ayurvedic wellness consultations, educational content, and wellness
                  products. Our services are intended for educational and wellness purposes only and
                  should not replace professional medical advice.
                </p>
              </div>

              <div>
                <h2 className="heading-md mb-4">Medical Disclaimer</h2>
                <p className="text-body">
                  The information provided by AYURFEM is for educational purposes only and is not
                  intended to diagnose, treat, cure, or prevent any disease. Always consult with a
                  qualified healthcare provider before starting any new health program, supplement
                  regimen, or making changes to existing treatment.
                </p>
              </div>

              <div>
                <h2 className="heading-md mb-4">Consultations</h2>
                <p className="text-body">
                  Our Ayurvedic consultations provide personalized wellness recommendations based on
                  traditional Ayurvedic principles. These consultations complement but do not replace
                  conventional medical care.
                </p>
              </div>

              <div>
                <h2 className="heading-md mb-4">Products</h2>
                <p className="text-body">
                  All products sold through AYURFEM are dietary supplements and are not intended to
                  diagnose, treat, cure, or prevent any disease. Results may vary between individuals.
                </p>
              </div>

              <div>
                <h2 className="heading-md mb-4">Cancellation Policy</h2>
                <p className="text-body">
                  Consultations may be cancelled or rescheduled up to 24 hours before the appointment
                  time without penalty. Cancellations made less than 24 hours in advance may be
                  subject to a cancellation fee.
                </p>
              </div>

              <div>
                <h2 className="heading-md mb-4">Intellectual Property</h2>
                <p className="text-body">
                  All content on this website, including text, graphics, logos, and images, is the
                  property of AYURFEM and is protected by copyright laws.
                </p>
              </div>

              <div>
                <h2 className="heading-md mb-4">Governing Law</h2>
                <p className="text-body">
                  These terms shall be governed by and construed in accordance with the laws of the
                  European Union and the applicable laws of Spain and Switzerland.
                </p>
              </div>

              <div>
                <h2 className="heading-md mb-4">Contact</h2>
                <p className="text-body">
                  For questions about these Terms, please contact us at:{' '}
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
