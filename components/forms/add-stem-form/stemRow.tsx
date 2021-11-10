import React from "react";
import { TextButton } from "../../../styles/clickables";
import { TextInput } from "../../../styles/text";
import { Stem } from "./addStemForm";
import { StemFormRow } from "./addStemForm.style";

interface StemRowProps {
  stem: Stem;
  setStems: React.Dispatch<React.SetStateAction<Stem[]>>;
  index: number;
}

const StemRow = ({ stem, setStems, index }: StemRowProps) => {
  const changeStemName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newStem = stem;
    stem.name = e.target.value;
    setStems((c) => {
      c[index] = newStem;
      return [...c];
    });
  };
  const changeStemLink = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newStem = stem;
    stem.link = e.target.value;
    setStems((c) => {
      c[index] = newStem;
      return [...c];
    });
  };

  const removeStem = (i: number) => {
    setStems((c) => {
      const newStems = [...c];
      newStems.splice(i, 1);
      return newStems;
    });
  };
  return (
    <StemFormRow>
      <div>
        <TextInput
          value={stem.name}
          placeholder="Name"
          onChange={changeStemName}
        />

        <TextInput
          value={stem.link}
          placeholder="Link"
          onChange={changeStemLink}
        />
        <TextButton onClick={() => removeStem(index)}>Remove Stem</TextButton>
      </div>
      {!!stem.link?.split('src="')[1] && (
        <iframe
          width="100%"
          height="80"
          scrolling="no"
          allow="autoplay"
          src={`${
            stem.link.split('src="')[1].split('"></iframe>')[0]
          }&download=true`}
        />
      )}
    </StemFormRow>
  );
};

export default StemRow;
