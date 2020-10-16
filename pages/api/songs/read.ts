import { NextApiRequest, NextApiResponse } from "next";
import { connect } from "../../../utils/database"

export default async function (req: NextApiRequest, res: NextApiResponse ){
  try {
    const {db} = await connect();
    const songs = await db.collection("songs").find().toArray();

    res.json({songs})
  } catch(e) {
    res.status(500)
    res.json({error: "Couldn't Read"})
  }
}
