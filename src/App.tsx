import React, {useCallback} from 'react'
import './App.css'
import {TodoList} from './Component/TodoList/TodoList'
import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Paper from '@mui/material/Paper'
import Toolbar from '@mui/material/Toolbar'
import {Menu} from '@mui/icons-material'
import {AddTodolist} from './Component/AddTodoList/AddTodoList'
import {addTodolistAC, TodoListsType} from './Redux-Reducers/Todolist-Reducer'
import {useDispatch, useSelector} from 'react-redux'
import {StoreType} from './Redux-Reducers/store-redux';

export const App = React.memo(() => {

    const dispatch = useDispatch()
    const todoLists = useSelector<StoreType, TodoListsType[]>(
        (state) => state.todolistReducer
    )

    const addTodolist = useCallback((title: string) => {
        dispatch(addTodolistAC(title))
    },[])

    //UI
    return (
        <div className={'App'}>
            <AppBar position={'static'} color={"inherit"} style={{backgroundColor: " rgba(144, 164, 15, 0.50)", height: "70px"}}>
                <Container maxWidth={'xl'}>
                    <Grid container>
                        <Toolbar>
                            {/*<IconButton
                                color={'inherit'}
                                aria-label={'menu'}
                                size="large"
                            >
                                <Menu/>
                            </IconButton>*/}
                            <AddTodolist addTodolist={addTodolist}/>
                        </Toolbar>
                    </Grid>
                </Container>
            </AppBar>

            <Grid container spacing={3}>
                {todoLists.map((tl) => {

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
                                    filterBS={tl.filter}
                                />
                            </Paper>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
})
