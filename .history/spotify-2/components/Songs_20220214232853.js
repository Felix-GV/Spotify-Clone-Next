import { playlistState } from '../atoms/playlistAtom';
import { useRecoilValue } from 'recoil';
import Song from './Song'

function Songs() {
    const playlist = useRecoilValue(playlistState);
  return (
    <div className='px-8text-white'>
        {playlist?.tracks.items.map((track, i) => (
            <Song key={track.track.id} track={track} order={i} />
        ))}
    </div>
  )
}

export default Songs 
