import { createSlice } from "@reduxjs/toolkit"
import { toggleposeInDatabase, deleteposeInDatabase, createposeInDatabase } from "./apiCalls"

export const poseSlice = createSlice({
    name: "poses",

    initialState: {
        poses: [],
        isCreatingNewAccount: false,
    },

    reducers: {
        hydratePoses: (state, action) => {
            state.poses = action.payload
        },
        addPose: (state, action) => {
             state.poses.push(action.payload)
             createposeInDatabase(action.payload)
         },
        //  togglePose: (state, action) => {
        //      const pose = state.poses.find(pose => pose.id === action.payload)
        //      if (pose) {
        //          pose.completed = !pose.completed
        //          toggleposeInDatabase(pose)
        //      }
        //  },
         deletePose: (state, action) => {
             const poseToDelete = state.poses.find(pose => pose.id === action.payload)
             state.poses = state.poses.filter(pose => pose.id !== action.payload)
             deleteposeInDatabase(poseToDelete)
         },
         isCreatingNewAccount: (state, action) => {
             state.isCreatingNewAccount = action.payload
         }
    }
})

export const poseActions = poseSlice.actions
export default poseSlice.reducer