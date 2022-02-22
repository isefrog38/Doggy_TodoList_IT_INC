import { v1 } from 'uuid'
import { AddTodolistActionType, todolistId1 } from './Todolist-Reducer'

export type TaskType = {
   id: string
   title: string
   isDone: boolean
}
export type FilterValuesType = 'All' | 'Active' | 'Completed'
type AllActionTaskType =
   | AddTaskActionType
   | RemoveTaskActionType
   | ChangeStatusTaskActionType
   | EditTitleTaskActionType
   | AddTodolistActionType
export type initialStateType = {
   [key: string]: TaskType[]
}

type AddTaskActionType = ReturnType<typeof addTaskAC>
type RemoveTaskActionType = ReturnType<typeof removeTaskAC>
type ChangeStatusTaskActionType = ReturnType<typeof changeStatusTaskAC>
type EditTitleTaskActionType = ReturnType<typeof editTitleTaskAC>

const initialState: initialStateType = {
   [todolistId1]: [
      { id: v1(), title: 'HTML&CSS', isDone: true },
      { id: v1(), title: 'JS/ES6', isDone: true },
      { id: v1(), title: 'React', isDone: true },
      { id: v1(), title: 'Redux-Reducers', isDone: false },
      { id: v1(), title: 'Bootstrap', isDone: false },
   ],
}

export const taskReducer = (
   state = initialState,
   action: AllActionTaskType
): initialStateType => {
   switch (action.type) {
      case 'ADD_TODOLIST': {
         const stateCopy = { ...state, [action.id]: [] }
         return stateCopy
      }
      case ADD_TASK: {
         let newTask = { id: v1(), title: action.title, isDone: false }
         return {
            ...state,
            [action.todolistId]: [newTask, ...state[action.todolistId]],
         }
      }
      case REMOVE_TASK: {
         const stateCopy = { ...state }
         const tasks = state[action.todolistId]
         stateCopy[action.todolistId] = tasks.filter(
            (t) => t.id !== action.taskID
         )
         return stateCopy
      }
      case EDIT_TITLE_TASK: {
         return {
            ...state,
            [action.todolistId]: state[action.todolistId].map((el) =>
               el.id === action.taskId ? { ...el, title: action.title } : el
            ),
         }
      }
      case CHANGE_STATUS_TASK: {
         return {
            ...state,
            [action.todolistId]: state[action.todolistId].map((el) =>
               el.id === action.taskID ? { ...el, isDone: action.isDone } : el
            ),
         }
      }
      default:
         return state
   }
}

const ADD_TASK = 'ADD_TASK'

export const addTaskAC = (todolistId: string, title: string) => {
   return { type: ADD_TASK, todolistId, title } as const
}
const REMOVE_TASK = 'REMOVE_TASK'

export const removeTaskAC = (taskID: string, todolistId: string) => {
   return { type: REMOVE_TASK, todolistId, taskID } as const
}

const CHANGE_STATUS_TASK = 'CHANGE_STATUS_TASK'

export const changeStatusTaskAC = (
   todolistId: string,
   taskID: string,
   isDone: boolean
) => {
   return { type: CHANGE_STATUS_TASK, todolistId, taskID, isDone } as const
}

const EDIT_TITLE_TASK = 'EDIT_TITLE_TASK'

export const editTitleTaskAC = (
   todolistId: string,
   taskId: string,
   title: string
) => {
   return { type: EDIT_TITLE_TASK, todolistId, taskId, title } as const
}
