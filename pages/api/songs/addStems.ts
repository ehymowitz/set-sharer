import { NextApiRequest, NextApiResponse } from "next";
import { connect } from "../../../utils/database";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    const { db } = await connect();
    const { title, set, stems } = req.body;

    await db.collection(set).updateOne({ title }, { $set: { stems } });

    res.json({ title: title });
  } catch (e) {
    res.status(500);
    res.json({ error: "Couldn't Update" });
  }
}
