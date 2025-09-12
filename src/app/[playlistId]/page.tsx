"use server";

import SortableMenu from "@/components/dragAndDrop/SortableMenu";
import LogoutButton from "@/components/logoutButton";
import SelectedSong from "@/components/selectedSong";
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
      <div className="flex justify-between">
        <h1>{data.name}</h1>
        <LogoutButton />
      </div>
      <SongForm playlistId={playlistId} />
      <SortableMenu songs={data.songs || []} />
      <SelectedSong />
    </div>
  );
};

export default Playlist;
