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

interface SortableMenuProps {
  songs: Song[];
}

const SortableMenu = ({ songs }: SortableMenuProps) => {
  const [items, setItems] = useState(songs);
  useEffect(() => {
    setItems(songs);
  }, [songs]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      id="song-drag-list"
    >
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        {items.map(({ id }) => (
          <SortableItem key={id} id={id} />
        ))}
      </SortableContext>
    </DndContext>
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setItems((items) => {
        const indexArray = items.map((item) => item.id);
        const oldIndex = indexArray.indexOf(active.id as string);
        const newIndex = indexArray.indexOf(over?.id as string);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }
};

export default SortableMenu;
