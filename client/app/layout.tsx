import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from 'next/head'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PropertyVerse",
  description: "Welcome to a redefinition of property management. Discover seamless solutions for property owners and tenants alike.",
  icons: {
    icon: 'https://i.postimg.cc/cL8MPmGw/logo-final-blueTheme-and-green-transparent-1-1.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8927606268275562"
          crossOrigin="anonymous"
        ></script>
        <meta name="google-adsense-account" content="ca-pub-8927606268275562"></meta>
      </Head>
      <body className={inter.className}>{children}</body>
    </>
  );
}
