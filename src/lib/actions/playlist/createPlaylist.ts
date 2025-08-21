"use server";
import { prisma } from "@/lib/prisma";

export async function createPlaylist(name: string) {
  try {
    const playlist = await prisma.playlist.create({
      data: { name },
    });
    return playlist;
  } catch (error) {
    console.error("Error creating playlist:", error);
    return null;
  }
}
