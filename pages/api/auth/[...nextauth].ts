import NextAuth, {User} from "next-auth"
import Credentials from "next-auth/providers/credentials";

export default NextAuth({
    pages: {
        signIn: '/auth/signin'
    },
    // Configure one or more authentication providers
    providers: [
        Credentials({
            name: "Credentials",

            credentials: {
                username: { label: "Username", type: "text", placeholder: "owen" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials): Promise<User | null> {
                const users = [
                    {
                        id: "test",
                        username: "test1",
                        name: "Test 1",
                        password: "pass",
                        email: "test@test.com",
                    }
                ];

                const user = users.find(
                    (user) =>
                        user.username === credentials.username &&
                        user.password === credentials.password
                )
                return user ? { id: user.id, name: user.name, email: user.email } : null;
            }
        })
        // ...add more providers here
    ],
    secret: process.env.AUTH_SECRET,
    session: { strategy: "jwt" },
})