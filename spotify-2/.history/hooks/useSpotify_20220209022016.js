import React from 'react'

function useSpotify() {
    const { data: session, status } = useSession();
  return (
    <div>
      
      useEffect(() => {
          
      }, [session])

    </div>
  )
}

export default useSpotify
