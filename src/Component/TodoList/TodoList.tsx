import React from 'react';
import {RenameSpanFunction} from "../RenameSpanFunction";
import Button from "../Button";
import {AddPanel} from "../AddPanel/AddPanel";
import {DeleteTwoTone} from "@mui/icons-material";
import {IconButton} from "@mui/material";
import {addTaskAC, FilterValuesType, TaskType} from "../../Redux-Reducers/Task-Reducer";
import {useDispatch, useSelector} from "react-redux";
import {StoreType} from "../../Redux-Reducers/redux-state";
import {Task} from "../Task/Task";
import {
    changeFilterAC,
    editTitleTodolistAC,
    removeTodolistAC,
    TodoListsType
} from "../../Redux-Reducers/Todolist-Reducer";

type TodoListPropsType = {
    todolistId: string
    filterBS: FilterValuesType
}



function TodoList({todolistId, filterBS}: TodoListPropsType) {

    const dispatch = useDispatch();
    const tasks = useSelector<StoreType, TaskType[]>(state => state.taskReducer[todolistId]);
    const todoLists = useSelector<StoreType, TodoListsType | undefined>(state => state.todolistReducer.todolists.find(todo => todo.id === todolistId));

    const tasksComponents = tasks.map((task) => {
        return (
            <Task
                key={task.id}
                taskId={task.id}
                todolistId={todolistId}
            />
        )
    })

    const onAllClickHandler = () => dispatch(changeFilterAC(todolistId, "All"));
    const onActiveClickHandler = () => dispatch(changeFilterAC(todolistId, "Active"));
    const onCompletedClickHandler = () => dispatch(changeFilterAC(todolistId, "Completed"));

    const editTitleTodolistHandler = (title: string) => dispatch(editTitleTodolistAC(todolistId, title));
    const RemoveTodolist = () => dispatch(removeTodolistAC(todolistId));

    const addTask = (todolistId: string, title: string) => dispatch(addTaskAC(todolistId, title));

    if(!todoLists) return <div>Error...</div>

    return (
        <>
            <div>
                <IconButton style={{float:"right"}}
                    onClick={RemoveTodolist}>
                    <DeleteTwoTone />
                </IconButton>
                <h3>
                    <RenameSpanFunction title={todoLists.title} editTitle={editTitleTodolistHandler}/>
                </h3>
                <AddPanel addTask={addTask} id={todolistId}/>
                <ul>
                    {tasksComponents}
                </ul>
                <div>
                    <Button activeButton={filterBS}
                            onClickHandler={onAllClickHandler}
                            title={"All"}/>
                    <Button activeButton={filterBS}
                            onClickHandler={onActiveClickHandler}
                            title={"Active"}/>
                    <Button activeButton={filterBS}
                            onClickHandler={onCompletedClickHandler}
                            title={"Completed"}/>
                </div>
            </div>
        </>
    );
}

export default TodoList;