import {
    addTodolistAC, changeFilterAC, editTitleTodolistAC,
    InitialStateType, removeTodolistAC, todolistReducer
} from "../Todolist-Reducer";
import {v1} from "uuid";

let todolistId1: string;
let todolistId2: string;
let startState: InitialStateType;

beforeEach(() => {

     todolistId1 = v1();
     todolistId2 = v1();

    startState = [
        {id: todolistId1, title: "What to learn", filter: "Completed"},
        {id: todolistId2, title: "What to learn", filter: "All"}
    ]
})

test("Added todolist", () => {

    const active = addTodolistAC("New Title Todolist");

    const endState = todolistReducer(startState, active)

    expect(endState.length).toBe(3);
    expect(endState[0].title).toBe("New Title Todolist");
    expect(endState[0].filter).toBe("All");
})

test("Remove todolist", () => {

    const active = removeTodolistAC(todolistId1);

    const endState = todolistReducer(startState, active)

    expect(endState.length).toBe(1);
    expect(endState[0].title).toBe("What to learn");
    expect(endState[0].filter).toBe("All");
})

test("Change filter on todolist", () => {

    const active = changeFilterAC(todolistId2, "Completed");

    const endState = todolistReducer(startState, active)

    expect(endState.length).toBe(2);
    expect(endState[1].title).toBe("What to learn");
    expect(endState[1].filter).toBe("Completed");
})

test("Edit title todolist", () => {

    const active = editTitleTodolistAC(todolistId2, "New Title Todolist");

    const endState = todolistReducer(startState, active)

    expect(endState.length).toBe(2);
    expect(endState[1].title).toBe("New Title Todolist");
    expect(endState[1].filter).toBe("All");
})