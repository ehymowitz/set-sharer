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
      'Authorization': 'Basic ' + btoa(`${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}:${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET}`),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: urlencoded
  })
  const { access_token } = await response.json()
  return access_token
}

// Call API for Player
export async function callSpotifyID(spotifyData: SongData) {
  const code = await authorizeSpotify()
  const response = await fetch(`https://api.spotify.com/v1/search?q=track%3A${spotifyData.track}%20artist%3A${spotifyData.artist}&type=track&market=US&limit=1`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${code}`
    }
  })

  const {tracks: { items }} = await response.json()

  return items[0].external_urls.spotify.split('track')[1]
}

// callSpotifyID({track: "Loud Pipes", artist: "Ratatat"})

// Call API for song features
export async function callSpotifyKey(songID: string) {
  const code = await authorizeSpotify()
  const response = await fetch(`https://api.spotify.com/v1/audio-features${songID}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${code}`
    }
  })

  const {key} = await response.json()

  return key
}

// callSpotifyKey('spotifyID')

// Call API for album cover
export async function callSpotifyAlbumCover(songID: string) {
  const code = await authorizeSpotify()
  const response = await fetch(`https://api.spotify.com/v1/tracks${songID}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${code}`
    }
  })

  const {album: {images}} = await response.json()

  return images[1].url
}

// callSpotifyAlbumCover('spotifyID')

// YouTube

export async function callYoutubeSearch(video: string) {
  const response = await fetch(`https://www.googleapis.com/youtube/v3/search?maxResults=1&q=${video}&key=${process.env.NEXT_PUBLIC_YOUTUBE_KEY}`, {
    headers: {
      'Accept': 'application/json'
    }
  })

  const {items: [item]} = await response.json()

  return item.id.videoId
}


// Lyrics

export async function callLyrics(lyricData: SongData) {
  try {
    const response = await fetch(`https://orion.apiseeds.com/api/music/lyric/${lyricData.artist}/${lyricData.track}?apikey=${process.env.NEXT_PUBLIC_LYRICS_KEY}`)
    const {result: {track: {text}}} = await response.json()
    return text
  } catch {
    return "Can't find lyrics for this song! Let me know if this happens, I'll do what I can"
  }
}

// callLyrics({track: "Laputa", artist: "Haitus Kaiyote"})
