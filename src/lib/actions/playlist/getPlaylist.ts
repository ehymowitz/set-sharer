"use server";

import { prisma } from "@/lib/prisma";

export async function getPlaylistByName(name: string) {
  try {
    const playlist = await prisma.playlist.findUniqueOrThrow({
      where: { name },
    });
    return playlist;
  } catch (error) {
    console.error("Error fetching playlist by name:", error);
    return null;
  }
}

export async function getPlaylistById(id: string) {
  try {
    const playlist = await prisma.playlist.findUniqueOrThrow({
      where: { id },
    });
    return playlist;
  } catch (error) {
    console.error("Error fetching playlist by ID:", error);
    return null;
  }
}
