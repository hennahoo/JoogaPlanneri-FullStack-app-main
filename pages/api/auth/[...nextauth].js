import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import prisma from "/lib/prisma"
import { verifyPassword } from "/lib/auth"

export default NextAuth({
    session: {
        jwt: true
    },
    secret: process.env.SECRET,
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                const response = await prisma.User.findUnique({
                    where: {
                        email: credentials.email,
                    },
                })
                if (!response) {
                    throw new Error("Käyttäjää ei löydy!")
                }

                const isValid = await verifyPassword(credentials.password, response.password)

                if (!isValid) {
                    throw new Error("Salasana ei kelpaa, kokeile uudelleen.")
                }

                return {
                    email: response.email,
                }
            }
        })
    ]
})