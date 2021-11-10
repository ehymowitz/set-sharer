import React, { useContext, useState } from "react";
import { DisplayedSong } from "../../../pages";
import { TextButton } from "../../../styles/clickables";
import useUpdateSong from "../../../utils/useUpdateSong";
import StemRow from "./stemRow";

export interface Stem {
  name: string;
  link: string;
}

const AddStemForm = ({ setOpen }) => {
  const { displayedSong } = useContext(DisplayedSong);
  const [stems, setStems] = useState<Stem[]>(displayedSong.stems || []);
  const updateSong = useUpdateSong();

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
      await updateSong({
        ...displayedSong,
        stems,
      });
    }
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
