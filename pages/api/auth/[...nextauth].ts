import NextAuth, {NextAuthOptions} from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import DiscordProvider from "next-auth/providers/discord";
import {PrismaAdapter} from "@auth/prisma-adapter";
import type {Adapter} from 'next-auth/adapters';
import prisma from "../../../prisma/prisma";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma) as Adapter,
        callbacks: {
    async jwt({ token, user, session , trigger}) {
        if (user?.id) {
            token.userId = user?.id;
        }
        if (user?.username) {
            token.username = user?.username;
        }
        if (trigger === "update" && session?.username) {
            // Note, that `session` can be any arbitrary object, remember to validate it!
            token.username = session.username
        }
        return token;
    },
    async session({ session, token, user }) {
        if (session) {
            session.user.id = token.userId as string
            session.user.username = token.username as string
        }
        return session;
    },
    async signIn({user, account, profile}) {
        if (!user.username) {
            await prisma.user.create({
                data: {
                    id: user.id,
                    name: user.name,
                    email: user.email ? user.email : '',
                    username: user.id,
                    image: user.image
                    // Add other user fields if necessary
                },
            });

            await prisma.account.create({
                data: {
                    userId: user.id,
                    type: account ? account.type : '',
                    provider: account ? account.provider : '', // Name of the authentication provider (e.g., "google")
                    providerAccountId: account ? account.providerAccountId : '', // Unique ID assigned by the authentication provider
                    access_token: account ? account.access_token : '',
                    refresh_token: account ? account.refresh_token : '',
                    expires_at: account ? account.expires_at : 0,
                    token_type: account ? account.token_type : '',
                    scope: account ? account.scope : '',
                    id_token: account ? account.id_token : '',
                    session_state: account ? account.session_state : '',
                },
            })
        }
        return true
    },
},
    providers: [
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID as string,
            clientSecret: process.env.DISCORD_CLIENT_SECRET as string
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        })
        // ...add more providers here
    ],
        secret: process.env.AUTH_SECRET,
    session: { strategy: "jwt" },
}

export default NextAuth(authOptions)