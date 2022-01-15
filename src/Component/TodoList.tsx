import React from 'react';
import TodoListHeader from "./TodoListHeader";
import Button from "./Button";
import AddPanel from "./AddPanel";
import {FilterValuesType, TaskType} from "../App";
import Task from "./Task";

type TodoListPropsType = {
    titleOfTodo: string
    tasks: Array<TaskType>
    removeTask: (taskID: string) => void
    changeFilter: (filter: FilterValuesType) => void
    addTask: (title: string) => void
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
    const onAllClickHandler = () => props.changeFilter("All")
    const onActiveClickHandler = () => props.changeFilter("Active")
    const onCompletedClickHandler = () => props.changeFilter("Completed")

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
                    <Button
                        onClickHandler={ onAllClickHandler }
                        title={"All"}/>
                    <Button
                        onClickHandler={ onActiveClickHandler }
                        title={"Active"}/>
                    <Button
                        onClickHandler={ onCompletedClickHandler }
                        title={"Completed"}/>
                </div>
            </div>
        </>
    );
}

export default TodoList;