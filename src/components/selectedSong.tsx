"use client";

import { selectedSongAtom } from "@/jotai/selectedSong";
import { useAtomValue } from "jotai";
import KeySelect from "./keySelect";

const SelectedSong = () => {
  const selectedSong = useAtomValue(selectedSongAtom);
  if (!selectedSong) return null;

  return (
    <div>
      <KeySelect />
      {selectedSong?.youtubeId && (
        <iframe
          width="400"
          height="230"
          src={`https://www.youtube.com/embed/${selectedSong.youtubeId}`}
          title={`${selectedSong.artist} ${selectedSong.title}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      )}
      <p>{selectedSong?.title} </p>
      <p>{selectedSong?.artist} </p>
    </div>
  );
};

export default SelectedSong;
