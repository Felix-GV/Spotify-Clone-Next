import SpotifyWebApi from "spotify-web-api-node";

const scopes = [

    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state',
    'user-follow-read',
    'user-library-read',
    'user-read-private',
    'streaming',
    'user-read-email',
    'playlist-read-collaborative',
    'playlist-read-private',
//     'user-library-modify',
].join(',');

const params = {
    scope: scopes,
};      

const queryParamString = new URLSearchParams(params)

const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamString.toString()}`;

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
    authoriz
})

export default spotifyApi;
export {LOGIN_URL};