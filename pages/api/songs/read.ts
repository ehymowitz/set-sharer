import { NextApiRequest, NextApiResponse } from "next";
import { connect } from "../../../utils/database"

export default async function (req: NextApiRequest, res: NextApiResponse ){
  try {
    const {db} = await connect();
    const set = req.headers.set as string

    const songs = await db.collection(set).find().toArray();

    res.json({songs})
  } catch(e) {
    res.status(500)
    res.json({error: "Couldn't Read"})
  }
}
