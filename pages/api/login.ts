import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import cookie from 'cookie'

export default async (req, res) => {
  const { setName, password } = req.body

  const set = await prisma.set.findOne({
    where: { setName },
  })

  if (set && bcrypt.compareSync(password, set.password)) {
    const token = jwt.sign(
      { setName: set.setName, id: setName.id, time: new Date() },
      process.env.JWT_SECRET,
      {
        expiresIn: "6h",
      }
    )

    res.setHeader(
      "Set-Cookie",
      cookie.serialize("token", token, {
        httpOnly: true,
        maxAge: 6 * 60 * 60,
        path: "/",
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
      })
    )

    res.json(set)
  } else {
    res.json({ error: "Incorrect username or password" })
    return
  }
}
