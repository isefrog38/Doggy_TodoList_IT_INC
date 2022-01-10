import React from 'react';
import { TaskType } from "../App";

type TaskPropsType = TaskType & {
    removeTask: (taskID:number) => void
}
/*const Task: React.FC<TaskType> = ({title, isDone}) => {}*/
const Task: React.FC<TaskPropsType> = ({id ,title, isDone, removeTask}) => {
    return <li>
        <input type={"checkbox"} checked={isDone}/>
        <span>{title} </span>
        <button onClick={() => removeTask(id)}>X</button>
    </li>
};

export default Task;