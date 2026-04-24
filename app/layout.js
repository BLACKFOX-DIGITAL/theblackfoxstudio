import './globals.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  metadataBase: new URL('https://theblackfoxstudio.com'),
  title: 'BLACKFOX DIGITAL',
  description: 'Professional image post-production studio — background removal, clipping path, ghost mannequin, beauty retouching and 20+ services. 80+ specialist editors. 24-hour delivery.',
  openGraph: {
    siteName: 'BLACKFOX DIGITAL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@blackfoxdigital',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
