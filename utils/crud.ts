import { Stem } from "../components/forms/add-stem-form/addStemForm";

interface SongIDReqs {
  title: string;
  set: string;
}

interface StemsReq extends SongIDReqs {
  stems: Stem[];
}

interface setData {
  name: string;
}

interface songDataGet {
  title: string;
  artist: string;
  notes?: string;
  stems: Stem[];
}

interface songDataPost {
  title: string;
  artist: string;
  set: string;
  notes?: {};
  newTitle?: string;
}

interface songDataDelete {
  title: string;
  artist: string;
  set: string;
}

// Set

// CREATE
export async function createSet(setData: setData) {
  const response = await fetch("/api/sets/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(setData),
  });
  const data = await response.json();
  return data;
}

// createSet({name: 'test'})

// READ
export async function readSets() {
  const response = await fetch("/api/sets/read", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  const names = data.map((data: setData) => {
    return data.name;
  });

  return names;
}

// readSets();

// SONGS

// CREATE
export async function createSong(songData: songDataPost) {
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
      set: songsData,
    },
  });
  const { songs } = await response.json();

  return songs.map((song: songDataGet) => ({
    artist: song.artist,
    title: song.title,
    notes: song.notes,
    stems: song.stems,
  }));
}

// readSongs("songs");

// UPDATE Notes
export async function updateSongNotes(songNoteData: songDataPost) {
  await fetch("api/songs/update-notes", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(songNoteData),
  });
}

// updateSongNotes({title: "test2", artist: "test", notes: {note1: "note2"}, set: "songs"})

// UPDATE Title
export async function updateSongTitle(songTitleData: songDataPost) {
  await fetch("api/songs/update-title", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(songTitleData),
  });
}

// updateSongTitle({title: "test4", artist: "test", newTitle: "test5", set: "songs"})

// UPDATE Artist
export async function updateSongArtist(songArtistData: songDataPost) {
  await fetch("api/songs/update-artist", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(songArtistData),
  });
}

// updateSongArtist({title: "test5", artist: "you", set: "songs"})

// DELETE
export async function deleteSong(songData: songDataDelete) {
  await fetch("api/songs/delete", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(songData),
  });
}

// deleteSong({title: "test5", artist: "test", set: "songs"})

export async function postStems(songStems: StemsReq) {
  await fetch("api/songs/addStems", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(songStems),
  });
}
