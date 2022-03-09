import {todolistId1} from "../Todolist-Reducer";
import {v1} from "uuid";
import {
    addTaskAC,
    changeStatusTaskAC,
    editTitleTaskAC,
    initialStateType,
    removeTaskAC,
    taskReducer
} from "../Task-Reducer";

let taskId1: string;
let taskId2: string;
let startState: initialStateType;

beforeEach(() => {
    taskId1 = v1();
    taskId2 = v1();

     startState = {
        [todolistId1]: [
            {id: taskId1, title: "HTML&CSS", isDone: true},
            {id: taskId2, title: "JS/ES6", isDone: true},
            {id: v1(), title: "React", isDone: true},
            {id: v1(), title: "Redux-Reducers", isDone: false},
            {id: v1(), title: "Bootstrap", isDone: false},
        ]}
})

test("Added tasks from todolist" , () => {

        const action = addTaskAC(todolistId1, "NewTitle");

        const endState = taskReducer(startState, action);

    expect(endState[todolistId1].length).toBe(6)
    expect(endState[todolistId1][0].title).toBe("NewTitle")
    expect(endState[todolistId1][0].isDone).toBe(false)
})

test("Remove tasks from todolist" , () => {

        const action = removeTaskAC(taskId1, todolistId1);

        const endState = taskReducer(startState, action);

    expect(endState[todolistId1].length).toBe(4);
    expect(endState[todolistId1][0].title).toBe("JS/ES6");
    expect(endState[todolistId1][0].isDone).toBe(true);
    expect(endState[todolistId1][0].id).toBe(taskId2);
})

test("Change status task from todolist" , () => {

        const action = changeStatusTaskAC(todolistId1, taskId1, false);
        const action2 = changeStatusTaskAC(todolistId1, taskId2, false);

        const endState = taskReducer(startState, action);
        const endState2 = taskReducer(startState, action2);

    expect(endState[todolistId1][0].title).toBe("HTML&CSS");
    expect(endState[todolistId1][0].isDone).toBe(false);
    expect(endState[todolistId1][0].id).toBe(taskId1);

    expect(endState2[todolistId1][1].title).toBe("JS/ES6");
    expect(endState2[todolistId1][1].isDone).toBe(false);
    expect(endState2[todolistId1][1].id).toBe(taskId2);
})

test("Edit title task from todolist" , () => {

    const action = editTitleTaskAC(todolistId1, taskId1, "NewTitle from Task");

    const endState = taskReducer(startState, action);

    expect(endState[todolistId1][0].title).toBe("NewTitle from Task");
    expect(endState[todolistId1][0].isDone).toBe(true);
    expect(endState[todolistId1][0].id).toBe(taskId1);
})
