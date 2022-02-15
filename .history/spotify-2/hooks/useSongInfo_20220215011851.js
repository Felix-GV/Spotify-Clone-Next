import React from 'react'

function useSongInfo() {
    const spotifyApi = useSpotify()
    const [currentTrackId, setCurrentTrackId] = useRecoilState(currentTrackIdState);
  return (
    <div>useSongInfo</div>
  )
}

export default useSongInfo