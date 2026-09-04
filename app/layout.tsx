import './globals.css';

export const metadata = {
  title: 'Queenan Capital | Independent Holding & Research Platform',
  description: 'Queenan Capital is an independent holding and research platform focused on capital, operations, and intelligence.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
