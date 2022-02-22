import React from 'react';
import './App.css';
import TodoList from "./Component/TodoList/TodoList";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Toolbar from "@mui/material/Toolbar";
import {Menu} from "@mui/icons-material";
import {AddTodolist} from "./Component/AddTodoList/AddTodoList";
import {addTodolistAC, TodoListsType} from "./Redux-Reducers/Todolist-Reducer";
import {useDispatch, useSelector} from "react-redux";
import {initialStateType} from "./Redux-Reducers/Task-Reducer";
import {StoreType} from "./Redux-Reducers/redux-state";

export const App = React.memo(() => {
    /*
        const task1 = v1();
    const task2 = v1();
    let [tasksObj, setTasks] = useState({
        [task1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS/ES6", isDone: true},
            {id: v1(), title: "React", isDone: true},
            {id: v1(), title: "Redux-Reducers", isDone: false},
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
    ])*/

    const dispatch = useDispatch()
    const todoLists = useSelector<StoreType, TodoListsType[]>(state => state.todolistReducer.todolists);
    const tasks = useSelector<StoreType, initialStateType>(state => state.taskReducer);

    const addTodolist = (title: string) => {
        /* let newId = v1();
         let newTodolist: TodoListsType = {id: newId, title, filter: "All"}
         setTodolist([newTodolist, ...todolists]);
         setTasks({[newId]: [], ...tasksObj})*/
        dispatch(addTodolistAC(title))
    };
    /*const removeTask = (todolistId: string, taskID: string) => {
        dispatch(removeTaskAC(todolistId, taskID))
    };*/
    /*const changeFilter = (todolistId: string, value: FilterValuesType) => {
        dispatch(changeFilterAC(todolistId, value))
    };*/
    /*const editTitleTask = (todolistId: string, taskId: string, title: string) => {
        dispatch(editTitleTaskAC(todolistId, taskId, title))
    };*/
    /*const addTask = (todolistId: string, title: string) => {
        dispatch(addTaskAC(todolistId, title));
    };*/
    /*    const changeStatus = (todolistId: string, tasksId: string, isDone: boolean) => {
        dispatch(changeStatusTaskAC(todolistId, tasksId, isDone))
        /!*setTasks(...tasksObj, [todolistId]: [...tasksObj[todolistId].map(t => t.id === tasksId ? {...t, isDone} : t)]})*!/
    };*/
    /* const editTitleTodolist = (todolistId: string, title: string) => {
       dispatch(editTitleTodolistAC(todolistId, title))
    };*/
    /*const removeTodolist = (todolistId: string) => {
        dispatch(removeTodolistAC(todolistId))
    };*/

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
                        todoLists.map((tl) => {
                            // Sam Filter
                            let tasksForRender = tasks[tl.id]
                            if (tl.filter === "Active") {
                                tasksForRender.filter(t => !t.isDone)
                            } else if (tl.filter === "Completed") {
                                tasksForRender.filter(t => t.isDone)
                            }

                            return (
                                <Grid item key={tl.id}>
                                    <Paper style={{marginTop: "30px", padding: "30px", alignItems: "center"}} elevation={3}>
                                        <TodoList
                                            key={tl.id}
                                            todolistId={tl.id}
                                            filterBS={tl.filter}
                                        />
                                    </Paper>
                                </Grid>
                            )
                        })
                    }
                </Grid>
        </Container>
    );
})

