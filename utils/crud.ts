// SETS

interface setData {
  name: string
}

interface songData {
  title: string,
  artist?: string,
  notes?: string,
  set?: string
}

// CREATE Collection
export async function createSet(setData: setData) {
  const response = await fetch("/api/sets/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(setData),
  });
  const data = await response.json()
  return data
}

// createSet({name: 'test'})

// READ
export async function readSets() {
  const response = await fetch("/api/sets/read", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })

  const data = await response.json()

  const names = data.map(data => {
    return data.name
  })

  return names
}

// readSets();


// SONGS

// CREATE
export async function createSong(songData: songData) {
  await fetch("/api/songs/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(songData),
  });
}

// createSong({artist: "test", title: "test2", set: "songs"})


// READ
export async function readSongs(songsData: string) {
  const response = await fetch("api/songs/read", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "set": songsData
    },
  })
  const {songs} = await response.json()

  return songs.map(song => ({
    id: song._id,
    artist: song.artist,
    title: song.title,
  }))
}

// readSongs("songs");


// UPDATE NOTES
export async function updateSongNotes(songNoteData: songData) {
  await fetch("api/songs/update-notes", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(songNoteData)
  })
}

// updateSongNotes({title: "test2", notes: {note1: "note2"}, set: "songs"})

// UPDATE Title
export async function updateSongTitle(songTitleData: songData) {
  await fetch("api/songs/update-title", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(songTitleData)
  })
}

// updateSongTitle({title: "test4", newTitle: "test5", set: "songs"})

// UPDATE Artist
async function updateSongArtist(songArtistData: songData) {
  await fetch("api/songs/update-artist", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(songArtistData)
  })
}

// updateSongArtist({title: "test5", artist: "you", set: "songs"})


// DELETE
export async function deleteSong(songData: songData) {
  await fetch("api/songs/delete", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(songData)
  })
}

// deleteSong({title: "test5", set: "songs"})
