import { v1 } from 'uuid'
import { FilterValuesType } from './Task-Reducer'

export type ActionsTodolistTypes =
   | AddTodolistActionType
   | RemoveTodolistActionType
   | ChangeFilterTodolistActionType
   | EditTitleTodolistActionType
export type TodoListsType = {
   id: string
   title: string
   filter: FilterValuesType
}
export const todolistId1 = v1()
export const todolistId2 = v1()
export type InitialStateType = TodoListsType[]

const initialState: InitialStateType = [
   { id: todolistId1, title: 'What to learn', filter: 'All' },
]

/*
    {id: todolistId2, title: "What to buy", filter: "All"},
*/

export const todolistReducer = (
   state = initialState,
   action: ActionsTodolistTypes
): InitialStateType => {
   switch (action.type) {
      case ADD_TODOLIST: {
         return [
            ...state,
            { id: action.id, title: action.title, filter: 'All' },
         ]
      }
      case REMOVE_TODOLIST: {
         return state.filter((f) => f.id !== action.todolistId)
      }
      case CHANGE_FILTER_TODOLIST: {
         return state.map((todolist) =>
            todolist.id === action.todolistId
               ? { ...todolist, filter: action.filter }
               : todolist
         )
      }
      case EDIT_TITLE_TODOLIST: {
         return state.map((e) =>
            e.id === action.todolistId ? { ...e, title: action.title } : e
         )
      }
      default:
         return state
   }
}

const ADD_TODOLIST = 'ADD_TODOLIST'
export type AddTodolistActionType = ReturnType<typeof addTodolistAC>
export const addTodolistAC = (title: string) => {
   return { type: ADD_TODOLIST, title, id: v1() } as const
}
const REMOVE_TODOLIST = 'REMOVE_TODOLIST'
export type RemoveTodolistActionType = ReturnType<typeof removeTodolistAC>
export const removeTodolistAC = (todolistId: string) => {
   return { type: REMOVE_TODOLIST, todolistId } as const
}
const CHANGE_FILTER_TODOLIST = 'CHANGE_FILTER_TODOLIST'
export type ChangeFilterTodolistActionType = ReturnType<typeof changeFilterAC>
export const changeFilterAC = (
   todolistId: string,
   filter: FilterValuesType
) => {
   return { type: CHANGE_FILTER_TODOLIST, todolistId, filter } as const
}
const EDIT_TITLE_TODOLIST = 'EDIT_TITLE_TODOLIST'
export type EditTitleTodolistActionType = ReturnType<typeof editTitleTodolistAC>
export const editTitleTodolistAC = (todolistId: string, title: string) => {
   return { type: EDIT_TITLE_TODOLIST, todolistId, title } as const
}
