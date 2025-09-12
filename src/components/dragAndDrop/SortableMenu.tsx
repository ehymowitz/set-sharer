"use client";

import React, { useEffect, useState } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { SortableItem } from "./SortableItem";
import { Song } from "@prisma/client";
import { updateSong } from "@/lib/actions/song/updateSong";
import { useSetAtom } from "jotai";
import { selectedSongAtom } from "@/jotai/selectedSong";

interface SortableMenuProps {
  songs: Song[];
}

const SortableMenu = ({ songs }: SortableMenuProps) => {
  const [items, setItems] = useState<Song[]>(songs);
  const setSelectedSong = useSetAtom(selectedSongAtom);

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
