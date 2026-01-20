# AYURFEM Website Changelog

## January 20, 2026 - Update 2

### Latest Changes
- Added FAQ section with 6 questions/answers
- Added floating WhatsApp connect button
- Added copyright protection warning in footer
- Fixed article links (now pointing to actual articles)
- Enhanced mobile responsiveness

---

## January 20, 2026 - Initial Session

### Session Summary - Complete Implementation

#### Core Website Features
- **Multi-language support**: English, Spanish, French (i18n implemented)
- **Domain**: ayurfem.com (connected via Squarespace DNS)
- **Hosting**: Vercel deployment from GitHub repo `ayurfem/ayurfem-website`
- **Google Search Console**: Verified and sitemap submitted

#### Design & Branding
- Logo with liquid glass "AYURFEM" text in navbar
- Large transparent logo in hero background (12% opacity, 600px)
- Profile photo added to About section (images/profile.jpeg)
- Sage green color palette matching logo

#### Sections Implemented
1. **Hero** - Main tagline with CTAs
2. **Trust Bar** - Stats (10+ years, 1.5 years India, 100+ women)
3. **Problem Section** - "Have You Ever Been Told..." quotes
4. **About/My Story** - Profile photo + credentials
5. **Research Section** - 6 research areas:
   - Menopausal Symptom Management (Active)
   - PCOS Integrative Protocol (Flagship Study)
   - Sutika Paricharya/Postpartum Recovery (Active)
   - Fertility Enhancement (Planning)
   - Ayurgenomics & Prakriti (Planning)
   - Apitherapy & Royal Jelly (Exploring)
6. **Conditions Section** - PCOS, Fertility, Pregnancy, Postpartum, Menopause, Hormonal Balance
7. **Knowledge Hub** - 3 articles (linked)
8. **Science Section** - Evidence chain explanation
9. **Collaboration Section** - Research collaboration form
10. **Newsletter Section** - Email signup
11. **Footer** - Links, social media, legal pages

#### Articles Created
- `/articles/pcos-what-your-doctor-didnt-tell-you.html`
- `/articles/shatavari-2025-study.html`
- `/articles/first-40-days-postpartum.html`

#### GDPR Compliance (Added)
- Cookie consent banner with Accept/Reject/Preferences buttons
- Cookie settings modal with toggle controls
- Privacy Policy page (`/privacy-policy.html`)
- Terms of Service page (`/terms.html`)
- Newsletter privacy note
- Footer legal links

#### Social Links (Footer)
- Email: admin@ayurfem.com
- LinkedIn: https://www.linkedin.com/in/sarandaferizi
- Instagram: https://www.instagram.com/ayurfem
- WhatsApp: https://wa.me/34634057003

#### Mobile Responsiveness (Fixed)
- Hero section adjustments
- About section single column
- Research cards single column
- Conditions grid 2x2
- Articles single column
- Footer centered single column
- All forms full-width on mobile

#### Files Structure
```
ayurfem-website 2/
├── index.html
├── privacy-policy.html
├── terms.html
├── CHANGELOG.md
├── css/
│   └── style.css
├── js/
│   └── main.js (includes translations + cookie consent)
├── images/
│   ├── logo.jpeg
│   └── profile.jpeg
└── articles/
    ├── pcos-what-your-doctor-didnt-tell-you.html
    ├── shatavari-2025-study.html
    └── first-40-days-postpartum.html
```

#### Google Search Status
- ayurfem.com NOT YET INDEXED (normal for new site, 1-4 weeks)
- LinkedIn profile IS appearing in search results
- Competitors using similar names exist in Spain

---

## Deployment Commands
```bash
cd ~/Downloads/ayurfem-website
cp -r ~/Downloads/ayurfem-website\ 2/* ./ayurfem-website\ 2/
git add .
git commit -m "Your commit message"
git push
```

## Notes
- Forms use Formspree (need to update form IDs)
- Contact email: admin@ayurfem.com
- Phone/WhatsApp: +34 634 057 003
