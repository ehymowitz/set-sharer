"use client";
import PlayListForm from "@/components/playlistForm";
import { createPlaylist } from "@/lib/actions/playlist/createPlaylist";
import { getPlaylist } from "@/lib/actions/playlist/getPlaylist";

export default function Home() {
  const handleLogin = async (name: string) => {
    getPlaylist(name).then((data) => {
      if (data) {
        console.log("Playlist found:", data);
      } else {
        alert("Invalid Login");
      }
    });
  };

  const handleCreate = async (name: string) => {
    createPlaylist(name).then((data) => {
      if (data) {
        console.log("Playlist found:", data);
      } else {
        alert("Invalid Login");
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
