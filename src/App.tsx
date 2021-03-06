import React, {useCallback, useEffect} from 'react';
import './App.css';
import {TodoList} from './Component/TodoList/TodoList';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import {AddTodolist} from './Component/AddTodoList/AddTodoList';
import {addTodolistAC, TodoListsType} from './Redux-Reducers/Todolist-Reducer';
import {useDispatch, useSelector} from 'react-redux';
import {StoreType} from './Redux-Reducers/store-redux';
import {TodolistAPI} from "./API/todolist_api";
import {getTodolistsTC} from "./Thunk/thunk-todolist";

export const App = React.memo(() => {

    const dispatch = useDispatch();
    const todoLists = useSelector<StoreType, TodoListsType[]>(state => state.todolistReducer);

    useEffect(() => {
        getTodolistsTC()
    },[])

    const addTodolist = useCallback((title: string) => dispatch(addTodolistAC(title)),[dispatch]);

    //UI
    return (
        <div className={'App'}>
            <AppBar position={'static'}
                    color={"inherit"}
                    style={{
                        backgroundColor: " rgba(144, 164, 15, 0.50)",
                        height: "70px"
            }}>
                <Container maxWidth={'xl'}>
                    <Grid container>
                        <Toolbar>
                            <AddTodolist addTodolist={addTodolist}/>
                        </Toolbar>
                    </Grid>
                </Container>
            </AppBar>

            <Grid container spacing={3}>

                {todoLists.map((tl) => {                      // MAP

                    return (
                        <Grid item key={tl.id}>
                            <Paper
                                style={{
                                    margin: '30px 0 0 20px',
                                    padding: '30px',
                                    alignItems: 'center',
                                }}
                                elevation={3}
                            >
                                <TodoList
                                    key={tl.id}
                                    todolistId={tl.id}
                                    filterBS={tl.addedDate}
                                />
                            </Paper>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
})
