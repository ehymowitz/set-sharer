"use client";

import { selectedSongAtom } from "@/jotai/selectedSong";
import { useAtomValue } from "jotai";
import KeySelect from "./keySelect";
import { FaEdit } from "react-icons/fa";

const SelectedSong = () => {
  const selectedSong = useAtomValue(selectedSongAtom);
  if (!selectedSong) return null;

  const handleEdit = () => {};

  return (
    <div className="flex gap-4">
      <div>
        <KeySelect />
        <button className="cursor-pointer ml-4" onClick={handleEdit}>
          <FaEdit />
        </button>
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

      <div>
        <p>{selectedSong?.title} </p>
        <p>{selectedSong?.artist} </p>
      </div>
    </div>
  );
};

export default SelectedSong;
