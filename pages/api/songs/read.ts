import { NextApiRequest, NextApiResponse } from "next";
import { connect } from "../../../utils/database"

export default async function (req: NextApiRequest, res: NextApiResponse ){
  try {
    const {db} = await connect();
    const { set: set } = req.headers

    const songs = await db.collection(set).find().toArray();

    res.json({songs})
  } catch(e) {
    res.status(500)
    res.json({error: "Couldn't Read"})
  }
}
