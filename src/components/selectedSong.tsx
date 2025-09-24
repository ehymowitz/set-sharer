"use client";

import { selectedSongAtom } from "@/jotai/selectedSong";
import { useAtomValue } from "jotai";
import React from "react";

const SelectedSong = () => {
  const selectedSong = useAtomValue(selectedSongAtom);
  return (
    <div>
      <p>{selectedSong?.title} </p>
      {selectedSong?.youtubeId && (
        <iframe
          width="400"
          height="230"
          src={`https://www.youtube.com/embed/${selectedSong.youtubeId}`}
          title={`${selectedSong.artist} ${selectedSong.title}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
      )}
    </div>
  );
};

export default SelectedSong;
