import type { Metadata } from 'next';
import './globals.css';
import './vision.css';
import './design-system.css';
import './institutional-motion.css';
import './hero-fixes.css';
import './logo-fixes.css';
import './maintenance.css';
import './sep9-polish.css';
import InstitutionalMotion from './institutional-motion';
import VentureOrbit from './venture-orbit';
import PortfolioCurrent from './portfolio-current';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.queenancapital.com'),
  applicationName: 'Queenan Capital',
  title: {
    default: 'Queenan Capital | Independent Holding Company',
    template: '%s | Queenan Capital',
  },
  description: 'Queenan Capital is an independent holding company based in Chicago, focused on industry research, long-term ownership, and internally developed operating businesses.',
  keywords: [
    'Queenan Capital',
    'holding company',
    'Chicago holding company',
    'operating businesses',
    'ExpenseIntel',
    'Waterline Intel',
    'Gage Grid',
    'industrial infrastructure intelligence',
  ],
  authors: [{ name: 'Queenan Capital', url: 'https://www.queenancapital.com/' }],
  creator: 'Queenan Capital',
  publisher: 'Queenan Capital',
  category: 'business',
  icons: {
    icon: [{ url: '/queenan-favicon.png', type: 'image/png', sizes: '192x192' }],
    shortcut: '/queenan-favicon.png',
    apple: '/queenan-favicon.png',
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
    description: 'Queenan Capital is an independent holding company based in Chicago, focused on research, long-term ownership, and operating businesses.',
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
    description: 'Queenan Capital is an independent holding company based in Chicago, focused on research, long-term ownership, and operating businesses.',
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
      alternateName: ['Queenan Capital', 'queenancapital.com'],
      publisher: {
        '@id': 'https://www.queenancapital.com/#organization',
      },
    },
    {
      '@type': 'Organization',
      '@id': 'https://www.queenancapital.com/#organization',
      name: 'Queenan Capital',
      url: 'https://www.queenancapital.com/',
      logo: 'https://www.queenancapital.com/queenan-favicon.png',
      description: 'Queenan Capital is an independent holding company based in Chicago, focused on industry research, long-term ownership, and internally developed operating businesses.',
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
      knowsAbout: [
        'holding companies',
        'industry research',
        'Great Lakes freight intelligence',
        'logistics decision support',
        'pre-commitment decision intelligence',
        'industrial infrastructure intelligence',
        'industrial site serviceability research',
      ],
      subOrganization: [
        {
          '@type': 'Organization',
          '@id': 'https://www.expenseintel.com/#organization',
          name: 'ExpenseIntel',
          url: 'https://www.expenseintel.com/',
          description: 'Pre-commitment decision intelligence for meaningful spending decisions.',
        },
        {
          '@type': 'Organization',
          '@id': 'https://waterlineintel.com/#organization',
          name: 'Waterline Intel',
          url: 'https://waterlineintel.com/',
          description: 'Great Lakes freight intelligence and logistics decision-support platform.',
        },
        {
          '@type': 'Organization',
          '@id': 'https://gage-grid.vercel.app/#organization',
          name: 'Gage Grid',
          url: 'https://gage-grid.vercel.app/',
          description: 'Industrial site infrastructure intelligence for project screening, site comparison, evidence quality, and diligence sequencing.',
        },
      ],
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(queanStructuredData) }}
        />
        <InstitutionalMotion>{children}</InstitutionalMotion>
        <VentureOrbit />
        <PortfolioCurrent />
      </body>
    </html>
  );
}
