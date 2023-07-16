import { configureStore } from "@reduxjs/toolkit"
import todoSlice from "./features/todoSlice"
import poseSlice from "./features/poseSlice"

export default configureStore(  {
    reducer: {
        todos: todoSlice,
        poses: poseSlice,
    }
})


