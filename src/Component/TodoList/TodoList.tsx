import React, {memo, useCallback} from 'react';
import { RenameSpanFunction } from '../RenameSpanFunction';
import { AddPanel } from '../AddPanel/AddPanel';
import { DeleteTwoTone } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { addTaskAC, FilterValuesType, TaskType,} from '../../Redux-Reducers/Task-Reducer';
import { useDispatch, useSelector } from 'react-redux';
import { StoreType } from '../../Redux-Reducers/store-redux';
import { Task } from '../Task/Task';
import { editTitleTodolistAC, removeTodolistAC, TodoListsType,} from '../../Redux-Reducers/Todolist-Reducer';
import {Buttons} from "../Buttons/Buttons";

type TodoListPropsType = {
   todolistId: string
   filterBS: /*FilterValuesType*/ string
};

export const TodoList = memo(({ todolistId, filterBS }: TodoListPropsType) => {

   const tasks = useSelector<StoreType, TaskType[]>((state) => state.taskReducer[todolistId]);
   const todoList = useSelector<StoreType, TodoListsType>((state) => state.todolistReducer.filter((e) => e.id === todolistId)[0]);
   const dispatch = useDispatch();

   let filteredTasks = useCallback((filter: FilterValuesType) => {
      if (filter === 'Active') {
         return tasks.filter((e) => !e.isDone)
      } else if (filter === 'Completed') {
         return tasks.filter((e) => e.isDone)
      } else return tasks
   },[tasks]);

   /*const tasksComponents = filteredTasks(todoList.addedDate).map((task) => {
      return <Task key={task.id} taskId={task.id} todolistId={todolistId} />
   });*/

   const editTitleTodolistHandler = useCallback((title: string) => dispatch(editTitleTodolistAC(todolistId, title)),[dispatch, todolistId]);
   const RemoveTodolist = useCallback(() => dispatch(removeTodolistAC(todolistId)),[dispatch, todolistId]);

   const addTask = useCallback((todolistId: string, title: string) => dispatch(addTaskAC(todolistId, title)),[dispatch]);

   return (
      <>
         <div>
            {/*Delete Todolist*/}
            <IconButton style={{ float: 'right' }} onClick={RemoveTodolist}>
               <DeleteTwoTone />
            </IconButton>
            {/*Rename Title Todolist*/}
            <h3>
               <RenameSpanFunction
                  title={todoList.title}
                  editTitle={editTitleTodolistHandler}
               />
            </h3>
            <AddPanel addTask={addTask} id={todolistId} />
            {/*Tasks*/}
            {/*<ul>{tasksComponents}</ul>
            Buttons
            <Buttons filterBS={filterBS} todolistId={todolistId}/>*/}
         </div>
      </>
   )
});

