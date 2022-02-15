import { useSession } from 'next-auth/react';
import React, {useState} from 'react'
import { useRecoilState } from 'recoil';
import { currentTrackIdState, isPlayingState } from '../atoms/songAtom';
import useSpotify from '../hooks/useSpotify'

function Player() {
    const spotifyApi = useSpotify();
    const { data: session, status } = useSession();
    const [currentIdTrack, setCurrentIdTrack] = useRecoilState(currentTrackIdState);
    const [isPlaying, setIsPlaying ] = useRecoilState(isPlayingState);
    const [volume, setVolume ] = useState(35);

    const songInfo = useSongInfo();

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