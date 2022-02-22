import {
    addTodolistAC, changeFilterAC, editTitleTodolistAC,
    InitialStateType, removeTodolistAC,
    todolistId1, todolistId2,
    todolistReducer
} from "../Todolist-Reducer";

test("Added todolist", () => {

    const startState: InitialStateType = [
            {id: todolistId1, title: "What to learn", filter: "Completed"}
        ]

    const active = addTodolistAC("New Title Todolist");

    const endState = todolistReducer(startState, active)

    expect(endState.length).toBe(2);
    expect(endState[0].title).toBe("New Title Todolist");
    expect(endState[0].filter).toBe("All");
})

test("Remove todolist", () => {

    const startState: InitialStateType = [
            {id: todolistId1, title: "What to learn", filter: "Completed"},
            {id: todolistId2, title: "What to learn", filter: "All"}
        ]

    const active = removeTodolistAC(todolistId1);

    const endState = todolistReducer(startState, active)

    expect(endState.length).toBe(1);
    expect(endState[0].title).toBe("What to learn");
    expect(endState[0].filter).toBe("All");
})

test("Change filter on todolist", () => {

    const startState: InitialStateType = [
        {id: todolistId1, title: "What to learn", filter: "Completed"},
        {id: todolistId2, title: "What to learn", filter: "All"}
    ]

    const active = changeFilterAC(todolistId2, "Completed");

    const endState = todolistReducer(startState, active)

    expect(endState.length).toBe(2);
    expect(endState[1].title).toBe("What to learn");
    expect(endState[1].filter).toBe("Completed");
})

test("Edit title todolist", () => {

    const startState: InitialStateType = [
        {id: todolistId1, title: "What to learn", filter: "Completed"},
        {id: todolistId2, title: "What to learn", filter: "All"}
    ]

    const active = editTitleTodolistAC(todolistId2, "New Title Todolist");

    const endState = todolistReducer(startState, active)

    expect(endState.length).toBe(2);
    expect(endState[1].title).toBe("New Title Todolist");
    expect(endState[1].filter).toBe("All");
})