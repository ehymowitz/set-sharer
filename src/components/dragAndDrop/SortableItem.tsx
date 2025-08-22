"use client";

import { deleteSong } from "@/lib/actions/song/deleteSong";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface SortableItemProps {
  id: string;
}

export function SortableItem({ id }: SortableItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleDelete = async () => {
    await deleteSong(id);
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="border p-4 mb-2 rounded flex justify-between"
    >
      <div {...attributes} {...listeners} className="cursor-move">
        drag handle
      </div>
      <p>test {id} </p>
      <button className="cursor-pointer" onClick={handleDelete}>
        delete
      </button>
    </div>
  );
}
