import React, { useContext } from 'react'
import { DisplayedSong } from '../pages/index'
import { LoggedIn } from '../pages/_app'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ChangeKeyForm from './forms/changeKeyForm'
import NotesForm from './forms/notesForm'
import InfoEditModal from './modals/infoEditModal'
import ChartEditModal from './modals/chartEditModal'

const SongDisplay = () => {
  const { displayedSong } = useContext(DisplayedSong)
  const { loggedIn } = useContext(LoggedIn)

  const displayCondition = displayedSong && loggedIn

  return (
    <div className="song-display">
      { displayCondition &&
        <>
          <div className="song-display-heading">
            <h1>{displayedSong.artist} - {displayedSong.title}</h1>
            <h3>
              <p>{displayedSong.notes.customKey ? displayedSong.notes.customKey: displayedSong.notes.spotifyKey}</p>
            </h3>
            <ChangeKeyForm song = {displayedSong}/>
          </div>
          <div className="song-display-info">
            <Tabs>
              <TabPanel>
                <div className="slider-pane-one">
                  <div className="notes">
                    <NotesForm />
                  </div>
                  <div className="pane-one-grid">
                    <p className="lyrics">{displayedSong.notes.lyrics} </p>
                    <div>
                      {displayedSong.notes.youtubeID &&
                        <iframe
                        className = "youtube-video"
                        width="100%"
                        height="250"
                        src={`https://www.youtube.com/embed/${displayedSong.notes.youtubeID}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        />
                      }
                      {displayedSong.notes.spotifyID &&
                        <iframe
                        className = "spotify-embed"
                        src={`https://open.spotify.com/embed/track${displayedSong.notes.spotifyID}`}
                        width="100%"
                        height="80"
                        frameBorder="0"
                        allow="encrypted-media"
                        />
                      }
                      {displayedSong.notes.soundCloud &&
                        <iframe
                        className = "soundcloud-embed"
                        src={displayedSong.notes.soundCloud.split('src="')[1]}
                        width="100%"
                        height="80"
                        frameBorder="0"
                        allow="encrypted-media"
                        />
                      }
                      <div className="edit-modal">
                        < InfoEditModal />
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="slider-pane-two">
                  <iframe
                    src={displayedSong.notes.chart}
                    frameBorder="0">
                  </iframe>
                  <ChartEditModal/>
                </div>
              </TabPanel>
              <TabList className="tablist">
                <Tab><h3>Song Info</h3></Tab>
                <Tab><h3>Chart</h3></Tab>
              </TabList>
            </Tabs>
          </div>
        </>
      }
    </div>
  )
}

export default SongDisplay
