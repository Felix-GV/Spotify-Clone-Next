import SpotifyWebApi from 'spotify-web-api-node'
import { CLIENT_ID, CLIENT_SECRET} from ''

const scopes = [
    "playlist-read-private",
    "playlist-read-collaborative",
    "streaming",
    "user-read-email",
    "user-read-private",
    "user-library-read",
    "user-top-read",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-follow-read",
    "user-read-playback-state",
    "user-modify-playback-state",
].join(",")

const params = {
    scope: scopes,
}

const queryParamString = new URLSearchParams(params)

const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamString.toString()}`

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
})

export default spotifyApi
export { LOGIN_URL }