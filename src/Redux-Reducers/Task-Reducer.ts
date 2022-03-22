import {v1} from 'uuid'
import {
    ADD_TODOLIST,
    AddTodolistActionType,
    REMOVE_TODOLIST,
    RemoveTodolistActionType,
    todolistId1
} from './Todolist-Reducer'

export type TaskType = {
    id: string
    title: string
    isDone: boolean
};
export type FilterValuesType = 'All' | 'Active' | 'Completed';
type AllActionTaskType = AddTaskActionType | RemoveTodolistActionType | RemoveTaskActionType | ChangeStatusTaskActionType | EditTitleTaskActionType | AddTodolistActionType;
export type initialStateType = {
    [key: string]: TaskType[]
};
type AddTaskActionType = ReturnType<typeof addTaskAC>;
type RemoveTaskActionType = ReturnType<typeof removeTaskAC>;
type ChangeStatusTaskActionType = ReturnType<typeof changeStatusTaskAC>;
type EditTitleTaskActionType = ReturnType<typeof editTitleTaskAC>;

const ADD_TASK = 'ADD_TASK';
const REMOVE_TASK = 'REMOVE_TASK';
const CHANGE_STATUS_TASK = 'CHANGE_STATUS_TASK';
const EDIT_TITLE_TASK = 'EDIT_TITLE_TASK';

const initialState: initialStateType = {
    [todolistId1]: [
        {id: v1(), title: 'HTML&CSS', isDone: true},
        {id: v1(), title: 'JS/ES6', isDone: true},
        {id: v1(), title: 'React', isDone: true},
        {id: v1(), title: 'Redux-Reducers', isDone: false},
        {id: v1(), title: 'Bootstrap', isDone: false},
    ],
};

export const taskReducer = (state = initialState, action: AllActionTaskType): initialStateType => {
    switch (action.type) {
        case ADD_TODOLIST: {
           return  {...state, [action.id]: []}
        }
        case REMOVE_TODOLIST: { // только потому что забивает оперативную пямять при скоплении объектов
            let newState = {...state}
            delete newState[action.todolistId]
            return  newState
        }
        case ADD_TASK: {
            let newTask = {id: v1(), title: action.title, isDone: false}
            return {
                ...state,
                [action.todolistId]: [newTask, ...state[action.todolistId]],
            }
        }
        case REMOVE_TASK: {
            return {...state,
                [action.todolistId]: state[action.todolistId].filter((t) =>
                    t.id !== action.taskID)}
        }
        case EDIT_TITLE_TASK: {
            return {
                ...state,
                [action.todolistId]: state[action.todolistId].map((el) =>
                    el.id === action.taskId ? {...el, title: action.title} : el
                ),
            }
        }
        case CHANGE_STATUS_TASK: {
            return {
                ...state,
                [action.todolistId]: state[action.todolistId].map((el) =>
                    el.id === action.taskID ? {...el, isDone: action.isDone} : el
                ),
            }
        }
        default:
            return state
    }
}

export const addTaskAC = (todolistId: string, title: string) => {
    return {type: ADD_TASK, todolistId, title} as const
};
export const removeTaskAC = (taskID: string, todolistId: string) => {
    return {type: REMOVE_TASK, todolistId, taskID} as const
};
export const changeStatusTaskAC = (todolistId: string, taskID: string, isDone: boolean) => {
    return {type: CHANGE_STATUS_TASK, todolistId, taskID, isDone} as const
};
export const editTitleTaskAC = (todolistId: string, taskId: string, title: string) => {
    return {type: EDIT_TITLE_TASK, todolistId, taskId, title} as const
};
