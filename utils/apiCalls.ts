// PUT API TOKENS INTO ENV

const SPOTIFY_CLIENT_ID = '10e1f693f2894956b10fec6fd736767d'
const SPOTIFY_CLIENT_SECRET = '3d0a7e5cc2c54f3a9d7cdb43aa281e64'

const LYRICS_KEY = 'qAsqTiIxT0eq2HJGRPrLb8xDoSqfZxt4SaUfxa5dLd0zIgf1ZE1YhHDVIEWNHAH1'

interface SongData {
    track: string,
    artist: string
}

// Spotify

// Client Credentials Flow
async function authorizeSpotify() {
  var urlencoded = new URLSearchParams();
  urlencoded.append("grant_type", "client_credentials");
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: "POST",
    headers: {
      'Authorization': 'Basic ' + btoa(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: urlencoded
  })
  const { access_token } = await response.json()
  return access_token
}

// Call API for Search
export async function callSpotify(spotifyData: SongData) {
  const code = await authorizeSpotify()
  const response = await fetch(`https://api.spotify.com/v1/search?q=track%3A${spotifyData.track}%20artist%3A${spotifyData.artist}&type=track&market=US&limit=1`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${code}`
    }
  })

  const {tracks: {items }} = await response.json()

  return items[0].external_urls.spotify.split('track')[1]
}

// callSpotify({track: "Loud Pipes", artist: "Ratatat"})

// APISeeds

export async function callLyrics(lyricData: SongData) {
  const response = await fetch(`https://orion.apiseeds.com/api/music/lyric/${lyricData.artist}/${lyricData.track}?apikey=${LYRICS_KEY}`)

  const {result: {track: {text}}} = await response.json()

  console.log(text)
  return text
}

// callGenius({track: "Laputa", artist: "Haitus Kaiyote"})

// GETSONGKEY = 2b741d49de80303c94ef5dcf96c97ccc
