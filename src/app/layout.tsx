import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const description =
  'Kameel Kasumu is a software engineer from Calgary building full-stack web apps, UI for engineering software, and LifeLens, an AI-enabled trauma care system.';

export const metadata: Metadata = {
  metadataBase: new URL('https://kkasumu.vercel.app'),
  title: 'Kameel Kasumu — Software Engineer',
  description,
  appleWebApp: { title: 'Kameel Kasumu' },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Kameel Kasumu',
    title: 'Kameel Kasumu — Software Engineer',
    description,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kameel Kasumu — Software Engineer',
    description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f4f6fb' },
    { media: '(prefers-color-scheme: dark)', color: '#12141b' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} bg-canvas-light dark:bg-canvas-dark`}
    >
      <body className="ambient relative min-h-dvh bg-canvas-light font-sans text-primary-light antialiased dark:bg-canvas-dark dark:text-primary-dark">
        <a
          href="#main"
          className="btn-primary fixed left-4 top-4 z-skip -translate-y-24 focus-visible:translate-y-0"
        >
          Skip to content
        </a>
        <div
          aria-hidden="true"
          className="grain pointer-events-none fixed inset-0 z-grain"
        />
        <div className="relative z-content">{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
