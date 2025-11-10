"use client";

import { selectedSongAtom } from "@/jotai/selectedSong";
import { updateSong } from "@/lib/actions/song/updateSong";
import { Song } from "@prisma/client";
import { useAtom } from "jotai";
import { SubmitHandler, useForm } from "react-hook-form";

const SongNotes = () => {
  const [selectedSong, setSelectedSong] = useAtom(selectedSongAtom);
  const { register, handleSubmit, reset } = useForm<{ note: string }>();

  const onSubmit: SubmitHandler<{ note: string }> = async (data) => {
    if (!selectedSong) return;

    const cleanedData: Song = {
      ...selectedSong,
      notes: [...(selectedSong?.notes || []), data.note],
    };
    await updateSong(cleanedData);
    setSelectedSong(cleanedData);
    reset();
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border flex flex-col p-3 rounded-sm gap-2 w-[50vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <input
          placeholder="Notes"
          type="text"
          {...register("note")}
          className="border"
        />
        <button type="submit" className="cursor-pointer">
          Add Note
        </button>
      </form>
      {selectedSong?.notes.map((note, i) => (
        <p key={i}>{note}</p>
      ))}
    </div>
  );
};

export default SongNotes;
