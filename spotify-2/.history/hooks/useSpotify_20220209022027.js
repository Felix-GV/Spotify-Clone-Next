import React from 'react'

function useSpotify() {
    const { data: session, status } = useSession();
  return (
    <div>
      
      useEffect(() => {
          if (session) {
              
          }
      }, [session])

    </div>
  )
}

export default useSpotify
