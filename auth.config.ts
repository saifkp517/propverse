import type { NextAuthOptions } from "next-auth"
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  secret: process.env.AUTH_SECRET,
  callbacks: {
    // authorized({ auth, request: { nextUrl } }: any) {
    //   const isLoggedIn = !!auth?.user;
    //   const isOnDashboard = nextUrl.pathname.startsWith('/properties');
    //   if (isOnDashboard) {
    //     if (isLoggedIn) return true;
    //     return false; // Redirect unauthenticated users to login page
    //   } else if (isLoggedIn) {
    //     return Response.redirect(new URL('/properties', nextUrl));
    //   }
    //   return true;
    // },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthOptions;
