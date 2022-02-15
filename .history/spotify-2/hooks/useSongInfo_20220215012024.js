import React, {useState} from 'react'
import useSpotify from '../hooks/useSpotify'
import { currentTrackIdState } from '../atoms/songAtom';
import { useRecoilState } from 'recoil';




function useSongInfo() {
    const spotifyApi = useSpotify();
    const [songInfo, setSongInfo] = useState(null);

    use

    const [currentTrackId, setCurrentTrackId] = useRecoilState(currentTrackIdState);
  return songInfo
}

export default useSongInfo