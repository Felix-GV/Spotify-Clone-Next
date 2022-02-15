import { useSession } from 'next-auth/react';
import React, {useState, useEffect} from 'react'
import { useRecoilState } from 'recoil';
import { currentTrackIdState, isPlayingState } from '../atoms/songAtom';
import useSpotify from '../hooks/useSpotify'
import useSongInfo from '../hooks/useSongInfo';

function Player() {
    const spotifyApi = useSpotify();
    const { data: session, status } = useSession();
    const [currentTrackId, setCurrentTrackId] = useRecoilState(currentTrackIdState);
    const [isPlaying, setIsPlaying ] = useRecoilState(isPlayingState);
    const [volume, setVolume ] = useState(35);

    const songInfo = useSongInfo();

    cost fetchC

    useEffect(() => {
        if(spotifyApi.getAccessToken() && !currentTrackId) {
            // fetch song
        }
    }, [currentTrackIdState, spotifyApi, session])

  return (
    <div>
        {/* left */}
        <div>
            <img className='hidden md:inline h-10 w-10'
            src={songInfo?.album.images?.[0]?.url} 
            alt='' />
        </div>
    </div>
  )
}

export default Player