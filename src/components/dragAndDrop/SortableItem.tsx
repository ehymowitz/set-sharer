"use client";

import { selectedSongAtom } from "@/jotai/selectedSong";
import { deleteSong } from "@/lib/actions/song/deleteSong";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Song } from "@prisma/client";
import { useSetAtom } from "jotai";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdDelete } from "react-icons/md";
interface SortableItemProps {
  item: Song;
  onSelectItem: (song: Song) => void;
}

export function SortableItem({ item, onSelectItem }: SortableItemProps) {
  const { id, title, artist } = item;
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const setSelectedSong = useSetAtom(selectedSongAtom);

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleDelete = async () => {
    await deleteSong(id);
    setSelectedSong(null);
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="border p-4 mb-2 rounded flex justify-between"
      onClick={() => onSelectItem(item)}
    >
      <div
        {...attributes}
        {...listeners}
        className="cursor-move flex items-center"
      >
        <GiHamburgerMenu />
      </div>
      <p>
        {title} by {artist}
      </p>
      <button className="cursor-pointer" onClick={handleDelete}>
        <MdDelete />
      </button>
    </div>
  );
}
