import React, {ChangeEvent, useState} from 'react';

type TodoListHeaderPropsType = {
    title: string
    editTitleTodolist: ( title: string) => void
}

function TodoListName({title, ...props}: TodoListHeaderPropsType) {
    const [oldTitle, setNewTitle] = useState<string>(title);
    const [edit, setShowInput] = useState<boolean>(false);

    const onClick = () => setShowInput(!edit)
    const onBlurHandler = () => {
        props.editTitleTodolist(oldTitle)
        setShowInput(!edit)
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setNewTitle(e.currentTarget.value)

    return (
        edit
           ? <input value={oldTitle} onChange={ onChangeHandler } autoFocus onBlur={ onBlurHandler }/>
            : <h3><span onDoubleClick={ onClick } >{title}</span></h3>

    );
}

export default TodoListName;