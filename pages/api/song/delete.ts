import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async (req, res) => {
  const { id } = req.body

  const song = await prisma.song.delete({
    where: { id }
  })

  res.json(song)
  return
}
