import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import s from "./AddTodoList.module.css";
import {IconButton, TextField} from "@mui/material";
import {AddBoxTwoTone} from "@mui/icons-material";

export type AddTodolistType = {
    addTodolist: (newTodolistTitle: string) => void
}

export const AddTodolist = React.memo(({addTodolist, ...props}: AddTodolistType) => {

    const [newTodolistTitle, setNewTodolistTitle] = useState<string>("");
    const [error, setError] = useState<string | null>(null);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodolistTitle(e.currentTarget.value)
    }
    const onKeyPressAddTodo = (e: KeyboardEvent<HTMLInputElement>) => {
        if (error !== null) return setError(null)
        if (e.ctrlKey || e.key === "Enter") {
            addTaskHandler()
        }
    }
    const addTaskHandler = () => {
        if (newTodolistTitle.trim() !== "") {
            addTodolist(newTodolistTitle)
            setNewTodolistTitle("")
        } else {
            setError("Title is required !")
        }
    }

    return (
        <div className={s.main}>
            <div>
                <TextField
                    size={"small"}
                    helperText={error}
                    color={"success"}
                    error={!!error}
                    variant={"standard"}
                    label={"Add Name to Todolist"}
                    id={"outlined-basic"}
                    value={newTodolistTitle}
                    onChange={onChangeHandler}
                    onKeyPress={onKeyPressAddTodo}
                />
                <IconButton
                    onClick={addTaskHandler}>
                    <AddBoxTwoTone/>
                </IconButton>
            </div>
        </div>
    );
});
