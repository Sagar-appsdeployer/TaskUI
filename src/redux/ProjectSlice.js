import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ProjectName:[],
    TaskName:[]
}
export const ProjectSlice = createSlice({
    name:"Project",
    initialState,
    reducers:{

        add:(state,action)=>{
            state.ProjectName.push(action.payload)
           

        },

        addTask:(state,action)=>{
            state.TaskName.push(action.payload)
        }

    }
})

export const {add,addTask} = ProjectSlice.actions;
export default ProjectSlice.reducer;