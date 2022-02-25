import React, {ChangeEvent} from 'react';
import s from "./Task.module.css";
import {RenameSpanFunction} from "../RenameSpanFunction";
import {DeleteTwoTone} from "@mui/icons-material";
import {Checkbox, IconButton} from "@mui/material";
import {changeStatusTaskAC, editTitleTaskAC, removeTaskAC, TaskType} from "../../Redux-Reducers/Task-Reducer";
import {useDispatch, useSelector} from "react-redux";
import {StoreType} from "../../Redux-Reducers/redux-state";

type TaskPropsType = {
    todolistId: string
    taskId: string
}

export const Task: React.FC<TaskPropsType> = ({todolistId, taskId}) => {

    const dispatch = useDispatch();
    const task = useSelector<StoreType, TaskType | undefined>(state => state.taskReducer[todolistId].find(t => t.id === taskId));

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => dispatch(changeStatusTaskAC(todolistId, taskId, e.currentTarget.checked));
    const onClickRemoveTask = () => dispatch(removeTaskAC(taskId, todolistId));
    const onEditTitleTaskHandler = (title: string) => dispatch(editTitleTaskAC(todolistId, taskId, title));

    if(!task) return <div>Error...</div>

    return (
        <div className={s.container}>
            <li key={taskId}
                className={task.isDone ? s.is_done : ""}>
                <Checkbox
                    color="default"
                          checked={task.isDone}
                          onChange={onChangeHandler}
                />
                <RenameSpanFunction title={task.title} editTitle={onEditTitleTaskHandler}/>
                <IconButton
                    onClick={onClickRemoveTask}>
                    <DeleteTwoTone />
                </IconButton>
            </li>
        </div>
    )
}
