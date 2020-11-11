import React, { useContext } from 'react'
import SongListCard from './songListCard'
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd'
import { DisplayedSong, Song } from '../pages/index'
import { updateSongNotes } from '../utils/crud'
import { LoggedIn } from '../pages/_app'


const SongList = () => {
  const { songList, setSongList, setDisplayedSong } = useContext(DisplayedSong)
  const { loggedIn } = useContext(LoggedIn)

  function updateMongoOrder(song: Song, order: number) {
    updateSongNotes({
      title: song.title,
      artist: song.artist,
      notes: Object.assign(song.notes,
        {order: order}),
      set: loggedIn
    })
  }

  const handleClick = (song: Song) => {
    setDisplayedSong(song)
  }

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    if (result.source.index !== result.destination.index) {
      const items = Array.from(songList)
      const [reorderedSong] = items.splice(result.source.index, 1)
      items.splice(result.destination.index, 0, reorderedSong)

      items.forEach((item, index) => {
        if (item.notes.order !== index) {
          item.notes.order = index
          updateMongoOrder(item, item.notes.order)
        }
      })
      setSongList(items)
    }
  }

  return (
    <div className = "song-list">
    <DragDropContext onDragEnd = {handleDragEnd}>
      <Droppable droppableId="songs">
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            { songList.sort((a ,b) => a.notes.order - b.notes.order).map((song: Song, index) => {
              return (
                <Draggable key={song.title} draggableId={song.title} index={index}>
                  {(provided) => (
                    <li
                      className = "song-card"
                      key={index}
                      ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
                      onClick = {() => handleClick(song)}
                    >
                      <SongListCard song={song}/>
                    </li>
                  )}
                </Draggable>
              )
            })}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
    </div>
  )
}

export default SongList
