import NextAuth from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
      clientId: process.env.Nex,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
})