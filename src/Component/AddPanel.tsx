import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

type AddPanelType = {
    addTask: (title: string) => void
}

function AddPanel(props: AddPanelType) {

    const [newTaskTitle, setNewTaskTitle] = useState<string>("");
    const onChangeHandler = ( e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
    }
    const onKeyPressAddTask = ( e: KeyboardEvent<HTMLInputElement>) => {
        /*if (e.ctrlKey || e.charCode === 13) {*/
        if (e.ctrlKey || e.key === "Enter") {
            props.addTask(newTaskTitle)
            setNewTaskTitle("")
        }
    }

    const addTaskHandler = () => {
        props.addTask(newTaskTitle)
        setNewTaskTitle("")
    }


    return (
        <div>
            <input value={newTaskTitle}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressAddTask}/>
            <button onClick={addTaskHandler}>+
            </button>
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
