import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.google_client_id,
      clientSecret: process.env.google_client_secret,
    }),
    // ...add more providers here
  ],
})
