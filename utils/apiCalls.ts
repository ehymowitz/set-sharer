// PUT API TOKENS INTO ENV
const CLIENT_ID = '10e1f693f2894956b10fec6fd736767d'
const CLIENT_SECRET = '3d0a7e5cc2c54f3a9d7cdb43aa281e64'

// Spotify

interface SongData {
    track: string,
    artist: string
}

// Client Credentials Flow
export async function authorizeSpotify() {
  var urlencoded = new URLSearchParams();
  urlencoded.append("grant_type", "client_credentials");
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: "POST",
    headers: {
      'Authorization': 'Basic ' + btoa(`${CLIENT_ID}:${CLIENT_SECRET}`),
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

// Genius

export async function callGenius(geniusData: SongData) {
  const response = await fetch(`https://api.genius.com/search?q=${geniusData.track}%20${geniusData.artist}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer CR_gTviPBFUt5suaIUrUFnMDxn-jHJJvQpech55Y33NNH6fVv0BtUeVe7kjdgg1_'
    }
  })

  const data = await response.json()

  console.log(data)
}

// callGenius({track: "Laputa", artist: "Haitus Kaiyote"})

// GETSONGKEY = 2b741d49de80303c94ef5dcf96c97ccc
