import { NextApiRequest, NextApiResponse } from "next";
import { connect } from "../../../utils/database"

export default async function (req: NextApiRequest, res: NextApiResponse ) {
  try {
    const {db} = await connect();
    const { title: title, artist: artist, set: set } = req.body

    await db.collection(set).updateOne(
      {title: title},
      {$set: {artist: artist}}
    )

    res.json({title: title});

  } catch(e) {
    res.status(500)
    res.json({error: "Couldn't Update"})
  }
}
