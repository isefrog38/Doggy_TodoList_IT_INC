import React, {useState} from 'react';
import './App.css';
import TodoList from "./Component/TodoList";

export type TaskType = {
    id: number
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
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS/ES6", isDone: true},
        {id: 3, title: "React", isDone: true},
        {id: 4, title: "Redux", isDone: false},
        {id: 5, title: "Bootstrap", isDone: false},
    ])

    const removeTask = (taskID: number) => {
        /* const filterTasks = tasks.filter(t => t.id !== taskID)*/
        setTasks(tasks.filter(t => t.id !== taskID));
    }

// logic Filter
    const [filter, setFilter] = useState<FilterValuesType>("All");

    const changeFilter = (filter: FilterValuesType) => {
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

//UI
    return (
        <div className="App">
            <TodoList
                // name
                titleOfTodo={todoListTitle}
                // useState
                tasks={tasksForRender}
                // props na ydalenie
                removeTask={removeTask}
                // props na button filter
                changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
