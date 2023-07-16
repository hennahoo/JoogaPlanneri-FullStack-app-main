import { hash, compare } from "bcryptjs"

const hashPassword = async (password) => {
    const salt = await hash(password, 12)
    return salt
}

export const verifyPassword = async (password, hashedPassword) => {
    const result = await compare(password, hashedPassword)
    return result
}

export default hashPassword