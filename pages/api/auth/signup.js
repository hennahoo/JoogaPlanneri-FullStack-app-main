import prisma from "/lib/prisma"
import hashPassword from "/lib/auth"

const signupHandler = async (req, res) => {
    if (req.method === "POST") {
        const data = req.body
        const { email, password } = data

        if (!email || !email.includes("@") || !password) {
            return res.status(422).json({
                error: "Toimiva sähköpostiosoite ja salasana vaaditaan"
            })
        }

        const hashedPassword = await hashPassword(password)

        const user = await prisma.User.create({
            data: {
                email: email,
                password: hashedPassword
            }
        })
        res.status(201).json({
            user
        })
    }
}

export default signupHandler