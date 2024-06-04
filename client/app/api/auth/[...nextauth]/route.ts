import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";
import axios from 'axios';

async function verifyUserCredentials(email: string | undefined, password: string | undefined) {
    try {
        const response = await axios.post('${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/signin/investor', {
            email: email,
            password: password,
            provider: "propertyverse"
        });
        
        // Assuming the response contains a token upon successful login
        const { token } = response.data;
        
        // You can return the token or any other relevant data
        return token;
    } catch (error) {
        // Handle errors here, such as network errors or invalid credentials
        console.error('Error verifying user credentials:', error);
        throw new Error('Failed to verify');
    }
}


const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
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
    ]
})

export { handler as GET, handler as POST }
