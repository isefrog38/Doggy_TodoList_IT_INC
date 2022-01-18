import React, {useState} from 'react';
import './App.css';
import TodoList from "./Component/TodoList";
import {v1} from 'uuid';

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type FilterValuesType = "All" | "Active" | "Completed"

function App() {
    // BusinessLogicL... (BLL)
    // name
    const todoListTitle: string = "What to Learn";

    /*let tasks: Array<TaskType> = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS/ES6", isDone: true},
        {id: 3, title: "React/Redux", isDone: false},
    ]*/

    // logic remove , UseState
    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS/ES6", isDone: true},
        {id: v1(), title: "React", isDone: true},
        {id: v1(), title: "Redux", isDone: false},
        {id: v1(), title: "Bootstrap", isDone: false},
    ])

    const removeTask = (taskID: string) => {
        /* const filterTasks = tasks.filter(t => t.id !== taskID)*/
        setTasks(tasks.filter(t => t.id !== taskID));
    }

// logic Filter
    let [filter, setFilter] = useState<FilterValuesType>("All");

    let changeFilter = (filter: FilterValuesType) => {
        setFilter(filter)
    }
// Sam Filter
    let tasksForRender = tasks
    if (filter === "Active") {
        tasksForRender = tasks.filter(t => !t.isDone)
    } else if (filter === "Completed") {
        tasksForRender = tasks.filter(t => t.isDone)
    }
    /*const getTasksForRender = () => {
        switch (filter) {
            case "Active":
                return tasks.filter(t => !t.isDone === false)
            case "Completed":
                return tasks.filter(t => t.isDone === true)
            default:
                return tasks
        }
    }
    const tasksForRender = getTasksForRender()*/

    // add tasks in TASKS STATE
    const addTask = (title: string) => {
        let newTask = {
            id: v1(),
            /*title: title,*/
            title ,
            isDone: false
        };
        let newTasks = [newTask, ...tasks];
        return setTasks(newTasks)
    }

//UI
    return (
        <div className="App">
            <TodoList
                // name
                titleOfTodo={todoListTitle}
                // useState
                tasks={tasksForRender}
                // props na remove
                removeTask={removeTask}
                // props na button filter
                changeFilter={changeFilter}
                // addTask
                addTask={addTask}
            />
        </div>
    );
}

export default App;
