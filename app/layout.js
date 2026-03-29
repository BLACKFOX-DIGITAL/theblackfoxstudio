import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from "@/lib";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Blackfox Digital',
  description: 'Professional image post-production studio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "bg-background text-foreground antialiased")}>
        {children}
      </body>
    </html>
  );
}
