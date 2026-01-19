# AYURFEM Website

Ayurvedic wellness website for women, built with Next.js 14, featuring multi-language support (English, Spanish, French).

## Features

- **Multi-language**: English, Spanish, French with automatic locale detection
- **Pages**: Home, About, Services, Blog, Shop, Contact, Privacy, Terms
- **Design**: Calming, professional aesthetic with brand colors from logo
- **Responsive**: Mobile-first design with Tailwind CSS
- **SEO Ready**: Static site generation with next-intl

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS 3
- next-intl for internationalization

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 3. Build for Production

```bash
npm run build
```

## Deploy to Vercel

### Option 1: Using Vercel Dashboard (Recommended)

1. Create a GitHub repository and push this code
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy" (Vercel auto-detects Next.js)

### Option 2: Using Vercel CLI

```bash
npx vercel login
npx vercel --prod
```

## Connect ayurfem.com Domain

After deployment:

1. Go to your Vercel project dashboard
2. Click "Settings" → "Domains"
3. Add `ayurfem.com`
4. Vercel will show DNS records to add

### DNS Settings for Squarespace

Go to: https://account.squarespace.com/domains/managed/ayurfem.com/dns/dns-settings

Add these records:

| Type  | Host | Value                    |
|-------|------|--------------------------|
| A     | @    | 76.76.21.21             |
| CNAME | www  | cname.vercel-dns.com    |

Wait 24-48 hours for DNS propagation.

## Project Structure

```
├── messages/          # Translation files (en.json, es.json, fr.json)
├── public/            # Static assets
├── src/
│   ├── app/
│   │   └── [locale]/  # Pages by locale
│   ├── components/    # Reusable components
│   └── i18n/          # Internationalization config
├── next.config.js
├── tailwind.config.js
└── package.json
```

## Adding Your Logo

Place your logo image at `public/images/logo.webp` and update the Header component to use:

```jsx
<Image src="/images/logo.webp" alt="AYURFEM" width={50} height={50} />
```

## Brand Colors (from your logo)

- **Forest Green**: `#1e5631` - Primary brand color
- **Dusty Rose**: `#e8b4ae` - Accent color
- **Cream/Parchment**: `#faf6f0` - Background

## Contact

- Email: admin@ayurfem.com
- Domain: ayurfem.com

---

Built with ♥ for AYURFEM
