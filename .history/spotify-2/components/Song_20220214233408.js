import useSpotify from "../hooks/useSpotify"

function Song({order, track}) {
  
  const spotifyApi = useSpotify();
  return 
    <div>
      <p>{order + 1}</p>
    </div>
}

export default Song