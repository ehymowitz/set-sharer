"use client";

import { selectedSongAtom } from "@/jotai/selectedSong";
import { useAtomValue } from "jotai";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import EditModal from "./EditModal";
import KeySelect from "./keySelect";
import SongNotes from "./songNotes";

const SelectedSong = () => {
  const selectedSong = useAtomValue(selectedSongAtom);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex gap-4">
      <div>
        <h2 className="font-semibold text-xl">
          {selectedSong?.title} - {selectedSong?.artist}
          <button
            className="cursor-pointer ml-4"
            onClick={() => setIsOpen(true)}
          >
            <FaEdit />
          </button>
        </h2>
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
        <SongNotes />
      </div>
      <EditModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default SelectedSong;
