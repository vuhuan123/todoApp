
import filterSlice from "../components/Filters/filterSlice"
import todoListSlice from "../components/TodoList/todoListSlice"
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
    reducer: {
        filters: filterSlice.reducer,
        todoList: todoListSlice.reducer,
    }
})

export default store;