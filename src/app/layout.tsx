import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/next';

const sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
});

const title = 'Kameel Kasumu | Software Engineer (C++, TypeScript, Python)';
const description =
  'New-grad software engineer from the University of Calgary. Portfolio of projects.';

export const metadata: Metadata = {
  metadataBase: new URL('https://kkasumu.vercel.app'),
  title,
  description,
  openGraph: {
    title,
    description,
    url: '/',
    siteName: 'Kameel Kasumu',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <Head>
        <meta name="apple-mobile-web-app-title" content="Kameel Kasumu" />
      </Head>
      <body className={`${sans.className} min-h-screen p-4`}>
        <div className="relative">
          <div aria-hidden className="bg-grain" />
          <div className="relative z-10">{children}</div>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
