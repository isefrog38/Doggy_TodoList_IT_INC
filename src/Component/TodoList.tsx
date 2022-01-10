import React from 'react';
import TodoListHeader from "./TodoListHeader";
import Button from "./Button";
import AddPanel from "./AddPanel";
import {FilterValuesType, TaskType} from "../App";
import Task from "./Task";

type TodoListPropsType = {
    titleOfTodo: string
    tasks: Array<TaskType>
    removeTask: (taskID: number) => void
    changeFilter: (filter: FilterValuesType) => void
}

function TodoList(props: TodoListPropsType) {
    const tasksComponents = props.tasks.map((t) => <Task key={t.id} removeTask={props.removeTask} {...t}/>)

    /*const tasksComponents = props.tasks.map((task) => {
        return (
            <Task
                id={task.id}
                title={task.title}
                isDone={task.isDone}
                removeTask={props.removeTask}
                //или деструктуризировать {...task}
            />
        )
    })*/

    return (
        <>
            <div>
                <TodoListHeader title={props.titleOfTodo}/>
                <AddPanel/>
                <div>
                    <h1>Yo</h1>
                </div>
                <ul>
                    {tasksComponents}
                </ul>
                <div>
                    <Button
                        onClickHandler={() => props.changeFilter("All")}
                        title={"All"}/>
                    <Button
                        onClickHandler={() => props.changeFilter("Active")}
                        title={"Active"}/>
                    <Button
                        onClickHandler={() => props.changeFilter("Completed")}
                        title={"Completed"}/>
                </div>
            </div>
        </>
    );
}

export default TodoList;