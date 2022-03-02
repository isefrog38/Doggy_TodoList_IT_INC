import {addTodolistAC, InitialStateType, todolistReducer} from "../Todolist-Reducer";
import {initialStateType, taskReducer} from "../Task-Reducer";

test('ids should be equals', () => {
    const startTasksState: initialStateType = {};
    const startTodolistsState: InitialStateType = [];

    const action = addTodolistAC("new todolist");

    const endTasksState = taskReducer(startTasksState, action)
    const endTodolistsState = todolistReducer(startTodolistsState, action)

    const keys = Object.keys(endTasksState);
    const idFromTasks = keys[0];
    const idFromTodolists = endTodolistsState[0].id;

    expect(idFromTasks).toBe(action.id);
    expect(idFromTodolists).toBe(action.id);
});
