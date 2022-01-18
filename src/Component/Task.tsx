import React from 'react';
import {TaskType} from "../App";

type TaskPropsType = TaskType & {
    removeTask: (taskID: string) => void
}

const Task: React.FC<TaskPropsType> = ({id, title, isDone, removeTask}) => {

    const onClickremoveTask = () => removeTask(id)

    return <li>
        <input type={"checkbox"} checked={isDone}/>
        <span>{title} </span>
        <button onClick={onClickremoveTask}>X</button>
    </li>
};

export default Task;