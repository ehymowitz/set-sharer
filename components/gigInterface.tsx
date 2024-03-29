import React, { useState, useContext } from "react";
import Timer from "react-compound-timer/build";
import { BsPauseFill, BsFillPlayFill } from "react-icons/bs";
import { BiRefresh } from "react-icons/bi";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { DisplayedSong, Song } from "../pages";

const GigInterface = () => {
  const { songList, displayedSong, setDisplayedSong } =
    useContext(DisplayedSong);
  const [timerOn, setTimerState] = useState(false);
  const handleStart = () => {
    setTimerState(true);
  };
  const handlePause = () => {
    setTimerState(false);
  };

  const changeSong = (song: Song) => {
    setDisplayedSong(song);
  };

  return (
    <div className="gigInterface">
      <div className="timer">
        <Timer
          startImmediately={false}
          onStart={handleStart}
          onPause={handlePause}
        >
          {({ start, pause, reset }) => (
            <React.Fragment>
              <p>
                <Timer.Hours
                  formatValue={(value) =>
                    `${value < 10 ? `0${value}` : value}h :`
                  }
                />
                <span> </span>
                <Timer.Minutes
                  formatValue={(value) =>
                    `${value < 10 ? `0${value}` : value}m :`
                  }
                />
                <span> </span>
                <Timer.Seconds
                  formatValue={(value) =>
                    `${value < 10 ? `0${value}` : value}s`
                  }
                />
              </p>
              <div className="buttons">
                {timerOn ? (
                  <button onClick={pause}>
                    <BsPauseFill />
                  </button>
                ) : (
                  <button onClick={start}>
                    <BsFillPlayFill />
                  </button>
                )}
                <button onClick={reset}>
                  <BiRefresh />
                </button>
              </div>
            </React.Fragment>
          )}
        </Timer>
      </div>
      <div className="song-change">
        {songList[displayedSong.order - 1] && (
          <button
            onClick={() => changeSong(songList[displayedSong.order - 1])}
            style={{ alignItems: "center", display: "flex", color: "white" }}
          >
            <AiOutlineArrowLeft />
            <p>{songList[displayedSong.order - 1].title}</p>
          </button>
        )}
        {songList[displayedSong.order + 1] && (
          <button
            onClick={() => changeSong(songList[displayedSong.order + 1])}
            style={{ alignItems: "center", display: "flex", color: "white" }}
          >
            <p>{songList[displayedSong.order + 1].title}</p>
            <AiOutlineArrowRight />
          </button>
        )}
      </div>
    </div>
  );
};

export default GigInterface;
