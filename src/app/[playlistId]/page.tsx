"use server";

import SortableMenu from "@/components/dragAndDrop/SortableMenu";
import LogoutButton from "@/components/logoutButton";
import SelectedSong from "@/components/selectedSong";
import SongNavigation from "@/components/SongNavigation";
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
        <h1 className="text-2xl font-bold">{data.name}</h1>
        <LogoutButton />
      </div>
      <div className="grid grid-cols-[1fr_0.75fr_1fr]">
        <SelectedSong />
        <div className="flex flex-col">
          Timer Play Pause
          <SongNavigation songs={data.songs} />
          Lyrics
        </div>
        <SortableMenu songs={data.songs || []} />
      </div>
    </div>
  );
};

export default Playlist;
