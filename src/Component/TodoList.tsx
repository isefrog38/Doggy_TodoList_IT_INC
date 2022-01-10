import React from 'react';
import TodoListHeader from "./TodoListHeader";
import Button from "./Button";
import AddPanel from "./AddPanel";
import {TaskType} from "../App";
import Task from "./Task";

type TodoListPropsType = {
    titleOfTodo: string
    tasks: Array<TaskType>
    removeTask: (taskID: number) => void
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
                    <Button title={"All"}/>
                    <Button title={"Active"}/>
                    <Button title={"Completed"}/>
                </div>
            </div>
        </>
    );
}

export default TodoList;