import React, {useCallback} from 'react';
import {changeFilterAC} from "../../Redux-Reducers/Todolist-Reducer";
import {useDispatch} from "react-redux";
import {FilterValuesType} from "../../Redux-Reducers/Task-Reducer";
import {CleanButton} from "./Button";

type ButtonsType = {
    todolistId: string
    filterBS: FilterValuesType
}

export const Buttons = ({filterBS, todolistId}: ButtonsType) => {

    const dispatch = useDispatch();

    const onAllClickHandler = useCallback(() => dispatch(changeFilterAC(todolistId, 'All')),[dispatch, todolistId]);
    const onActiveClickHandler = useCallback(() => dispatch(changeFilterAC(todolistId, 'Active')),[dispatch, todolistId]);
    const onCompletedClickHandler = useCallback(() => dispatch(changeFilterAC(todolistId, 'Completed')),[dispatch, todolistId]);


    return (
        <div>
            <CleanButton
                activeButton={filterBS}
                onClickHandler={onAllClickHandler}
                title={'All'}
            />
            <CleanButton
                activeButton={filterBS}
                onClickHandler={onActiveClickHandler}
                title={'Active'}
            />
            <CleanButton
                activeButton={filterBS}
                onClickHandler={onCompletedClickHandler}
                title={'Completed'}
            />
        </div>
    );
};