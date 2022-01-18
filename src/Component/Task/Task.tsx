import React, {ChangeEvent} from 'react';
import {TaskType} from "../../App";
import s from "./Task.module.css";


type TaskPropsType = TaskType & {
    removeTask: (taskID: string) => void
    changeTaskStatus: (taskId: string, isDone:boolean) => void
}

const Task: React.FC<TaskPropsType> = ({id, title, isDone, removeTask, changeTaskStatus}) => {

 /*   const [checkBoxState, setCheckBoxState]*/

    const onChangeHandler = ( e: ChangeEvent<HTMLInputElement>) => changeTaskStatus(id, e.currentTarget.checked)
    const onClickremoveTask = () => removeTask(id);

    return <li key={id}
        className={isDone ? s.is_done : ""}>
        <input onChange={onChangeHandler}
                type={"checkbox"}
               checked={isDone}/>
        <span>{title} </span>
        <button onClick={onClickremoveTask}>X</button>
    </li>
};

export default Task;