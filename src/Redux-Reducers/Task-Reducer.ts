import {v1} from "uuid";
import  {todolistId1} from "./Todolist-Reducer";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
};
export type FilterValuesType = "All" | "Active" | "Completed";
type AllActionTaskType = AddTaskActionType | RemoveTaskActionType | ChangeStatusTaskActionType | EditTitleTaskActionType;
export type initialStateType = {
    [key: string]: TaskType[]
};

const initialState: initialStateType = {
    [todolistId1]: [
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS/ES6", isDone: true},
        {id: v1(), title: "React", isDone: true},
        {id: v1(), title: "Redux-Reducers", isDone: false},
        {id: v1(), title: "Bootstrap", isDone: false},
    ],
    /*[todolistId2]: [
        {id: v1(), title: "Milk", isDone: true},
        {id: v1(), title: "Chips", isDone: true},
        {id: v1(), title: "Bread", isDone: true},
        {id: v1(), title: "Beer", isDone: false},
        {id: v1(), title: "Meat", isDone: false},
    ],*/
}

export const taskReducer = (state = initialState, action: AllActionTaskType): initialStateType => {
    switch (action.type) {
        case ADD_TASK : {
            let newTask = {id: v1(), title: action.title , isDone: false};
            return {...state, [action.todolistId]: [newTask, ...state[action.todolistId]]};
        }
        case REMOVE_TASK : {
            return {...state, [action.todolistId]: state[action.todolistId].filter(t => t.id !== action.taskID)};
        }
        case EDIT_TITLE_TASK : {
            return {...state, [action.todolistId]: state[action.todolistId].map(el => el.id === action.taskId ? {...el, title: action.title} : el)};
        }
        case CHANGE_STATUS_TASK : {
            return {...state, [action.todolistId]: state[action.todolistId].map(el => el.id === action.taskID ? {...el, isDone: action.isDone} : el)}
        }
        default:
            return state
    }
}

const ADD_TASK = "ADD_TASK";
type AddTaskActionType = ReturnType<typeof addTaskAC>;
export const addTaskAC = (todolistId: string, title: string) => {
    return {type: ADD_TASK, todolistId, title} as const
}
const REMOVE_TASK = "REMOVE_TASK";
type RemoveTaskActionType = ReturnType<typeof removeTaskAC>;
export const removeTaskAC = (todolistId: string, taskID: string) => {
    return {type: REMOVE_TASK, todolistId, taskID} as const
}

const CHANGE_STATUS_TASK = "CHANGE_STATUS_TASK";
type ChangeStatusTaskActionType = ReturnType<typeof changeStatusTaskAC>;
export const changeStatusTaskAC = (todolistId: string, taskID: string, isDone: boolean) => {
    return {type: CHANGE_STATUS_TASK, todolistId, taskID, isDone} as const
}

const EDIT_TITLE_TASK = "EDIT_TITLE_TASK";
type EditTitleTaskActionType = ReturnType<typeof editTitleTaskAC>;
export const editTitleTaskAC = (todolistId: string, taskId: string, title: string) => {
    return {type: EDIT_TITLE_TASK, todolistId, taskId, title} as const
}