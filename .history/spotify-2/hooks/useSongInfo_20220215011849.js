import React from 'react'

function useSongInfo() {
    const spotifyApi = useSpot
    const [currentTrackId, setCurrentTrackId] = useRecoilState(currentTrackIdState);
  return (
    <div>useSongInfo</div>
  )
}

export default useSongInfo