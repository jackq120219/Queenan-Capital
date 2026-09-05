import './globals.css';
import './vision.css';

export const metadata = {
  metadataBase: new URL('https://queenancapital.com'),
  title: {
    default: 'Queenan Capital',
    template: '%s | Queenan Capital',
  },
  description: 'Queenan Capital LLC is an independent holding company based in Chicago. We study industries, pursue selective ownership, and build when a problem is worth solving.',
  openGraph: {
    title: 'Queenan Capital',
    description: 'Independent holding company. Chicago, Illinois.',
    url: 'https://queenancapital.com',
    siteName: 'Queenan Capital',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
