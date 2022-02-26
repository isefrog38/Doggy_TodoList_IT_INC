import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {AddBoxTwoTone} from "@mui/icons-material";
import {IconButton, TextField} from "@mui/material";


type AddPanelType = {
    id: string
    addTask: (todolistId: string, title: string) => void
}

export const AddPanel = React.memo((props: AddPanelType) => {

    const [newTaskTitle, setNewTaskTitle] = useState<string>("");
    const [error, setError] = useState<string | null>(null);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
    }
    const onKeyPressAddTask = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
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
            <TextField
                size={"small"}
                color={"success"}
                helperText={error}
                error={!!error}
                variant={"standard"}
                label={"Name of your task"}
                id={"outlined-basic"}
                value={newTaskTitle}
                onChange={onChangeHandler}
                onKeyPress={onKeyPressAddTask}/>
            <IconButton
                onClick={addTaskHandler}>
                <AddBoxTwoTone />
            </IconButton>
        </div>
    );
})



