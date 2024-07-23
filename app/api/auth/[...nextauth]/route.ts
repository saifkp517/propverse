import NextAuth, { Session } from "next-auth";
import { redirect } from 'next/navigation'
import { useRouter } from 'next/router';
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from 'axios';
import jwt from 'jsonwebtoken';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
    interface Session {
        accessToken?: string;
        user: {
            id?: string;
            name?: string;
            image?: string;
            email?: string;
            phone?: string;
            isProfileComplete?: boolean;
        };
        userId?: string;
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        accessToken?: string;
        userId?: string;
    }
}

async function verifyUserCredentials(email: string | undefined, password: string | undefined) {
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/signin/investor`, {
            email: email,
            password: password,
            provider: "propertyverse"
        });
        // Assuming the response contains a token upon successful login
        const { user } = response.data;
        return user;
    } catch (error: any) {
        // Handle errors here, such as network errors or invalid credentials
        console.error('Error verifying user credentials:', error);
        throw new Error(error.response?.data?.message || 'Invalid Email or Password');
    }
}

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET!,
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "email", placeholder: "your-email@example.com" },
                password: { label: "Password", type: "password" }
            },
            authorize: async (credentials) => {
                const user = await verifyUserCredentials(credentials?.email, credentials?.password);
                if (user) {
                    return user;
                } else {
                    return null;
                }
            }
        })
    ],
    session: {
        strategy: 'jwt',
        maxAge: 60 * 60,
    },
    callbacks: {
        async signIn({ account, profile }) {
            try {
                if (account?.provider === "google") {
                    const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/oauth/investor`, {
                        email: profile?.email,
                    });
                    const userId = response.data.user.id;
                    account.userId = userId;
                }

            } catch (error: any) {
                console.log(error);
            }
            return true;
        },
        async jwt({ token, user, account }: { token: JWT, user?: any, account?: any }) {
            if(account?.userId) {
                token.userId = account.userId;
            }
            if (user) {
                token.user = user;
            }
            return token;
        },
        async session({ session, token }: { session: Session | any, token: JWT }) {

            if (token?.userId) {
                session.userId = token.userId;
            }

            session.user = token.user;
            return session;
        }
    },

    secret: '2kj4bl3i4jtb3lre;9ufegi',
});

export { handler as GET, handler as POST };

