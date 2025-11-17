import { selectedSongAtom } from "@/jotai/selectedSong";
import { updateSong } from "@/lib/actions/song/updateSong";
import { Song } from "@prisma/client";
import { useAtom } from "jotai";
import { ChangeEvent } from "react";

const keys = ["Ab", "A", "Bb", "B", "C", "C#", "D", "Eb", "E", "F", "F#", "G"];
const tonalities = ["maj", "min"];

const getSplitKeyTonality = (song: Song) => {
  const splitKey = song.key?.split("m");

  return [splitKey?.[0] || "", splitKey?.[1] ? `m${splitKey?.[1]}` : ""];
};

const KeySelect = () => {
  const [selectedSong, setSelectedSong] = useAtom(selectedSongAtom);
  if (!selectedSong) return null;

  const handleChange = async (
    keyOrTonality: "key" | "tonality",
    e: ChangeEvent<HTMLSelectElement>
  ) => {
    const splitKey = getSplitKeyTonality(selectedSong);
    const key = keyOrTonality === "key" ? e.target.value : splitKey[0];
    const tonality =
      keyOrTonality === "tonality" ? e.target.value : splitKey[1];

    const keyTonality = key + tonality;

    const song = await updateSong({ ...selectedSong, key: keyTonality });

    setSelectedSong(song);
  };

  return (
    <div>
      <select
        name="key"
        id="key"
        value={getSplitKeyTonality(selectedSong)[0]}
        onChange={(e) => handleChange("key", e)}
      >
        <option value="">Set Key</option>
        {keys.map((key) => (
          <option value={key} key={key}>
            {key}
          </option>
        ))}
      </select>
      <select
        name="tonality"
        id="tonality"
        onChange={(e) => handleChange("tonality", e)}
        value={getSplitKeyTonality(selectedSong)[1]}
      >
        <option value="">Set Tonality</option>
        {tonalities.map((tonality) => (
          <option value={tonality} key={tonality}>
            {tonality}
          </option>
        ))}
      </select>
    </div>
  );
};

export default KeySelect;
