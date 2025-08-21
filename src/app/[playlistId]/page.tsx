"use server";

import SortableMenu from "@/components/dragAndDrop/SortableMenu";
import SongForm from "@/components/songForm";
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

  return (
    <div>
      <h1>{data.name}</h1>
      <SongForm playlistId={playlistId} />
      <SortableMenu songs={data.songs || []} />
    </div>
  );
};

export default Playlist;
