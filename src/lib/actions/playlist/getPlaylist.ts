"use server";

import { prisma } from "@/lib/prisma";

export async function getPlaylist(name: string) {
  const playlists = await prisma.playlist.findFirst({ where: { name } });
  return playlists;
}
