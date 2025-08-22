"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deleteSong(id: string) {
  try {
    const song = await prisma.song.delete({ where: { id } });
    revalidatePath(`/${song.playlistId}`);
    return song;
  } catch (error) {
    console.error("Error deleting song:", error);
    return null;
  }
}
