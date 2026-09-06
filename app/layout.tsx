import type { Metadata } from 'next';
import './globals.css';
import './vision.css';
import './design-system.css';
import './institutional-motion.css';
import './hero-fixes.css';
import InstitutionalMotion from './institutional-motion';
import VentureOrbit from './venture-orbit';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.queenancapital.com'),
  applicationName: 'Queenan Capital',
  title: {
    default: 'Queenan Capital | Independent Holding Company',
    template: '%s | Queenan Capital',
  },
  description: 'Queenan Capital LLC is an independent holding company based in Chicago, focused on industry research, selective ownership, and internally developed operating businesses.',
  keywords: [
    'Queenan Capital',
    'Queenan Capital LLC',
    'holding company',
    'Chicago holding company',
    'operating businesses',
    'Waterline Intel',
    'ExpenseIntel',
  ],
  authors: [{ name: 'Queenan Capital LLC', url: 'https://www.queenancapital.com/' }],
  creator: 'Queenan Capital LLC',
  publisher: 'Queenan Capital LLC',
  category: 'business',
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    shortcut: '/icon.svg',
  },
  alternates: {
    canonical: 'https://www.queenancapital.com/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'Queenan Capital | Independent Holding Company',
    description: 'Queenan Capital LLC is an independent holding company based in Chicago, focused on research, selective ownership, and operating businesses.',
    url: 'https://www.queenancapital.com/',
    siteName: 'Queenan Capital',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Queenan Capital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Queenan Capital | Independent Holding Company',
    description: 'Queenan Capital LLC is an independent holding company based in Chicago, focused on research, selective ownership, and operating businesses.',
    images: ['/opengraph-image'],
  },
};

const queenanStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://www.queenancapital.com/#website',
      url: 'https://www.queenancapital.com/',
      name: 'Queenan Capital',
      alternateName: ['Queenan Capital LLC', 'queenancapital.com'],
      publisher: {
        '@id': 'https://www.queenancapital.com/#organization',
      },
    },
    {
      '@type': 'Organization',
      '@id': 'https://www.queenancapital.com/#organization',
      name: 'Queenan Capital',
      legalName: 'Queenan Capital LLC',
      url: 'https://www.queenancapital.com/',
      logo: 'https://www.queenancapital.com/icon.svg',
      description: 'Queenan Capital LLC is an independent holding company based in Chicago, focused on industry research, selective ownership, and internally developed operating businesses.',
      foundingDate: '2026',
      foundingLocation: {
        '@type': 'Place',
        name: 'Chicago, Illinois, United States',
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Chicago',
        addressRegion: 'IL',
        addressCountry: 'US',
      },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(queenanStructuredData) }}
        />
        <InstitutionalMotion>{children}</InstitutionalMotion>
        <VentureOrbit />
      </body>
    </html>
  );
}
