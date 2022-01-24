import React from 'react';
import TodoListHeader from "../TodoListHeader";
import Button from "../Button";
import AddPanel from "../AddPanel/AddPanel";
import {FilterValuesType, TaskType} from "../../App";
import Task from "../Task/Task";

type TodoListPropsType = {
    titleOfTodo: string
    tasks: Array<TaskType>
    removeTask: (taskID: string) => void
    changeFilter: (filter: FilterValuesType) => void
    addTask: (title: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean) => void
    /*changeTaskStatus: (taskId: string) => void*/
    filterBS: FilterValuesType
}

function TodoList(props: TodoListPropsType) {

    /*const tasksComponents = props.tasks.map((t) => <Task key={t.id} removeTask={props.removeTask} {...t}/>)*/
    const tasksComponents = props.tasks.map((task) => {
        return (
            <Task
                id={task.id}
                title={task.title}
                isDone={task.isDone}
                removeTask={props.removeTask}
                changeTaskStatus={props.changeTaskStatus}
                //или деструктуризировать {...task}
            />
        )
    })

    //  если передаешь сам иншлстэйт то props.changeFilter === "значение"
    const onAllClickHandler = () => props.changeFilter("All");
    const onActiveClickHandler = () => props.changeFilter("Active");
    const onCompletedClickHandler = () => props.changeFilter("Completed");

    return (
        <>
            <div>
                <TodoListHeader title={props.titleOfTodo}/>
                <AddPanel addTask={props.addTask}/>
                <div>
                    <h1>Yo</h1>
                </div>
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