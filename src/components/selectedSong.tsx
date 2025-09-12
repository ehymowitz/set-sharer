"use client";

import { selectedSongAtom } from "@/jotai/selectedSong";
import { useAtomValue } from "jotai";
import React from "react";

const SelectedSong = () => {
  const selectedSong = useAtomValue(selectedSongAtom);
  return <p>{selectedSong?.title} </p>;
};

export default SelectedSong;
