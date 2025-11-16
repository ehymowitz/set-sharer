"use client";

import { selectedSongAtom } from "@/jotai/selectedSong";
import { Song } from "@prisma/client";
import { useAtom } from "jotai";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface SongNavigationProps {
  songs: Song[];
}

const SongNavigation = ({ songs }: SongNavigationProps) => {
  const [selectedSong, setSelectedSong] = useAtom(selectedSongAtom);
  if (!selectedSong) return null;

  const { index } = selectedSong;

  return (
    <div className="flex gap-5 justify-center">
      <button
        className="cursor-pointer disabled:opacity-50"
        disabled={index === 0}
        onClick={() => {
          setSelectedSong(songs[index - 1]);
        }}
      >
        <FaArrowLeft />
      </button>
      <button
        className="cursor-pointer disabled:opacity-50"
        disabled={index === songs.length - 1}
        onClick={() => {
          setSelectedSong(songs[index + 1]);
        }}
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default SongNavigation;
