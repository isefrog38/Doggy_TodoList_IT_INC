import React, {useState} from 'react';
import './App.css';
import TodoList from "./Component/TodoList/TodoList";
import {v1} from 'uuid';
import img1 from "../public/first.jpg";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type todoListsType = {
    id: string
    title: string
    filter: FilterValuesType
}

export type FilterValuesType = "All" | "Active" | "Completed"

function App() {
    // BusinessLogicL... (BLL)

    const task1 = v1();
    const task2 = v1();
    let [tasksObj, setTasks] = useState({
        [task1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS/ES6", isDone: true},
            {id: v1(), title: "React", isDone: true},
            {id: v1(), title: "Redux", isDone: false},
            {id: v1(), title: "Bootstrap", isDone: false},
        ],
        [task2]: [
            {id: v1(), title: "Milk", isDone: true},
            {id: v1(), title: "Chips", isDone: true},
            {id: v1(), title: "Bread", isDone: true},
            {id: v1(), title: "Beer", isDone: false},
            {id: v1(), title: "Meat", isDone: false},
        ],
    })

    let [todolists, setTodolist] = useState<Array<todoListsType>>([
        {id: task1, title: "What to learn", filter: "All"},
        {id: task2, title: "What to buy", filter: "All"},
    ])

    const removeTodolist = (todolistId: string) => {
        let filteredTodolist = todolists.filter(tl => tl.id !== todolistId);
        setTodolist(filteredTodolist)
        delete tasksObj[todolistId]
        setTasks({...tasksObj})
    }

    const removeTask = (taskID: string, todolistId: string) => {
        let tasks = tasksObj[todolistId];
        tasksObj[todolistId] = tasks.filter( t => t.id !== taskID);
        setTasks({...tasksObj});
    }

    let changeFilter = (value: FilterValuesType, todolistId: string) => {
        let todolist = todolists.find(tl => tl.id === todolistId);
        if (todolist) {
            todolist.filter = value;
            setTodolist([...todolists]);
        }
    }

    // add tasks in TASKS STATE
    const addTask = (title: string, todolistId: string) => {
        let newTask = {id: v1(), title, isDone: false};
        let tasks = tasksObj[todolistId];
        //// или вместо этих двух строк
        // let newTasks = [newTask, ...tasks]
        //tasksObj[todolistId] = newTasks
        tasksObj[todolistId] = [newTask, ...tasks];
        return setTasks({...tasksObj})
    }

    function changeStatus(tasksId: string, isDone: boolean, todolistId: string) {
        let tasks = tasksObj[todolistId]
        tasksObj[todolistId] = tasks.map( t => t.id === tasksId ? {...t, isDone} : t)
        setTasks({...tasksObj})
    }

    //UI
    return (
        <div className={"App"}>
            {/*<div style={{background: `url(${img1})no-repeat center/cover`, height: '100vh'}}/>*/}
            {
                todolists.map((tl) => {

                    // Sam Filter
                    let tasksForRender = tasksObj[tl.id]
                    if (tl.filter === "Active") {
                        tasksForRender = tasksForRender.filter( t => !t.isDone )
                    } else if (tl.filter === "Completed") {
                        tasksForRender = tasksForRender.filter( t => t.isDone )
                    }

                    return <TodoList
                        // ключи обязательны
                        key={tl.id}
                        // id
                        id={tl.id}
                        // name
                        titleOfTodo={tl.title}
                        // useState
                        tasks={tasksForRender}
                        // props na remove
                        removeTask={removeTask}
                        // props na button filter
                        changeFilter={changeFilter}
                        // addTask
                        addTask={addTask}
                        // changeStatus
                        changeTaskStatus={changeStatus}
                        // filter button style
                        filterBS={tl.filter}
                        // delete All todoLIST
                        removeTodolist={removeTodolist}
                    />
                })
            }
        </div>
    );
}

export default App;
