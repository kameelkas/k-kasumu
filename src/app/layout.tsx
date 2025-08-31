import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Head from 'next/head';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Kameel Kasumu',
  description: "Kameel Kasumu's Personal Portfolio",
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
      <body className="m-2 min-h-screen bg-gradient-to-t from-[#f4f6fb] via-[#e9edfa] to-[#e6e5f0] p-2 md:bg-gradient-to-tr dark:from-[#12141b] dark:via-[#1c2130] dark:to-[#2d3145]">
        {children}
      </body>
    </html>
  );
}
