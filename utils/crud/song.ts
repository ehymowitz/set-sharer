import { Song } from "../../pages";

export interface SongIDReqs {
  song: Song;
  set: string;
}

export async function createSong(songData: SongIDReqs) {
  await fetch("/api/songs/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(songData),
  });
}

export async function readSongs(set: string) {
  const response = await fetch("api/songs/read", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      set,
    },
  });
  const { songs } = await response.json();

  return songs.map((song: Song) => ({
    ...song,
  }));
}

export async function updateSong(SongData: SongIDReqs) {
  await fetch("api/songs/update", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(SongData),
  });
}

// updateSongNotes({title: "test2", artist: "test", notes: {note1: "note2"}, set: "songs"})

export async function deleteSong(songData: SongIDReqs) {
  await fetch("api/songs/delete", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(songData),
  });
}
