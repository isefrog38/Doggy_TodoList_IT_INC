import React, {useState} from 'react';
import './App.css';
import TodoList from "./Component/TodoList/TodoList";
import {v1} from 'uuid';
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Toolbar from "@mui/material/Toolbar";
import {Menu} from "@mui/icons-material";
import {AddTodolist} from "./Component/AddTodoList/AddTodoList";
import {addTodolistAC, changeFilterAC, editTitleTodolistAC, removeTodolistAC} from "./Redux/Todolist-Reducer";
import {useDispatch} from "react-redux";
import {addTaskAC, changeStatusTaskAC, editTitleTaskAC, removeTaskAC} from "./Redux/Task-Reducer";
/*import {AppBar, Button, Container, Grid, IconButton, Paper, Toolbar} from "@mui/material";*/


export type TaskType = {
    id: string
    title: string
    isDone: boolean
}
export type TodoListsType = {
    id: string
    title: string
    filter: FilterValuesType
}
export type FilterValuesType = "All" | "Active" | "Completed"

export const App = () => {

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
    let [todolists, setTodolist] = useState<Array<TodoListsType>>([
        {id: task1, title: "What to learn", filter: "All"},
        {id: task2, title: "What to buy", filter: "All"},
    ])
    const dispatch = useDispatch()

    const removeTodolist = (todolistId: string) => {
        dispatch(removeTodolistAC(todolistId))
    };
    const removeTask = (todolistId: string, taskID: string) => {
        dispatch(removeTaskAC(todolistId, taskID))
/*        setTasks({...tasksObj, [todolistId]: tasksObj[todolistId].filter(t => t.id !== taskID)})*/
    };
    const changeFilter = (todolistId: string, value: FilterValuesType) => {
        dispatch(changeFilterAC(todolistId, value))
       /* setTodolist(todolists.map((m) => m.id === todolistId ? {...m, filter: value} : m));*/
    };
    const addTask = (todolistId: string, title: string) => {
        dispatch(addTaskAC(todolistId, title));
        /*let newTask = {id: v1(), title, isDone: false}
        setTasks({...tasksObj, [todolistId]: [newTask, ...tasksObj[todolistId]]})
    */}
    const changeStatus = (todolistId: string, tasksId: string, isDone: boolean) => {
        dispatch(changeStatusTaskAC(todolistId, tasksId, isDone))
        /*setTasks(...tasksObj, [todolistId]: [...tasksObj[todolistId].map(t => t.id === tasksId ? {...t, isDone} : t)]})*/
    }
    const addTodolist = (title: string) => {
       /* let newId = v1();
        let newTodolist: TodoListsType = {id: newId, title, filter: "All"}
        setTodolist([newTodolist, ...todolists]);
        setTasks({[newId]: [], ...tasksObj})*/
       dispatch(addTodolistAC(title))
    }
    const editTitleTodolist = (todolistId: string, title: string) => {
       dispatch(editTitleTodolistAC(todolistId, title))
        /*setTodolist(todolists.map(e => e.id === todolistId ? {...e, title} : e))*/
    }
    const editTitleTask = (todolistId: string, taskId: string, title: string) => {
        dispatch(editTitleTaskAC(todolistId, taskId, title))
/*        setTasks({...tasksObj, [todolistId]: tasksObj[todolistId].map(el => el.id === taskId ? {...el, title} : el)})*/
    }

    //UI
    return (
        <Container maxWidth={"xl"} className={"App"}>
            <AppBar position={"static"} color={"secondary"}>
                <Grid container>
                    <Toolbar>
                        <IconButton
                                color={"inherit"}
                                aria-label={"menu"}
                                size="large">
                            <Menu/>
                        </IconButton>
                        <AddTodolist addTodolist={addTodolist}/>
                        <Button variant={"outlined"} color={"inherit"}>Login</Button>
                    </Toolbar>
                </Grid>
            </AppBar>

                <Grid container spacing={3}>
                    {
                        todolists.map((tl) => {
                            // Sam Filter
                            let tasksForRender = tasksObj[tl.id]
                            if (tl.filter === "Active") {
                                tasksForRender = tasksForRender.filter(t => !t.isDone)
                            } else if (tl.filter === "Completed") {
                                tasksForRender = tasksForRender.filter(t => t.isDone)
                            }

                            return (
                                <Grid item key={tl.id}>
                                    <Paper style={{marginTop: "30px", padding: "30px", alignItems: "center"}} elevation={3}>
                                        <TodoList
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
                                            // RenameTitleTODOLIST
                                            editTitleTodolist={editTitleTodolist}
                                            // taskRename
                                            editTitleTask={editTitleTask}
                                        />
                                    </Paper>
                                </Grid>
                            )
                        })
                    }
                </Grid>
        </Container>
    );
}

