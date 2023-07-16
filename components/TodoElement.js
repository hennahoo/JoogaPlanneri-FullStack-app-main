import { useDispatch } from "react-redux"
import { todoActions } from "features/todoSlice"

const TodoElement = (props) => {
    const dispatch = useDispatch()
    const todo = props.todo
    return (
        <div key={todo.id} className="todoElement">
            <>
                <p>{todo.text}</p>
                <div><input type="checkbox" checked={todo.completed} onChange={() => dispatch(todoActions.toggleTodo(todo.id))} /></div>
                <button onClick={() => dispatch(todoActions.deleteTodo(todo.id))}>Delete</button>
            </>
        </div>
    )
}

export default TodoElement