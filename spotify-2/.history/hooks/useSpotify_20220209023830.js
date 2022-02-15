import {useEffect} from 'react'
import { signIn, useSession} from 'next-auth/react'

const spotifyApi = new SpotifyWebApi({
    
})

function useSpotify() {
    const { data: session, status } = useSession();
    useEffect(() => {
        if (session) {
            //direct user to login if it fails
            if (session.error === 'RefreshAccessTokenError') {
                signIn();
            }

            spotifyApi.setAccessToken(session.user.accessToken)
        }
    }, [session])
  
  
    return spotifyApi
}

export default useSpotify
