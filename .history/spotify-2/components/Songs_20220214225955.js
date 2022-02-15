import React from 'react'
import { playlistState } from '../atoms/playlistAtom'
import { useRecoilValue}

function Songs() {
    const playlist = useRecoilValue(playlistState)
  return (
    <div>
        
      
    </div>
  )
}

export default Songs 
