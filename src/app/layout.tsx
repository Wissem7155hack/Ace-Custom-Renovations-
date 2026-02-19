import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: {
    default: 'Ace Custom Renovations | Prince George, BC',
    template: '%s | Ace Custom Renovations',
  },
  description: 'Ace Custom Renovations transforms houses into homes — delivering expert craftsmanship, modern design, and dependable service across Prince George and the surrounding BC Interior.',
  keywords: ['renovations', 'prince george', 'contractor', 'kitchen remodel', 'bathroom remodel', 'basement development'],
  openGraph: {
    title: 'Ace Custom Renovations',
    description: 'Crafted With Precision. Built With Pride.',
    type: 'website',
    locale: 'en_CA',
    url: 'https://ace-renovations.com', // Replace with actual URL
    siteName: 'Ace Custom Renovations',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans bg-background text-foreground antialiased">
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
