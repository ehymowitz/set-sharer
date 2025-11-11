"use client";

import { selectedSongAtom } from "@/jotai/selectedSong";
import { updateSong } from "@/lib/actions/song/updateSong";
import { Song } from "@prisma/client";
import { useAtom } from "jotai";
import { SubmitHandler, useForm } from "react-hook-form";
import { MdDelete } from "react-icons/md";

const SongNotes = () => {
  const [selectedSong, setSelectedSong] = useAtom(selectedSongAtom);
  const { register, handleSubmit, reset } = useForm<{ note: string }>();

  const onSubmit: SubmitHandler<{ note: string }> = async (data) => {
    if (!selectedSong || data.note.length < 1) return;

    const cleanedData: Song = {
      ...selectedSong,
      notes: [...(selectedSong?.notes || []), data.note],
    };
    await updateSong(cleanedData);
    setSelectedSong(cleanedData);
    reset();
  };

  const handleDelete = async (index: number) => {
    if (!selectedSong) return;
    selectedSong?.notes.splice(index, 1);
    const updatedSong: Song = {
      ...selectedSong,
      notes: selectedSong?.notes || [],
    };
    await updateSong(updatedSong);
    setSelectedSong(updatedSong);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex gap-2"
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
      <div className="flex gap-3">
        {selectedSong?.notes.map((note, i) => (
          <div key={i} className="flex">
            <p>{note}</p>
            <button className="cursor-pointer" onClick={() => handleDelete(i)}>
              <MdDelete />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SongNotes;
