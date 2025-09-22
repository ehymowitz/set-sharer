"use server";

import { SongInputs } from "@/components/songForm";
import { searchYoutube } from "@/lib/apiCalls/youtube";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createSong(songData: SongInputs) {
  // const spotifyInfo = await getSpotifySongInfo(); // API doesn't return values we want anymore
  // Switch to Tidal API

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
