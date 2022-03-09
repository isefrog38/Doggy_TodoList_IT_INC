import {combineReducers, createStore} from "redux";
import {todolistReducer} from "./Todolist-Reducer";
import {taskReducer} from "./Task-Reducer";

export type StoreType = ReturnType<typeof rootStore>

const rootStore = combineReducers({
    todolistReducer: todolistReducer,
    taskReducer: taskReducer
})

export const store = createStore(rootStore);