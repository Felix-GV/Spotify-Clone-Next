import React, {useState} from 'react'
import useSpotify from '../hooks/useSpotify'
import { currentTrackIdState } from '../atoms/songAtom';
import { useRecoilState } from 'recoil';
import { useEffect } from 'next-auth/react';




function useSongInfo() {
    const spotifyApi = useSpotify();
    const [songInfo, setSongInfo] = useState(null);

    useEffect(() => {
        const fetchSongInfo = async () => {
            if (currentTrackId) {
                const trackInfo = await fetch(
                    `https://api.spotify.com/v1/tracks`
                )
            }
        }
        fetchSongInfo();
    }, [currentTrackId, spotifyApi])

    const [currentTrackId, setCurrentTrackId] = useRecoilState(currentTrackIdState);
  return songInfo
}

export default useSongInfo