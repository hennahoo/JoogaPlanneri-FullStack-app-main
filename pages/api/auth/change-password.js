import { getSession } from "next-auth/react";

const changePassword = async (req, res) => {
    if (req.method === "POST") {
        const session = await getSession({ req: req });
        const userId = session.user.email
        const { oldPassword, newPassword } = req.body

        const userData = await prisma.user.update({
            where: {
                email: userId
            },
            data: {
                password: newPassword
            }
        })
        return res.status(200).json({ message: "Salasana vaihdettu" });
    }
}

export default changePassword;