import { playlistState } from '../atoms/playlistAtom';
import { useRecoilValue } from 'recoil';

function Songs() {
    const playlist = useRecoilValue(playlistState);
  return (
    <div>
        {playlist?.tracks.items.map((track) => (
            
        ))}
      
    </div>
  )
}

export default Songs 
