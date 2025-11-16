"use client";

import { selectedSongAtom } from "@/jotai/selectedSong";
import { updateSong } from "@/lib/actions/song/updateSong";
import { Song } from "@prisma/client";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EditModal({ isOpen, onClose }: EditModalProps) {
  const [selectedSong, setSelectedSong] = useAtom(selectedSongAtom);
  const { register, handleSubmit, reset } = useForm<Song>({
    values: selectedSong
      ? {
          ...selectedSong,
          youtubeId: `https://www.youtube.com/watch?v=${selectedSong.youtubeId}`,
        }
      : undefined,
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const onSubmit: SubmitHandler<Song> = async (data) => {
    const cleanedData = {
      ...data,
      youtubeId: data.youtubeId?.split("?v=")[1] || null,
    };
    await updateSong(cleanedData);
    setSelectedSong(cleanedData);
    onClose();
    reset();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed flex inset-0 z-50 items-center justify-center backdrop-blur-sm"
      onClick={onClose}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border flex flex-col p-3 rounded-sm gap-2 w-[50vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <input
          placeholder="Song Title"
          type="text"
          {...register("title")}
          className="border"
        />
        <input
          placeholder="Song Artist"
          type="text"
          {...register("artist")}
          className="border"
        />
        <input
          placeholder="Youtube Link"
          type="text"
          {...register("youtubeId")}
          className="border"
        />
        <textarea
          placeholder="Lyrics"
          {...register("lyrics")}
          className="border"
        />
        <button type="submit" className="cursor-pointer">
          Edit Song
        </button>
        <button onClick={onClose} className="cursor-pointer">
          Close
        </button>
      </form>
    </div>
  );
}
