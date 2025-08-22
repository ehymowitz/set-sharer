"use server";

import { prisma } from "@/lib/prisma";
import { Song } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function updateSong(data: Song) {
  const { id, ...updateData } = data;
  try {
    const song = await prisma.song.update({
      where: { id },
      data: updateData,
    });
    revalidatePath(`/${id}`);
    return song;
  } catch (error) {
    console.error(error);
    return null;
  }
}
