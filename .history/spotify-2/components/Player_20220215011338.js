import { useSession } from 'next-auth/react';
import React from 'react'
import { useRecoilState } from 'recoil';
import { isPlayingState } from '../atoms/songAtom';
import useSpotify from '../hooks/useSpotify'

function Player() {
    const spotifyApi = useSpotify();
    const { data: session, status } = useSession();
    const [currentTrackId, setCurrentTrackId] = useRecoilState(isPlayingState);
    

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