import React from 'react'
import useSpotify from '../hooks/useSpotify'

function Song( {order}) {
    const spotifyApi = useSpotify();
  return (
    <div>
        <div>
        <p>{order + 1}</p>
        </div>
    </div>
  )
}

export default Song