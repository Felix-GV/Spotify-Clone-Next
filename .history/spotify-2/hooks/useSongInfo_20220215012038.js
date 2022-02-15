import React, {useState} from 'react'
import useSpotify from '../hooks/useSpotify'
import { currentTrackIdState } from '../atoms/songAtom';
import { useRecoilState } from 'recoil';
import { useSession } from 'next-auth/react';




function useSongInfo() {
    const spotifyApi = useSpotify();
    const [songInfo, setSongInfo] = useState(null);

    useEffect(() => {
        return () => {
            effect
        };
    }, [input])

    const [currentTrackId, setCurrentTrackId] = useRecoilState(currentTrackIdState);
  return songInfo
}

export default useSongInfo