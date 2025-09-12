import { Song } from "@prisma/client";
import { atom } from "jotai";

export const selectedSongAtom = atom<Song | null>(null);
