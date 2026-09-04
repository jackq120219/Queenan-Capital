import './globals.css';

export const metadata = {
  title: 'Queenan Capital',
  description: 'Capital. Logistics. Intelligence.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
