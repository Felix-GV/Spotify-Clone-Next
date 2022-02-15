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
    scope: scopes
}