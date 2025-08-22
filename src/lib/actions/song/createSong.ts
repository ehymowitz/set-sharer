"use server";

import { SongInputs } from "@/components/songForm";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createSong(songData: SongInputs) {
  const song = await prisma.song.create({
    data: {
      artist: songData.artist,
      title: songData.title,
      playlistId: songData.playlistId,
    },
  });

  revalidatePath(`/${songData.playlistId}`);

  return song;
}
