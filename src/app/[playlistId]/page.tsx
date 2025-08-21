"use server";

import { getPlaylistById } from "@/lib/actions/playlist/getPlaylist";
import { notFound } from "next/navigation";

const Playlist = async ({
  params,
}: {
  params: Promise<{ playlistId: string }>;
}) => {
  const { playlistId } = await params;
  const data = await getPlaylistById(playlistId);

  if (!data) {
    notFound();
  }
  return <h1>{data.name}</h1>;
};

export default Playlist;
