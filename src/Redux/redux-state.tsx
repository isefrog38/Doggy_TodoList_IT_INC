import {combineReducers, createStore} from "redux";
import {todolistReducer} from "./Todolist-Reducer";
import {taskReducer} from "./Task-Reducer";

export type StoreType = ReturnType<typeof storeRedux>

const storeRedux = combineReducers({
    todolistReducer,
    taskReducer
})

export const store = createStore(storeRedux);