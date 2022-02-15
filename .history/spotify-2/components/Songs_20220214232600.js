import { playlistState } from '../atoms/playlistAtom';
import { useRecoilValue } from 'recoil';
import Song from ''

function Songs() {
    const playlist = useRecoilValue(playlistState);
  return (
    <div className='text-white'>
        {playlist?.tracks.items.map((track) => (
            <Song />
        ))}
    </div>
  )
}

export default Songs 
