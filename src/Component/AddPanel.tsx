import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

type AddPanelType = {
    addTask: (title: string) => void
}

function AddPanel(props: AddPanelType) {

    const [newTaskTitle, setNewTaskTitle] = useState("");
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.ctrlKey && true || e.charCode === 13) {
            props.addTask(newTaskTitle)
            setNewTaskTitle("")
        }
    }
    const addTask = () => {
        props.addTask(newTaskTitle)
        setNewTaskTitle("")
    }


    return (
        <div>
            <input value={newTaskTitle}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}/>
            <button onClick={addTask}>+
            </button>
        </div>
    );
}

export default AddPanel;