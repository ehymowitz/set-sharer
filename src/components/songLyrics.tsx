"use client";

import { selectedSongAtom } from "@/jotai/selectedSong";
import { useAtomValue } from "jotai";

const SongLyrics = () => {
  const song = useAtomValue(selectedSongAtom);
  const lyrics = song?.lyrics;

  return (
    <p className="whitespace-break-spaces">{lyrics || "no lyrics added"}</p>
  );
};

export default SongLyrics;
