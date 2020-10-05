import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default async (req, res) => {
  const { title, artist } = req.body
  const song = await prisma.song.create({ data: { title, artist } })
  res.json(song)
}
