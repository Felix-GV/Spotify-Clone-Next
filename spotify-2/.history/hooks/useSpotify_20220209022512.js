import {useEffect} from 'react'
import { signIn, useSession} from 'next-auth/react'
import spotifyApi from '../lib/spotify'

function useSpotify() {
    const { data: session, status } = useSession();
    useEffect(() => {
        if (session) {
            //direct user to login if it fails
            if (session.error === 'RefreshAccessTokenError') {
                signIn();
            }

            spotifyApi.setAccessToken(session.user.setAccessToken)
        }
    }, [session])
  
  
    return (
    <div>
      
    </div>
  )
}

export default useSpotify
