import React, {useSession, useEffect} from 'react'

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
