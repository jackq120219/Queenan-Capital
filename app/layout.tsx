import './globals.css';
import './vision.css';
import './design-system.css';

export const metadata = {
  metadataBase: new URL('https://queenancapital.com'),
  title: {
    default: 'Queenan Capital | Independent Holding Company',
    template: '%s | Queenan Capital',
  },
  description: 'Queenan Capital LLC is an independent holding company based in Chicago, focused on industry research, selective ownership, and internally developed operating businesses.',
  keywords: [
    'Queenan Capital',
    'holding company',
    'Chicago holding company',
    'operating businesses',
    'Waterline Intel',
    'Expense Intel',
  ],
  authors: [{ name: 'Queenan Capital LLC', url: 'https://queenancapital.com' }],
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
    description: 'Independent holding company based in Chicago. Research first, selective ownership, and operating businesses built for long-term value.',
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
    description: 'Independent holding company based in Chicago, focused on research, selective ownership, and operating businesses.',
    images: ['/opengraph-image'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
