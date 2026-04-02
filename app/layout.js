import './globals.css';

export const metadata = {
  metadataBase: new URL('https://theblackfoxstudio.com'),
  title: 'BLACKFOX DIGITAL',
  description: 'Professional image post-production studio',
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
