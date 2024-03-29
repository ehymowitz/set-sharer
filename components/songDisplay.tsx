import { useContext } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { DisplayedSong } from "../pages/index";
import { LoggedIn } from "../pages/_app";
import ChangeKeyForm from "./forms/changeKeyForm";
import NotesForm from "./forms/notesForm";
import ChartEditModal from "./modals/chartEditModal";
import InfoEditModal from "./modals/infoEditModal";
import StemsModal from "./modals/stemsModal";

const SongDisplay = () => {
  const { displayedSong } = useContext(DisplayedSong);

  return (
    <div className="song-display">
      <>
        <div className="song-display-heading">
          <h1>
            {displayedSong.artist} - {displayedSong.title}
          </h1>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingTop: "10px",
            }}
          >
            <h3>
              <p>
                {displayedSong.customKey
                  ? displayedSong.customKey
                  : displayedSong.spotifyKey}
              </p>
            </h3>
            <ChangeKeyForm song={displayedSong} />
          </div>
        </div>
        <div className="song-display-info">
          <Tabs>
            <TabPanel>
              <div className="slider-pane-one">
                <div className="notes">
                  <NotesForm />
                </div>
                <div className="pane-one-grid">
                  <p className="lyrics">{displayedSong.lyrics} </p>
                  <div>
                    {displayedSong.youtubeID && (
                      <iframe
                        className="youtube-video"
                        width="100%"
                        height="250"
                        src={`https://www.youtube.com/embed/${displayedSong.youtubeID}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      />
                    )}
                    {displayedSong.spotifyID && (
                      <iframe
                        className="spotify-embed"
                        src={`https://open.spotify.com/embed/track${displayedSong.spotifyID}`}
                        width="100%"
                        height="80"
                        frameBorder="0"
                        allow="encrypted-media"
                      />
                    )}
                    {displayedSong.soundCloud && (
                      <iframe
                        className="soundcloud-embed"
                        src={displayedSong.soundCloud.split('src="')[1]}
                        width="100%"
                        height="80"
                        frameBorder="0"
                        allow="encrypted-media"
                      />
                    )}
                    <div className="edit-modal">
                      <InfoEditModal />
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="slider-pane-two">
                <iframe src={displayedSong.chart} frameBorder="0"></iframe>
                <ChartEditModal />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="slider-pane-three">
                <StemsModal />
              </div>
            </TabPanel>
            <TabList className="tablist">
              <Tab>
                <h3>Song Info</h3>
              </Tab>
              <Tab>
                <h3>Chart</h3>
              </Tab>
              <Tab>
                <h3>Stems</h3>
              </Tab>
            </TabList>
          </Tabs>
        </div>
      </>
    </div>
  );
};

export default SongDisplay;
