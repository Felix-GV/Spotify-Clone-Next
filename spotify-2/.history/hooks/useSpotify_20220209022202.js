import React, {useEffect} from 'react'
import { signIn, useSession} from 'next-auth'

function useSpotify() {
    const { data: session, status } = useSession();
    useEffect(() => {
        if (session) {

        }
    }, [session])
  
  
    return (
    <div>
      
    </div>
  )
}

export default useSpotify
