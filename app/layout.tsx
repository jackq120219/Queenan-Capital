import './globals.css';

export const metadata = {
  title: 'Queenan Capital | Holding & Research Company',
  description: 'Queenan Capital LLC is an independent holding and research company focused on logistics, industrial services, operating businesses, and decision intelligence.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
