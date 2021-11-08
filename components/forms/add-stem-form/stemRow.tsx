import React, { SyntheticEvent, useState } from "react";
import { Stem } from "./addStemForm";

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
  return (
    <div>
      <input value={stem.name} placeholder="name" onChange={changeStemName} />

      <input value={stem.link} placeholder="link" onChange={changeStemLink} />
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
    </div>
  );
};

export default StemRow;
