import {v1} from 'uuid'
import {FilterValuesType} from './Task-Reducer'

export type ActionsTodolistTypes =
    AddTodolistActionType
    | RemoveTodolistActionType
    | ChangeFilterTodolistActionType
    | EditTitleTodolistActionType;
export type AddTodolistActionType = ReturnType<typeof addTodolistAC>;
export type RemoveTodolistActionType = ReturnType<typeof removeTodolistAC>;
export type ChangeFilterTodolistActionType = ReturnType<typeof changeFilterAC>;
export type EditTitleTodolistActionType = ReturnType<typeof editTitleTodolistAC>;
export type TodoListsType = {
    id: string
    title: string
    filter: FilterValuesType
};
export type InitialStateType = TodoListsType[];

export const todolistId1 = v1();
export const todolistId2 = v1();

const ADD_TODOLIST = 'ADD_TODOLIST';
const CHANGE_FILTER_TODOLIST = 'CHANGE_FILTER_TODOLIST';
const EDIT_TITLE_TODOLIST = 'EDIT_TITLE_TODOLIST';
const REMOVE_TODOLIST = 'REMOVE_TODOLIST';

const initialState: InitialStateType = [
    {id: todolistId1, title: 'What to learn', filter: 'All'},
]

export const todolistReducer = (state = initialState, action: ActionsTodolistTypes): InitialStateType => {
    switch (action.type) {
        case ADD_TODOLIST: {
            return [
                {id: action.id, title: action.title, filter: 'All'},
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
