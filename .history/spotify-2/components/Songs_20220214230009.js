import { playlistState } from '../atoms/playlistAtom'
import { useRecoilValue } from 'recoil';

function Songs() {
    const playlist = useRecoilValue(playlistState)
  return (
    <div>
        
      
    </div>
  )
}

export default Songs 
