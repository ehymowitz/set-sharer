import { NextApiRequest, NextApiResponse } from "next";
import { connect } from "../../../utils/database";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    const { db } = await connect();
    const { song, set } = req.body;

    await db.collection(set).insertOne(song);

    res.status(201);
    res.json(req.body);
  } catch (e) {
    res.status(500);
    res.json({ error: "Couldn't Create" });
  }
}
