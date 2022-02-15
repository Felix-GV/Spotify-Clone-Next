import React, {useState, useEffect} from 'react'
import useSpotify from '../hooks/useSpotify'
import { currentTrackIdState } from '../atoms/songAtom';
import { useRecoilState } from 'recoil';


function useSongInfo() {
    const spotifyApi = useSpotify();
    const [songInfo, setSongInfo] = useState(null);
    const [currentIdTrack, setCurrentIdTrack] = useRecoilState(currentTrackIdState);


    useEffect(() => {
        const fetchSongInfo = async () => {
            if (currentIdTrack) {
                const trackInfo = await fetch(
                    `https://api.spotify.com/v1/tracks/${currentIdTrack}`,
                    {
                        headers: {
                            Authorization: `Bearer ${spotifyApi.getAccessToken()}`,
                        }
                    }

                ).then((res => res.json());

                setSongInfo(trackInfo);
            }
        }
        fetchSongInfo();
    }, [currentIdTrack, spotifyApi])

  return songInfo
}

export default useSongInfo