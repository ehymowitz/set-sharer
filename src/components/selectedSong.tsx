"use client";

import { selectedSongAtom } from "@/jotai/selectedSong";
import { useAtomValue } from "jotai";
import KeySelect from "./keySelect";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";
import EditModal from "./EditModal";
import SongNotes from "./songNotes";

const SelectedSong = () => {
  const selectedSong = useAtomValue(selectedSongAtom);
  const [isOpen, setIsOpen] = useState(false);
  if (!selectedSong) return null;

  return (
    <div className="flex gap-4">
      <div>
        <h2 className="font-semibold text-xl">
          {selectedSong?.title} - {selectedSong?.artist}
        </h2>
        <KeySelect />
        <button className="cursor-pointer ml-4" onClick={() => setIsOpen(true)}>
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
        <SongNotes />
      </div>
      <EditModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default SelectedSong;
