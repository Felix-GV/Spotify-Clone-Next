import NextAuth from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify"
import { refreshAccessToken } from "spotify-web-api-node/src/server-methods"
import { LOGIN_URL } from "../../../lib/spotify"

async function refreshAccessToken(token) {
  try {

  } catch (error) {
    console.error(error)

    return {
      ...token,
      error: 'RefreshAccessTokenError',
    }
  }
}

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      authorization: LOGIN_URL,
    }),
    // ...add more providers here
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: '/login'
  },
  callbacks: {
    async jwt({ token, account, user }) {

      // initial sign in 
      if (account && user ) {
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          username: account.providerAccountId,
          accessTokenExpires: account.expires_at * 1000, //handling expiring times in milliseconds

        }
      }

      // return the previous token if access token has not expired yet
      if (Date.now() < token.accessTokenExpires) {
        console.log('Existing token is valid')
        return token;
      }

      //access token expires needs to refresh
      console.log("token has expired")
      return await refreshAccessToken(token)
    },
  },


})