import {
    addTodolistAC,
    AddTodolistActionType, changeFilterAC, editTitleTodolistAC,
    InitialState, removeTodolistAC, RemoveTodolistActionType,
    todolistId1, todolistId2,
    todolistReducer
} from "../Todolist-Reducer";

test("Added todolist", () => {

    const startState: InitialState = {
        todolists: [{id: todolistId1, title: "What to learn", filter: "Completed"}
        ]}

    const active = addTodolistAC("New Title Todolist");

    const endState = todolistReducer(startState, active)

    expect(endState.todolists.length).toBe(2);
    expect(endState.todolists[0].title).toBe("New Title Todolist");
    expect(endState.todolists[0].filter).toBe("All");
})

test("Remove todolist", () => {

    const startState: InitialState = {
        todolists: [{id: todolistId1, title: "What to learn", filter: "Completed"},
            {id: todolistId2, title: "What to learn", filter: "All"}
        ]}

    const active = removeTodolistAC(todolistId1);

    const endState = todolistReducer(startState, active)

    expect(endState.todolists.length).toBe(1);
    expect(endState.todolists[0].title).toBe("What to learn");
    expect(endState.todolists[0].filter).toBe("All");
})

test("Change filter on todolist", () => {

    const startState: InitialState = {
        todolists: [{id: todolistId1, title: "What to learn", filter: "Completed"},
            {id: todolistId2, title: "What to learn", filter: "All"}
        ]}

    const active = changeFilterAC(todolistId2, "Completed");

    const endState = todolistReducer(startState, active)

    expect(endState.todolists.length).toBe(2);
    expect(endState.todolists[1].title).toBe("What to learn");
    expect(endState.todolists[1].filter).toBe("Completed");
})

test("Edit title todolist", () => {

    const startState: InitialState = {
        todolists: [{id: todolistId1, title: "What to learn", filter: "Completed"},
            {id: todolistId2, title: "What to learn", filter: "All"}
        ]}

    const active = editTitleTodolistAC(todolistId2, "New Title Todolist");

    const endState = todolistReducer(startState, active)

    expect(endState.todolists.length).toBe(2);
    expect(endState.todolists[1].title).toBe("New Title Todolist");
    expect(endState.todolists[1].filter).toBe("All");
})