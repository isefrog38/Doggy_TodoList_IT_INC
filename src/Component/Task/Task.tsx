import React, {ChangeEvent} from 'react';
import {TaskType} from "../../App";
import s from "./Task.module.css";
import {RenameSpanFunction} from "../RenameSpanFunction";

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
                <input onChange={onChangeHandler}
                       type={"checkbox"}
                       checked={isDone}/>
                <RenameSpanFunction title={title} editTitleTodolist={onEditTitleTaskHandler}/>
                <button onClick={onClickRemoveTask}>X</button>
            </li>
        </div>
    )
};

export default Task;