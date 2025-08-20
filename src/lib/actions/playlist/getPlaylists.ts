"use server";
import { prisma } from "@/lib/prisma";

export async function getPlaylists() {
  const playlists = await prisma.playlist.findMany();
  return playlists;
}
