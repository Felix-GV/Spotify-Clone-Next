import React from 'react'
import useSpotify from '../hooks/useSpotify'

function Player() {
    const spotifyApi = useSpotify();
    const { data: session, stat}
  return (
    <div>
        {/* left */}
        <div>
            <img src='' alt='' />
        </div>
    </div>
  )
}

export default Player