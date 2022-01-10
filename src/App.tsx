import React, {useState} from 'react';
import './App.css';
import TodoList from "./Component/TodoList";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

function App() {
    // BLL
    const todoListTitle: string = "What to Learn";

    /*let tasks: Array<TaskType> = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS/ES6", isDone: true},
        {id: 3, title: "React/Redux", isDone: false},
    ]*/

    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS/ES6", isDone: true},
        {id: 3, title: "React/Redux", isDone: false},
    ])

    const removeTask = (taskID: number) => {
       /* const filterTasks = tasks.filter(t => t.id !== taskID)*/
        setTasks(tasks.filter(t => t.id !== taskID));
    }

//UI
    return (
        <div className="App">
            <TodoList
                titleOfTodo={todoListTitle}
                tasks={tasks}
                removeTask={removeTask}
            />
        </div>
    );
}

export default App;
