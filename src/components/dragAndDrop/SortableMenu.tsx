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
import { useSetAtom } from "jotai";
import { SortableItem } from "./SortableItem";
import SongForm from "../songForm";

interface SortableMenuProps {
  songs: Song[];
}

const SortableMenu = ({ songs }: SortableMenuProps) => {
  const [items, setItems] = useState<Song[]>(songs);
  const setSelectedSong = useSetAtom(selectedSongAtom);

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
      <SongForm playlistId={songs[0].playlistId} />
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

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const indexArray = items.map((item) => item.id);
      const oldIndex = indexArray.indexOf(active.id as string);
      const newIndex = indexArray.indexOf(over?.id as string);

      const reorderedItems = arrayMove(items, oldIndex, newIndex);
      setItems(reorderedItems);

      reorderedItems.forEach(async (item, i) => {
        updateSong({ ...item, index: i });
      });
    }
  }
};

export default SortableMenu;
