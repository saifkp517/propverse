import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import LayoutWrapper from "./components/LayoutWrapper";
import Provider from './components/Provider';
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PropertyVerse",
  description: "Welcome to a redefinition of property management. Discover seamless solutions for property owners and tenants alike.",
  icons: {
    icon: 'https://i.postimg.cc/cL8MPmGw/logo-final-blue-and-green-transparent-1-1.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16604490553"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16604490553');
        `}
        </Script>
        <body className={inter.className}>
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </body>
        <GoogleAnalytics gaId="G-YJ91T2XX8J" />
      </Provider>
    </html>
  );
}
