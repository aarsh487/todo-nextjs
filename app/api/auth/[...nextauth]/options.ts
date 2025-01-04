import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import prisma from "@/app/utils/connect";


export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'email', type: 'text' },
                password: { label: 'password', type: 'password' },
            },
            async authorize(credentials: any): Promise<any> {
                try {
                    const user = await prisma.user.findFirst({
                        where: {
                            email: credentials?.email
                        }
                    });

                    if (!user) {
                        throw new Error("No user found with this email");
                    }

                    
                    const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);

                    if (isPasswordCorrect) {
                        return user; 
                    } else {
                        throw new Error("Incorrect password");
                    }
                } catch (error: any) {
                   
                    throw new Error(error.message || "An error occurred during authentication");
                }
            },
        })
    ],

    callbacks: {
        
        jwt: async ({ token, user }: any) => {
            if (user) {
                token.id = user.id; 
            }
            return token;
        },
     
        session: async ({ session, token }: any) => {
            if (session?.user && token?.id) {
                session.user.id = token.id; 
            }
            return session;
        }
    },

    pages: {
        signIn: '/signin', 
    },

    secret: process.env.NEXTAUTH_SECRET,
}