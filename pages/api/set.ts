import jwt from 'jsonwebtoken'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async (req, res) => {
  const { token } = req.cookies

  if (token) {
    const { id, setName } = jwt.verify(token, process.env.JWT_SECRET)
    const set = await prisma.set.findOne({ where: { id } })
    res.json(set)
  } else {
    res.json({})
  }
}