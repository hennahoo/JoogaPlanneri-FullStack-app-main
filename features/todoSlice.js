import { createSlice } from "@reduxjs/toolkit"
import { toggleTodoInDatabase, deleteTodoInDatabase, createTodoInDatabase } from "./apiCalls"

export const todoSlice = createSlice({
    name: "todos",

    initialState: {
        todos: [],
        isCreatingNewAccount: false,
    },

    reducers: {
        hydrateTodos: (state, action) => {
            state.todos = action.payload
        },
        addTodo: (state, action) => {
            state.todos.push(action.payload)
            createTodoInDatabase(action.payload)
        },
        toggleTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload)
            if (todo) {
                todo.completed = !todo.completed
                toggleTodoInDatabase(todo)
            }
        },
        deleteTodo: (state, action) => {
            const todoToDelete = state.todos.find(todo => todo.id === action.payload)
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
            deleteTodoInDatabase(todoToDelete)
        },
        isCreatingNewAccount: (state, action) => {
            state.isCreatingNewAccount = action.payload
        }
    }
})

export const todoActions = todoSlice.actions
export default todoSlice.reducer