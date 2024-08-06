
import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: "todoList",
    initialState: [
        { id: 1, name: "Learn Game", completed: false, priority: 'Medium' },
        { id: 2, name: "Learn React", completed: true, priority: 'High' },
        { id: 3, name: "Learn  Redux", completed: false, priority: 'Low' }
    ],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload)
        }
    }
})