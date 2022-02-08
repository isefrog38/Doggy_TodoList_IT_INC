import React from 'react';
import s from "./NavigationPanel.module.css";
import {AddTodolist} from "../AddTodoList/AddTodoList";

type NavigationPanelType = {
    addTodolist: (newTodolistTitle: string) => void
}

export const NavigationPanel = (props: NavigationPanelType) => {
    return (
        <div className={s.AllNavBlock}>
            <AddTodolist addTodolist={props.addTodolist} />
        </div>
    );
};