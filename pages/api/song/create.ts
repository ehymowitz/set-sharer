import { PrismaClient } from "@prisma/client"
import jwt from 'jsonwebtoken'

export default async (req, res) => {
  const prisma = new PrismaClient()
  const { token } = req.cookies

  if (token) {
    const { _id, setName } = jwt.verify(token, process.env.JWT_SECRET)
    const { title, artist } = req.body
    const song = await prisma.song.create({
      data: { title, artist, Set: { connect: { setName } } },
    })
    res.json(song)
  } else {
    res.json({ error: "You must be signed in to add a song"})
  }
}
