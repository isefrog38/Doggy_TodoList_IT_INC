import React, {ChangeEvent, memo, useCallback} from 'react';
import s from "./Task.module.css";
import {RenameSpanFunction} from "../RenameSpanFunction";
import {DeleteTwoTone} from "@mui/icons-material";
import {Checkbox, IconButton} from "@mui/material";
import {changeStatusTaskAC, editTitleTaskAC, removeTaskAC, TaskType} from "../../Redux-Reducers/Task-Reducer";
import {useDispatch, useSelector} from "react-redux";
import {StoreType} from "../../Redux-Reducers/store-redux";

type TaskPropsType = {
    todolistId: string
    taskId: string
}

export const Task = memo(({todolistId, taskId}: TaskPropsType) => {

    const dispatch = useDispatch();
    const task = useSelector<StoreType, TaskType | undefined>(state => state.taskReducer[todolistId].find(t => t.id === taskId));

    const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => dispatch(changeStatusTaskAC(todolistId, taskId, e.currentTarget.checked)),[dispatch, todolistId, taskId]);
    const onClickRemoveTask = useCallback(() => dispatch(removeTaskAC(taskId, todolistId)),[dispatch, todolistId, taskId]);
    const onEditTitleTaskHandler = useCallback((title: string) => dispatch(editTitleTaskAC(todolistId, taskId, title)),[dispatch, todolistId, taskId]);

    return (
        <div className={s.container}>
            {task && // no see error (undefined task)
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
                        <DeleteTwoTone/>
                    </IconButton>
                </li>
            }
        </div>
    )
});
