import type { Metadata } from 'next';
import './site-refresh.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.queenancapital.com'),
  title: { default: 'Queenan Capital | Building for the Long Term', template: '%s | Queenan Capital' },
  description: 'Queenan Capital is an independent Chicago holding company developing freight intelligence, internal engineering, quantitative research and financial technology initiatives.',
  keywords: ['Queenan Capital', 'independent holding company', 'Waterline Intel', 'COEUS', 'Queenan Alpha', 'financial intelligence', 'long-term ownership'],
  alternates: { canonical: 'https://www.queenancapital.com/' },
  icons: { icon: '/queenan-favicon.png', apple: '/queenan-favicon.png' },
  openGraph: {
    title: 'Queenan Capital | Building for the Long Term',
    description: 'A long-term company combining operating businesses, proprietary intelligence and disciplined capital allocation.',
    url: 'https://www.queenancapital.com/',
    siteName: 'Queenan Capital',
    type: 'website',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Queenan Capital' }],
  },
  twitter: { card: 'summary_large_image', images: ['/opengraph-image'] },
};
const structured = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://www.queenancapital.com/#organization',
  name: 'Queenan Capital LLC',
  url: 'https://www.queenancapital.com/',
  foundingDate: '2026-10-08',
  address: { '@type': 'PostalAddress', addressLocality: 'Chicago', addressRegion: 'IL', addressCountry: 'US' },
  description: 'Independent holding company developing commercial intelligence and technology capabilities.',
  subOrganization: [{
    '@type': 'Organization',
    name: 'Waterline Intel',
    url: 'https://waterlineintel.com/',
    description: 'Freight intelligence and logistics decision support.',
  }],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structured) }} />
    {children}
  </body></html>;
}
