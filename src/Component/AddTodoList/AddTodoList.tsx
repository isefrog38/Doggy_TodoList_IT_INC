import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import s from "./AddTodoList.module.css";

export type AddTodolistType = {
    addTodolist: ( newTodolistTitle: string ) => void
}

export const AddTodolist = ({addTodolist, ...props}: AddTodolistType) => {

    const [newTodolisTitle, setNewTodolistTitle] = useState<string>("");
    const [error, setError] = useState<string | null>(null);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodolistTitle(e.currentTarget.value)
    }
    const onKeyPressAddTask = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (e.ctrlKey || e.key === "Enter") {
            addTaskHandler()
        }
    }
    const addTaskHandler = () => {
        if (newTodolisTitle.trim() !== "") {
            addTodolist(newTodolisTitle)
            setNewTodolistTitle("")
        } else {
            setError("Title is required !")
        }
    }

    return (
        <div className={s.main}>
            <div>
                <input className={error ? s.error : ""}
                       value={newTodolisTitle}
                       onChange={onChangeHandler}
                       onKeyPress={onKeyPressAddTask}/>
                <button className={s.ButtonStyle}
                        onClick={addTaskHandler}>+
                </button>
                {error && <div className={s.error_message}>{error}</div>}
            </div>
        </div>
    );
};
