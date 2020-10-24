// Spotify

interface SpotifyData {
    track: string,
    artist: string
}

export async function callSpotify(spotifyData: SpotifyData) {
  const response = await fetch(`https://api.spotify.com/v1/search?q=track%3A${spotifyData.track}%20artist%3A${spotifyData.artist}&type=track&market=US&limit=1`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer BQCi63h5ATwkdmNCOqireMQypzw8Z_Yyrg_YsniNlrq6Kxlm1g2cAgGkf_ru27RQ9hgVA25dW_lgtBknFUv6mngFOOhF0nZInJF5uiFYMfKyitWvYujxCtg5ByXyCWnmF0DrS_WcEHFhL_hJFFlrsAmQ5kFrbJF9dPI'
    }
  })

  const {tracks: {items }} = await response.json()

  return items[0].external_urls.spotify.split('track')[1]
}

// callSpotify({track: "Loud Pipes", artist: "Ratatat"})
