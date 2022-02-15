import { playlistState } from '../atoms/playlistAtom';
import { useRecoilValue } from 'recoil';
import Song from './Song'

function Songs() {
    const playlist = useRecoilValue(playlistState);
  return (
    <div className='px-8 flex bg- flex-col space-y-1 pb-28 text-white'>
        {playlist?.tracks.items.map((track, i) => (
            <Song 
            key={track.track.id} 
            track={track} 
            order={i} />
        ))}
    </div>
  );
}

export default Songs 
