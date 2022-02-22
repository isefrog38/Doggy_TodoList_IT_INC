import React from 'react';
import {Button} from "@mui/material";
import {FilterValuesType} from "../Redux-Reducers/Task-Reducer";

type ButtonPropsType = {
    title: string
    onClickHandler: () => void
    activeButton: FilterValuesType
}

function Buttons({title, onClickHandler, activeButton}: ButtonPropsType) {
    return (
        <Button
            color={activeButton === title ? "secondary" : "secondary"}
            variant={activeButton === title ? "contained" : "outlined"}
            onClick={onClickHandler}>
            {title}
        </Button>
    )
}

export default Buttons;