import React, {ChangeEvent, useState} from 'react';
import {TextField} from "@mui/material";

type TodoListHeaderPropsType = {
    title: string
    editTitle: ( title: string) => void
}

export function RenameSpanFunction ({title, editTitle}: TodoListHeaderPropsType) {
    const [newTitle, setNewTitle] = useState<string>(title);
    const [show, setShowInput] = useState<boolean>(false);

    const onClick = () => setShowInput(!show)
    const onBlurHandler = () => {
        editTitle(newTitle)
        setShowInput(!show)
    };
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setNewTitle(e.currentTarget.value)

    return (
        show
           ? <TextField style={{width: "120px"}} color={"success"} variant={"standard"} value={newTitle} onChange={ onChangeHandler } autoFocus onBlur={ onBlurHandler }/>
            : <span onDoubleClick={ onClick } >{title}</span>

    );
}

