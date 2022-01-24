import React from 'react';
import s from "./TodoList/TodoList.module.css";
import {FilterValuesType} from "../App";

type ButtonPropsType = {
    title: string
    onClickHandler: () => void
    activeButton: FilterValuesType
}

function Button({title, onClickHandler, activeButton}: ButtonPropsType) {
    return (
        <button className={activeButton === title ? s.active : ""}
            onClick={onClickHandler}>
            {title}
        </button>
    )
}

export default Button;