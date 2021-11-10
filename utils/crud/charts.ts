import { Stem } from "../../components/forms/add-stem-form/addStemForm";
import { SongIDReqs } from "./song";

interface ChartsUpdate extends SongIDReqs {
  chart: string;
}

export async function postStems(songChart: ChartsUpdate) {
  await fetch("api/songs/addStems", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(songChart),
  });
}
