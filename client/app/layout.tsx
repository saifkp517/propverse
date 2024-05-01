import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
