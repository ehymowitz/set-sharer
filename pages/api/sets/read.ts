import { NextApiRequest, NextApiResponse } from "next";
import { connect } from "../../../utils/database"

export default async function ( _req: NextApiRequest, res: NextApiResponse ) {
  try {
    const {db} = await connect();

    const collections = await db.listCollections().toArray()

    res.json(collections)

  } catch(e) {
    res.status(500)
    res.json({error: "Couldn't Read"})
  }
}
