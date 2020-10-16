import { NextApiRequest, NextApiResponse } from "next";
import { connect } from "../../../utils/database"

export default async function (req: NextApiRequest, res: NextApiResponse ) {
  try {
    const {db} = await connect();
    const { artist: artist , title: title } = req.body

    await db.collection("songs").insertOne({
      title: title,
      artist: artist
    })

    res.status(201) // created data
    res.json({title: title, artist: artist});

  } catch(e) {
    res.status(500)
    res.json({error: "Couldn't Create"})
  }
}
