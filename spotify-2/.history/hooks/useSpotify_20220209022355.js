import {useEffect} from 'react'
import { signIn, useSession} from 'next-auth/react'
import SpotifyWebApi from 'spotify-web-api-node';

function useSpotify() {
    const { data: session, status } = useSession();
    useEffect(() => {
        if (session) {
            //direct user to login if it fails
            if (session.error === 'RefreshAccessTokenError') {
                signIn();
            }

            SpotifyWebApi
        }
    }, [session])
  
  
    return (
    <div>
      
    </div>
  )
}

export default useSpotify
