import { useState } from "react"
import { v4 as uuid } from "uuid"
import dayjs from "dayjs"
import { useDispatch } from "react-redux"
import { todoActions } from "../features/todoSlice"
import { useSession } from "next-auth/react"
import styles from "../styles/InputElement.module.css"

const InputElement = () => {
    const [inputValue, setInputValue] = useState("")
    const dispatch = useDispatch()
    const { data: session, status } = useSession()

    const listenForEnterKey = (event) => {
        if (event.key === "Enter") {
            handleSubmit()
        }
    }

    const handleSubmit = async () => {
        const todo = {
            text: inputValue,
            id: uuid(),
            date: dayjs().unix(),
            completed: false,
            userId: session ? session.user.email : "null"
        }
        dispatch(todoActions.addTodo(todo))
        setInputValue("")
    }

        return (
            <div className={styles.input}>
                <input type="text" 
                    onChange={(event) => setInputValue(event.target.value)} 
                    value={inputValue}
                    onKeyDown={listenForEnterKey}
                    placeholder="Add a todo"  
                />
                <button onClick={handleSubmit} className={styles.button}>Submit</button>
            </div>
        )
    }

    export default InputElement