import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kameel Kasumu",
  description: "Kameel Kasumu's Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="apple-mobile-web-app-title" content="Kameel Kasumu" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} p-2 m-2 bg-gradient-to-t md:bg-gradient-to-tr from-[#f4f6fb] via-[#e9edfa] to-[#e6e5f0] dark:from-[#12141b] dark:via-[#1c2130] dark:to-[#2d3145]`}>
        {children}
      </body>
    </html>
  );
}