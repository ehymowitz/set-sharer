"use server";

import { SongInputs } from "@/components/songForm";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createSong(songData: SongInputs) {
  const lastSong = await prisma.song.findFirst({
    where: { playlistId: songData.playlistId },
    orderBy: { index: "desc" },
  });

  const nextIndex = lastSong ? lastSong.index + 1 : 0;

  const song = await prisma.song.create({
    data: {
      artist: songData.artist,
      title: songData.title,
      playlistId: songData.playlistId,
      index: nextIndex,
    },
  });

  revalidatePath(`/${songData.playlistId}`);

  return song;
}
