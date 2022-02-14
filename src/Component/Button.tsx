import React from 'react';
import s from "./TodoList/TodoList.module.css";
import {FilterValuesType} from "../App";
import {Button} from "@mui/material";

type ButtonPropsType = {
    title: string
    onClickHandler: () => void
    activeButton: FilterValuesType
}

function Buttons({title, onClickHandler, activeButton}: ButtonPropsType) {
    return (
        <Button
            color={"primary"}
            variant={activeButton === title ? "contained" : "outlined"}
            onClick={onClickHandler}>
            {title}
        </Button>
    )
}

export default Buttons;