import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Kameel Kasumu | Software Engineer (C++, TypeScript, Python)',
  description:
    'New-grad software engineer from the University of Calgary. Portfolio of projects.',
  openGraph: {
    title: 'Kameel Kasumu | Software Engineer (C++, TypeScript, Python)',
    description:
      'New-grad software engineer from the University of Calgary. Portfolio of projects.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <Head>
        <meta name="apple-mobile-web-app-title" content="Kameel Kasumu" />
      </Head>
      <body className="min-h-screen p-4">
        <div className="relative">
          <div aria-hidden className="bg-grain" />
          <div className="relative z-10">{children}</div>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
