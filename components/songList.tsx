import React, { useCallback, useContext, useEffect, useState } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import { DisplayedSong, Song } from "../pages/index";
import { LoggedIn } from "../pages/_app";
import SongListCard from "./songListCard";
import { updateSong } from "../utils/crud/song";

const SongList = () => {
  const { songList, setSongList, displayedSong, setDisplayedSong } =
    useContext(DisplayedSong);
  const { loggedIn } = useContext(LoggedIn);

  const handleClick = (song: Song) => {
    setDisplayedSong(song);
  };

  const reorder = (
    list: Song[],
    startIndex: number,
    endIndex: number
  ): Song[] => {
    const songArray = Array.from(list);
    const [removed] = songArray.splice(startIndex, 1);
    songArray.splice(endIndex, 0, removed);

    const result = songArray.map((song, i) => ({ ...song, order: i }));

    return result;
  };

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const ordered = reorder(
      songList,
      result.source.index,
      result.destination.index
    );

    setSongList(ordered);

    ordered.forEach(async (item) => {
      await updateSong({ song: item, set: loggedIn });
    });
  };

  return (
    <div className="song-list">
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="songs">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {songList
                .sort((a, b) => a.order - b.order)
                .map((song: Song, index) => {
                  return (
                    <Draggable
                      key={song.title}
                      draggableId={song.title}
                      index={index}
                    >
                      {(provided) => (
                        <li
                          className={
                            displayedSong === song
                              ? "song-card displayed-song"
                              : "song-card"
                          }
                          key={index}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          onClick={() => handleClick(song)}
                        >
                          <SongListCard song={song} />
                        </li>
                      )}
                    </Draggable>
                  );
                })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default SongList;
