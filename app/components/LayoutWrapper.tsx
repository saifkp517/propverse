// components/LayoutWrapper.tsx
"use client";

import { usePathname } from 'next/navigation';
import MyNav from "./Navbar";
import Footer from "./Footer";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const hiddenPaths = ["/login", "/register", "/details", "/otp", "/forgot-password", "/change-password"];

  const showNavAndFooter = !hiddenPaths.includes(pathname);

  return (
    <>
      {showNavAndFooter && <MyNav />}
      {children}
      {showNavAndFooter && <Footer />}
    </>
  );
};

export default LayoutWrapper;
