import {Dispatch} from "redux";
import {getTodolistsAC} from "../Redux-Reducers/Todolist-Reducer";
import {TodolistAPI} from "../API/todolist_api";

export const getTodolistsTC = () => (dispatch: Dispatch) => {
    TodolistAPI.getTodolists()
        .then(data => {
            dispatch(getTodolistsAC(data))
        })
}