import React from 'react';
import s from "./TodoList/TodoList.module.css";
import {FilterValuesType} from "../App";

type ButtonPropsType = {
    title: string
    onClickHandler: () => void
    filterBS: FilterValuesType
}

function Button({title, onClickHandler, filterBS}: ButtonPropsType) {
    return (
        <button className={filterBS === title ? s.active : ""}
            onClick={onClickHandler}>
            {title}
        </button>
    )
}

export default Button;