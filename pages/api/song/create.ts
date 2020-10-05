import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default async (req, res) => {
  const { title } = req.body
  const song = await prisma.tweet.create({ data: { title } })
  res.json(song)
}
