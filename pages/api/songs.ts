import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default async (req, res) => {
    const songs = await prisma.song.findMany({
      orderBy: {createdAt: "desc" },
      include: { Set: true}
    })
    res.json(songs)
}
