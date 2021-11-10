import { NextApiRequest, NextApiResponse } from "next";
import { connect } from "../../../utils/database";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    const { db } = await connect();
    const {
      set,
      song: {
        artist,
        title,
        stems,
        spotifyID,
        spotifyKey,
        spotifyAlbumCover,
        customKey,
        soundCloud,
        lyrics,
        youtubeID,
        order,
        userNotes,
        chart,
      },
    } = req.body;

    await db.collection(set).updateOne(
      { artist, title },
      {
        $set: {
          artist,
          title,
          stems,
          spotifyID,
          spotifyKey,
          spotifyAlbumCover,
          customKey,
          soundCloud,
          lyrics,
          youtubeID,
          order,
          userNotes,
          chart,
        },
      }
    );

    res.json({ title: title });
  } catch (e) {
    res.status(500);
    res.json({ error: "Couldn't Update" });
  }
}
