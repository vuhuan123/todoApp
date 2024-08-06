
import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: "filter",
    initialState: {
        search: ' ',
        status: 'ALL',
        priority: ""
    },
    reducers: {
        searchFilterChange: (state, action) => {
            state.search = action.payload;
        }
    }

})