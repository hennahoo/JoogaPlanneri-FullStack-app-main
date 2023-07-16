import prisma from "/lib/prisma"

const todo = async (req, res) => {
    // Adding a new todo
    if (req.method === "POST") {
        try {
            const aTodo = await prisma.todos.create({
                data: {
                    text: req.body.text,
                    completed: req.body.completed,
                    createdAt: req.body.createdAt,
                    id: req.body.id,
                    userId: req.body.userId
                }
            })
            res.status(201).json({ message: aTodo })
        } catch (error) {
            res.status(500).json({ message: error })
        }
    }

    // Toggling the completed status of a todo
    if (req.method === "PATCH") {
        try {
            const aTodo = await prisma.todos.update({
                where: {
                    id: req.body.id
                },
                data: {
                    completed: req.body.completed
                }
            })
            res.status(200).json({ message: aTodo })
        } catch (error) {
            res.status(500).json({ message: error })
        }
    }

    // Deleting a todo
    if (req.method === "DELETE") {
        try {
            const aTodo = await prisma.todos.delete({
                where: {
                    id: req.body.id
                }
            })
            res.status(200).json({ message: aTodo })
        } catch (error) {
            res.status(500).json({ message: error })
        }
    }

    // Reading all todos
    if (req.method === "GET") {
        try {
            const todos = await prisma.todos.findMany({
                where: {
                    userId: req.query.userId
                }
            })
            res.status(200).json(todos)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
}

export default todo