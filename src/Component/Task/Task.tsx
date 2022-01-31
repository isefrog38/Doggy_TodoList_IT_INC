import React, {ChangeEvent} from 'react';
import {TaskType} from "../../App";
import s from "./Task.module.css";

type TaskPropsType = TaskType & {
    todolistId: string
    removeTask: (taskID: string, todolistId: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean, todolistId: string) => void
}

const Task: React.FC<TaskPropsType> = ({id, title, isDone, removeTask, changeTaskStatus, todolistId}) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => changeTaskStatus(id, e.currentTarget.checked, todolistId);
    const onClickRemoveTask = () => removeTask(id, todolistId);

    return <li key={id}
               className={isDone ? s.is_done : ""}>
        <input onChange={onChangeHandler}
               type={"checkbox"}
               checked={isDone}/>
        <span>{title} </span>
        <button onClick={onClickRemoveTask}>X</button>
    </li>
};

export default Task;