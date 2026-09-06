import type { Metadata } from 'next';
import './globals.css';
import './vision.css';
import './design-system.css';
import './institutional-motion.css';
import InstitutionalMotion from './institutional-motion';

export const metadata: Metadata = {
  metadataBase: new URL('https://queenancapital.com'),
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
  authors: [{ name: 'Queenan Capital LLC', url: 'https://queenancapital.com/' }],
  creator: 'Queenan Capital LLC',
  publisher: 'Queenan Capital LLC',
  category: 'business',
  alternates: {
    canonical: 'https://queenancapital.com/',
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
    url: 'https://queenancapital.com/',
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
      '@id': 'https://queenancapital.com/#website',
      url: 'https://queenancapital.com/',
      name: 'Queenan Capital',
      alternateName: ['Queenan Capital LLC', 'queenancapital.com'],
      publisher: {
        '@id': 'https://queenancapital.com/#organization',
      },
    },
    {
      '@type': 'Organization',
      '@id': 'https://queenancapital.com/#organization',
      name: 'Queenan Capital',
      legalName: 'Queenan Capital LLC',
      url: 'https://queenancapital.com/',
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
      </body>
    </html>
  );
}
