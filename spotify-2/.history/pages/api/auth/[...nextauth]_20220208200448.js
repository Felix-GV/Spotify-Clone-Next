import NextAuth from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify"
import { refreshAccessToken } from "spotify-web-api-node/src/server-methods"
import spotifyApi, { LOGIN_URL } from "../../../lib/spotify"

async function refreshAccessToken(token) {
  try {

    spotifyApi.setAccessToken(token.accessToken);
    spotifyApi.setRefreshToken(token.refreshToken);
    const  { body: refreshedToken } = await spotifyApi.refreshAccessToken();
    console.log('refreshed token is', refreshedToken);

    return {
      ...token,
      accessToken: refreshedToken.access_token,
      accessTokenExpires: Date.now + refreshedToken.expires_in * 1000, // 60 mins as 3600 comes from spotify api

      refreshToken: refreshedToken.refresh_token ?? token.refreshToken,
    }

  } catch (error) {
    console.error(error)

    return {
      ...token,
      error: 'RefreshAccessTokenError',
    };
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

    async session({ session, token }) {
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      session.user.username = token.;

    }

  },


})