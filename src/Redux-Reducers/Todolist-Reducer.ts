import {v1} from 'uuid'
import {FilterValuesType} from './Task-Reducer'
import {AxiosTodolistType} from "../Types/Types_Todolists_API";

export type ActionsTodolistTypes = getTodolistsType | AddTodolistActionType | RemoveTodolistActionType | ChangeFilterTodolistActionType | EditTitleTodolistActionType;
export type AddTodolistActionType = ReturnType<typeof addTodolistAC>;
export type RemoveTodolistActionType = ReturnType<typeof removeTodolistAC>;
export type ChangeFilterTodolistActionType = ReturnType<typeof changeFilterAC>;
export type EditTitleTodolistActionType = ReturnType<typeof editTitleTodolistAC>;
export type getTodolistsType = ReturnType<typeof getTodolistsAC>;
export type TodoListsType = {
    /*id: string
    title: string
    filter: FilterValuesType*/
    id: string
    addedDate: string
    order: number
    title: string
};
export type InitialStateType = TodoListsType[];

export const ADD_TODOLIST = 'ADD_TODOLIST';
const CHANGE_FILTER_TODOLIST = 'CHANGE_FILTER_TODOLIST';
const EDIT_TITLE_TODOLIST = 'EDIT_TITLE_TODOLIST';
export const REMOVE_TODOLIST = 'REMOVE_TODOLIST';
export const GET_TODOLISTS = 'GET_TODOLISTS';

export const todolistId1 = v1();
const initialState: InitialStateType = [
    {id: todolistId1, title: 'What to learn', addedDate: 'All', order: 2},
];

export const todolistReducer = (state = initialState, action: ActionsTodolistTypes): InitialStateType => {
    switch (action.type) {
        case GET_TODOLISTS: {
            return [
                ...action.data
            ]
        }
        case ADD_TODOLIST: {
            return [
                {id: action.id, title: action.title, addedDate: 'All', order: 3},
                ...state
            ]
        }
        case REMOVE_TODOLIST: {
            return state.filter((f) => f.id !== action.todolistId)
        }
        case CHANGE_FILTER_TODOLIST: {
            return state.map((todolist) =>
                todolist.id === action.todolistId
                    ? {...todolist, filter: action.filter}
                    : todolist
            )
        }
        case EDIT_TITLE_TODOLIST: {
            return state.map((e) =>
                e.id === action.todolistId ? {...e, title: action.title} : e
            )
        }
        default:
            return state
    }
}

export const getTodolistsAC = (data: AxiosTodolistType[] ) => {
    return {type: GET_TODOLISTS, data} as const
}

export const addTodolistAC = (title: string) => {
    return {type: ADD_TODOLIST, title, id: v1()} as const
};
export const removeTodolistAC = (todolistId: string) => {
    return {type: REMOVE_TODOLIST, todolistId} as const
};
export const changeFilterAC = (todolistId: string, filter: FilterValuesType) => {
    return {type: CHANGE_FILTER_TODOLIST, todolistId, filter} as const
};
export const editTitleTodolistAC = (todolistId: string, title: string) => {
    return {type: EDIT_TITLE_TODOLIST, todolistId, title} as const
};
