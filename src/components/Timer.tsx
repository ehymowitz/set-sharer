"use client";

import { useEffect, useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import { FaRotate } from "react-icons/fa6";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  const handleRestart = () => {
    setSeconds(0);
    setIsRunning(false);
  };

  const formatTime = (totalSeconds: number) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    const pad = (v: number) => String(v).padStart(2, "0");

    return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
  };

  return (
    <div className="flex flex-col gap-2 mb-2">
      <div className="flex">
        <button onClick={() => setIsRunning((r) => !r)}>
          {isRunning ? <FaPause /> : <FaPlay />}
        </button>
        <button onClick={handleRestart} style={{ marginLeft: 8 }}>
          <FaRotate />
        </button>
      </div>
      <p>{formatTime(seconds)}</p>
    </div>
  );
};

export default Timer;
