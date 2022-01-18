import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import s from "./AddPanel.module.css"

type AddPanelType = {
    addTask: (title: string) => void
}

function AddPanel(props: AddPanelType) {

    const [newTaskTitle, setNewTaskTitle] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const onChangeHandler = ( e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
    }
    const onKeyPressAddTask = ( e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        /*if (e.ctrlKey || e.charCode === 13) {*/
        if (e.ctrlKey || e.key === "Enter") {
            addTaskHandler()
        }
    }
    const addTaskHandler = () => {
        if (newTaskTitle.trim() !== "") {
            props.addTask(newTaskTitle.trim())
            setNewTaskTitle("")
        } else {
            setError("Title is required")
        }
    }


    return (
        <div>
            <input className={error ? s.error: ""}
                    value={newTaskTitle}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressAddTask}/>
            <button onClick={addTaskHandler}>+
            </button>
            {error && <div className={s.error_message}>{error}</div>}
        </div>
    );
}

export default AddPanel;


// 1. function max.length in []
// math.max
// Функция принимает в параметр массив и возвращает это значение
// getMax([1,2,3,4,5]) => 5

// Функция принимает параметром массив и возвращает массив с двумя макс значениями
// getMax([1,2,3,4,5]) => [4,5]


// Функция принимает параметром массив чисел и количество max, которые надо найти и
// возвращает массив с двумя макс значениями
// getMax([1,2,3,4,5], 3) => [3,4,5]

//math.max и sort не используем !
