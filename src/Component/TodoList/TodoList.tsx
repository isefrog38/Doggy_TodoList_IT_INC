import React from 'react';
import TodoListHeader from "../TodoListHeader";
import Button from "../Button";
import AddPanel from "../AddPanel/AddPanel";
import {FilterValuesType, TaskType} from "../../App";
import Task from "../Task/Task";

type TodoListPropsType = {
    id: string
    titleOfTodo: string
    tasks: Array<TaskType>
    removeTask: (taskID: string, todolistId: string) => void
    changeFilter: (filter: FilterValuesType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean, todolistId: string) => void
    filterBS: FilterValuesType
    removeTodolist: (todolistId: string) => void
}

function TodoList(props: TodoListPropsType) {

    const tasksComponents = props.tasks.map((task) => {
        return (
            <Task
                key={task.id}
                id={task.id}
                todolistId={props.id}
                title={task.title}
                isDone={task.isDone}
                removeTask={props.removeTask}
                changeTaskStatus={props.changeTaskStatus}
                //или деструктуризировать {...task}
            />
        )
    })

    //  если передаешь сам иншлстэйт то props.changeFilter === "значение"
    const onAllClickHandler = () => props.changeFilter("All" , props.id);
    const onActiveClickHandler = () => props.changeFilter("Active", props.id);
    const onCompletedClickHandler = () => props.changeFilter("Completed", props.id);

    return (
        <>
            <div>
                <button
                    onClick={ () => props.removeTodolist(props.id)}
                >x</button>
                <TodoListHeader title={props.titleOfTodo}/>

                <AddPanel addTask={props.addTask} id={props.id}/>

                <ul>
                    {tasksComponents}
                </ul>
                <div>
                    <Button activeButton={props.filterBS}
                            onClickHandler={onAllClickHandler}
                            title={"All"}/>
                    <Button activeButton={props.filterBS}
                            onClickHandler={onActiveClickHandler}
                            title={"Active"}/>
                    <Button activeButton={props.filterBS}
                            onClickHandler={onCompletedClickHandler}
                            title={"Completed"}/>
                </div>
            </div>
        </>
    );
}

export default TodoList;