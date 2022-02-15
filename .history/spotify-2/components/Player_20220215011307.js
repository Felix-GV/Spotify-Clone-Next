import { useSession } from 'next-auth/react';
import React from 'react'
import useSpotify from '../hooks/useSpotify'

function Player() {
    const spotifyApi = useSpotify();
    const { data: session, status } = useSession();
    const [currentTrackId, setCurrentTrackId] = useREe

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