import type { Metadata } from 'next';
import { Geist, Geist_Mono, Cormorant_Garamond } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'Drawhaus — UK Prize Competitions',
  description:
    'Drawhaus connects influencers with their most devoted fans through live, transparent prize competitions. Join the waitlist.',
  openGraph: {
    title: 'Drawhaus — UK Prize Competitions',
    description:
      'Creators list what they own. Fans enter to win it. A live draw decides — on camera, in real time, no exceptions.',
    siteName: 'Drawhaus',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drawhaus — UK Prize Competitions',
    description:
      'Creators list what they own. Fans enter to win it. A live draw decides — on camera, in real time, no exceptions.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
