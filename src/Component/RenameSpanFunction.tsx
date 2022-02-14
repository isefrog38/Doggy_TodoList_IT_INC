import React, {ChangeEvent, useState} from 'react';
import {TextField} from "@mui/material";

type TodoListHeaderPropsType = {
    title: string
    editTitleTodolist: ( title: string) => void
}

export function RenameSpanFunction ({title, ...props}: TodoListHeaderPropsType) {
    const [newTitle, setNewTitle] = useState<string>(title);
    const [edit, setShowInput] = useState<boolean>(false);

    const onClick = () => setShowInput(!edit)
    const onBlurHandler = () => {
        props.editTitleTodolist(newTitle)
        setShowInput(!edit)
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setNewTitle(e.currentTarget.value)

    return (
        edit
           ? <TextField variant={"standard"} value={newTitle} onChange={ onChangeHandler } autoFocus onBlur={ onBlurHandler }/>
            : <span onDoubleClick={ onClick } >{title}</span>

    );
}

