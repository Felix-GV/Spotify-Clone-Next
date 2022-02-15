import { playlistState } from '../atoms/playlistAtom';
import { useRecoilValue } from 'recoil';

function Songs() {
    const playlist = useRecoilValue(playlistState);
  return (
    <div>
        {playlist?.tracks.item}
      
    </div>
  )
}

export default Songs 
