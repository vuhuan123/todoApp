
import { createSelector } from "@reduxjs/toolkit"

export const todoListSelector = (state) => {

    console.log(state);
    return state.todoList
};
export const searchTextSelector = (state) => state.filters.search;

export const reselectRemaining = createSelector(todoListSelector, searchTextSelector, (todoList, searchText) => {

    return todoList.filter((todo) => {
        return todo.name.includes(searchText)
    })
})    