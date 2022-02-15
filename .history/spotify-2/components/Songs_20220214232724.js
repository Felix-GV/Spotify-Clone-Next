import { playlistState } from '../atoms/playlistAtom';
import { useRecoilValue } from 'recoil';
import Song from './Song'

function Songs() {
    const playlist = useRecoilValue(playlistState);
  return (
    <div className='text-white'>
        {playlist?.tracks.items.map((track) => (
            <Song key={track/>
        ))}
    </div>
  )
}

export default Songs 
