"use client";

import {
  closestCenter,
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useEffect, useState } from "react";

import { selectedSongAtom } from "@/jotai/selectedSong";
import { updateSong } from "@/lib/actions/song/updateSong";
import { Song } from "@prisma/client";
import { useAtom } from "jotai";
import SongForm from "../songForm";
import { SortableItem } from "./SortableItem";

interface SortableMenuProps {
  songs: Song[];
  playlistId: string;
}

const SortableMenu = ({ songs, playlistId }: SortableMenuProps) => {
  const [items, setItems] = useState<Song[]>(songs);
  const [selectedSong, setSelectedSong] = useAtom(selectedSongAtom);

  useEffect(() => {
    setSelectedSong(songs[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setSelectedSong]);

  useEffect(() => {
    setItems(songs);
  }, [songs]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleSelectSong = (song: Song) => setSelectedSong(song);

  return (
    <div>
      <SongForm playlistId={playlistId} />
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
        id="song-drag-list"
      >
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          {items.map((item) => (
            <SortableItem
              key={item.id}
              item={item}
              onSelectItem={handleSelectSong}
            />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );

  async function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const indexArray = items.map((item) => item.id);
      const oldIndex = indexArray.indexOf(active.id as string);
      const newIndex = indexArray.indexOf(over?.id as string);

      const reorderedItems = arrayMove(items, oldIndex, newIndex);

      setItems(reorderedItems);

      const updatedSongs = await Promise.all(
        reorderedItems.map(async (item, i) => {
          const song = await updateSong({ ...item, index: i });
          return song;
        })
      );
      if (!selectedSong) return;

      setSelectedSong(updatedSongs[selectedSong.index]);
    }
  }
};

export default SortableMenu;
