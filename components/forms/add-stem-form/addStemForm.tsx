import React, { useContext, useState } from "react";
import { DisplayedSong } from "../../../pages";
import { LoggedIn } from "../../../pages/_app";
import { TextButton } from "../../../styles/clickables";
import { postStems } from "../../../utils/crud";
import StemRow from "./stemRow";

export interface Stem {
  name: string;
  link: string;
}

const AddStemForm = ({ setOpen }) => {
  const { displayedSong, setDisplayedSong } = useContext(DisplayedSong);

  const { loggedIn } = useContext(LoggedIn);

  const [stems, setStems] = useState<Stem[]>(displayedSong.stems || []);

  const addStem = () => {
    setStems([...stems, { name: "", link: "" }]);
  };

  const removeStem = (i: number) => {
    const newStems = [...stems];
    newStems.splice(i, 1);
    setStems(newStems);
  };

  const closeModal = async () => {
    if (stems.every((stem) => stem.link !== "" && stem.name !== "")) {
      await postStems({
        stems: stems,
        title: displayedSong.title,
        set: loggedIn,
      });
    }
    setDisplayedSong({
      ...displayedSong,
      stems,
    });
    setOpen(false);
  };

  return (
    <div>
      {stems.map((stem, i) => (
        <>
          <StemRow stem={stem} setStems={setStems} key={i} index={i} />
          <TextButton onClick={() => removeStem(i)}>Remove Stem</TextButton>
        </>
      ))}
      <TextButton onClick={addStem}>Add Stem</TextButton>
      <TextButton onClick={closeModal}>Done Adding Stems</TextButton>
    </div>
  );
};

export default AddStemForm;
