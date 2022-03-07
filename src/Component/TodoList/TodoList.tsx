import React, {useCallback} from 'react';
import { RenameSpanFunction } from '../RenameSpanFunction';
import Button from '../Button';
import { AddPanel } from '../AddPanel/AddPanel';
import { DeleteTwoTone } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { addTaskAC, FilterValuesType, TaskType,} from '../../Redux-Reducers/Task-Reducer';
import { useDispatch, useSelector } from 'react-redux';
import { StoreType } from '../../Redux-Reducers/store-redux';
import { Task } from '../Task/Task';
import { changeFilterAC, editTitleTodolistAC, removeTodolistAC, TodoListsType,} from '../../Redux-Reducers/Todolist-Reducer';

type TodoListPropsType = {
   todolistId: string
   filterBS: FilterValuesType
};

export const TodoList = React.memo(({ todolistId, filterBS }: TodoListPropsType) => {

   const dispatch = useDispatch()

   const tasks = useSelector<StoreType, TaskType[]>((state) => state.taskReducer[todolistId])
   const todoList = useSelector<StoreType, TodoListsType>((state) => state.todolistReducer.filter((e) => e.id === todolistId)[0])

   let filteredTasks = useCallback((filter: FilterValuesType) => {
      if (filter === 'Active') {
         return tasks.filter((e) => !e.isDone)
      } else if (filter === 'Completed') {
         return tasks.filter((e) => e.isDone)
      } else return tasks
   },[tasks]);

   const tasksComponents = filteredTasks(todoList.filter).map((task) => {
      return <Task key={task.id} taskId={task.id} todolistId={todolistId} />
   })


   const onAllClickHandler = useCallback(() => dispatch(changeFilterAC(todolistId, 'All')),[dispatch, todolistId]);
   const onActiveClickHandler = useCallback(() => dispatch(changeFilterAC(todolistId, 'Active')),[dispatch, todolistId]);
   const onCompletedClickHandler = useCallback(() => dispatch(changeFilterAC(todolistId, 'Completed')),[dispatch, todolistId]);

   const editTitleTodolistHandler = useCallback((title: string) => dispatch(editTitleTodolistAC(todolistId, title)),[dispatch, todolistId]);
   const RemoveTodolist = useCallback(() => dispatch(removeTodolistAC(todolistId)),[dispatch, todolistId]);

   const addTask = useCallback((todolistId: string, title: string) => {
      dispatch(addTaskAC(todolistId, title))},[dispatch])

   return (
      <>
         <div>
            <IconButton style={{ float: 'right' }} onClick={RemoveTodolist}>
               <DeleteTwoTone />
            </IconButton>
            <h3>
               <RenameSpanFunction
                  title={todoList.title}
                  editTitle={editTitleTodolistHandler}
               />
            </h3>
            <AddPanel addTask={addTask} id={todolistId} />
            <ul>{tasksComponents}</ul>
            <div>
               <Button
                  activeButton={filterBS}
                  onClickHandler={onAllClickHandler}
                  title={'All'}
               />
               <Button
                  activeButton={filterBS}
                  onClickHandler={onActiveClickHandler}
                  title={'Active'}
               />
               <Button
                  activeButton={filterBS}
                  onClickHandler={onCompletedClickHandler}
                  title={'Completed'}
               />
            </div>
         </div>
      </>
   )
});

