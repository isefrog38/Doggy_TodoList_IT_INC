import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import s from "./AddPanel.module.css";

type AddPanelType = {
    id: string
    addTask: ( todolistId: string, title: string) => void
}

function AddPanel(props: AddPanelType) {

    const [newTaskTitle, setNewTaskTitle] = useState<string>("");
    const [error, setError] = useState<string | null>(null);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
    }
    const onKeyPressAddTask = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        /*if (e.ctrlKey || e.charCode === 13) {*/
        if (e.ctrlKey || e.key === "Enter") {
            addTaskHandler()
        }
    }
    const addTaskHandler = () => {
        if (newTaskTitle.trim() !== "") {
            props.addTask(props.id, newTaskTitle.trim())
            setNewTaskTitle("")
        } else {
            setError("Title is required !")
        }
    }


    return (
        <div>
            <input className={error ? s.error : ""}
                   value={newTaskTitle}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressAddTask}/>
            <button className={s.ButtonStyle}
                onClick={addTaskHandler}>+
            </button>
            {error && <div className={s.error_message}>{error}</div>}
        </div>
    );
}

export default AddPanel;
