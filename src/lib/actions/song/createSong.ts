"use server";

import { SongInputs } from "@/components/songForm";
import { searchYoutube } from "@/lib/apiCalls/youtube";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createSong(songData: SongInputs) {
  // const tidalInfo = await getTidalSongInfo(
  //   `${songData.artist}, ${songData.title}`
  // ); // WIP

  const id = await searchYoutube(songData.artist, songData.title);

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
      youtubeId: id,
      index: nextIndex,
    },
  });

  revalidatePath(`/${songData.playlistId}`);

  return song;
}
