import { NextApiRequest, NextApiResponse } from "next";
import { connect } from "../../../utils/database";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    const { db } = await connect();
    const { name } = req.body;

    db.createCollection(name);

    res.status(201);
    res.json({ name });
  } catch (e) {
    res.status(500);
    res.json({ error: "Couldn't Create" });
  }
}
