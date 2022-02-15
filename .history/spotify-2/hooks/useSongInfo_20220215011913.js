import React from 'react'
import useSpotify from '../hooks/useSpotify'
import { currentTrackIdState, isPlayingState } from '../atoms/songAtom';
import { useRecoilState } from 'recoil';




function useSongInfo() {
    const spotifyApi = useSpotify();
    const [currentTrackId, setCurrentTrackId] = useRecoilState(currentTrackIdState);
  return (
    <div>useSongInfo</div>
  )
}

export default useSongInfo