import React, {ChangeEvent} from 'react';
import {TaskType} from "../../App";
import s from "./Task.module.css";
import {RenameSpanFunction} from "../RenameSpanFunction";
import {DeleteTwoTone} from "@mui/icons-material";
import {Checkbox, IconButton} from "@mui/material";

type TaskPropsType = TaskType & {
    todolistId: string
    removeTask: (taskID: string, todolistId: string) => void
    changeTaskStatus: (todolistId: string, taskId: string, isDone: boolean) => void
    editTitleTask: (title: string) => void
}

const Task: React.FC<TaskPropsType> = ({id, title, isDone, removeTask, changeTaskStatus, todolistId,editTitleTask}) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => changeTaskStatus(todolistId, id, e.currentTarget.checked);
    const onClickRemoveTask = () => removeTask(todolistId, id);
    const onEditTitleTaskHandler = (title: string) => {
        editTitleTask( title)
    }

    return (
        <div className={s.container}>
            <li key={id}
                className={isDone ? s.is_done : ""}>
                <Checkbox
                          defaultChecked color="default"
                          checked={isDone}
                          onChange={onChangeHandler}
                />
                <RenameSpanFunction title={title} editTitleTodolist={onEditTitleTaskHandler}/>
                <IconButton
                    onClick={onClickRemoveTask}>
                    <DeleteTwoTone />
                </IconButton>

            </li>
        </div>
    )
};

export default Task;