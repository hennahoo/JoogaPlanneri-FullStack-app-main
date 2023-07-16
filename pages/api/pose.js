import prisma from "/lib/prisma"

const pose = async (req, res) => {
    // Adding a new pose
    if (req.method === "POST") {
        try {
            const aPose = await prisma.Pose.create({
                data: {
                    PoseId: req.body.PoseId,
                    PoseName: req.body.PoseName,
                    PoseCreateDate: req.body.PoseCreateDate,
                    PoseOtherInformation: req.body.PoseOtherInformation
                }
            })
            res.status(201).json({ message: aPose })
        } catch (error) {
            res.status(500).json({ message: error })
        }
    }

    // Toggling the completed status of a pose
    // if (req.method === "PATCH") {
    //     try {
    //         const aPose = await prisma.Pose.update({
    //             where: {
    //                 id: req.body.id
    //             },
    //             data: {
    //                 completed: req.body.completed
    //             }
    //         })
    //         res.status(200).json({ message: aPose })
    //     } catch (error) {
    //         res.status(500).json({ message: error })
    //     }
    // }

    // Deleting a pose
    if (req.method === "DELETE") {
        try {
            const aPose = await prisma.Pose.delete({
                where: {
                    id: req.body.PoseId
                }
            })
            res.status(200).json({ message: aPose })
        } catch (error) {
            res.status(500).json({ message: error })
        }
    }

    // Reading all poses
    if (req.method === "GET") {
        try {
            const poses = await prisma.Pose.findMany({
                where: {
                    PoseId: req.query.PoseId,
                }
            })
            res.status(200).json(poses)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
}

export default pose