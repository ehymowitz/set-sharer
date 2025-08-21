"use client";
import PlayListForm from "@/components/playlistForm";
import { createPlaylist } from "@/lib/actions/playlist/createPlaylist";
import { getPlaylistByName } from "@/lib/actions/playlist/getPlaylist";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleLogin = async (name: string) => {
    getPlaylistByName(name).then((data) => {
      if (data) {
        router.push(`/${data.id}`);
      } else {
        alert("Invalid Login");
      }
    });
  };

  const handleCreate = async (name: string) => {
    createPlaylist(name).then((data) => {
      if (data) {
        router.push(`/${data.id}`);
      } else {
        alert("Error Creating Playlist - Try a different name?");
      }
    });
  };

  return (
    <div>
      <h2>Log in to see a playlist</h2>
      <PlayListForm onSubmit={handleLogin} />
      <h2>Create a playlist</h2>
      <PlayListForm onSubmit={handleCreate} />
    </div>
  );
}
