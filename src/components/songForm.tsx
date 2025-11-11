"use client";

import { selectedSongAtom } from "@/jotai/selectedSong";
import { createSong } from "@/lib/actions/song/createSong";
import { Song } from "@prisma/client";
import { useSetAtom } from "jotai";
import { SubmitHandler, useForm } from "react-hook-form";

export type SongInputs = Omit<Song, "id">;

const SongForm = ({ playlistId }: { playlistId: string }) => {
  const { register, handleSubmit, reset } = useForm<SongInputs>();
  const setSelectedSong = useSetAtom(selectedSongAtom);

  const onSubmit: SubmitHandler<SongInputs> = async (data) => {
    if (!data.artist || !data.title) {
      alert("Missing artist or title");
      reset();
    } else {
      const newSong = await createSong({ ...data, playlistId });
      reset();
      setSelectedSong(newSong);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-2 justify-start"
    >
      <div>
        <input placeholder="Title" type="text" {...register("title")} />
        <input placeholder="Artist" type="text" {...register("artist")} />
      </div>
      <button type="submit" className="cursor-pointer">
        Add Song
      </button>
    </form>
  );
};

export default SongForm;
