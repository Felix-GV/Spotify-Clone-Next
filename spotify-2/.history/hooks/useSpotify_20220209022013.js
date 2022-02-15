import React from 'react'

function useSpotify() {
    const { data: session, status } = useSession();
  return (
    <div>
      
      useEffect(() => {
          return () => {
              effect
          };
      }, [session])

    </div>
  )
}

export default useSpotify
