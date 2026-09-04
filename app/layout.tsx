import './globals.css';

export const metadata = {
  title: 'Queenan Capital | Independent Holding Company',
  description: 'Queenan Capital LLC is an independent holding company focused on operating businesses, logistics, and select long-term investment opportunities.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
