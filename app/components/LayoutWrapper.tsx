// components/LayoutWrapper.tsx
"use client";

import { usePathname } from 'next/navigation';
import MyNav from "./Navbar";
import Footer from "./Footer";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const showNavAndFooter = pathname !== "/login" && pathname !== "/register" && pathname !== "/details" && pathname !== "/otp";

  return (
    <>
      {showNavAndFooter && <MyNav />}
      {children}
      {showNavAndFooter && <Footer />}
    </>
  );
};

export default LayoutWrapper;
