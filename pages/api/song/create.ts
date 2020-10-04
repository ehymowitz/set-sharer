import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default async (req, res) => {
  const { name } = req.body
  const song = await prisma.song.create({ data: { name }})
  res.json(song)
}
