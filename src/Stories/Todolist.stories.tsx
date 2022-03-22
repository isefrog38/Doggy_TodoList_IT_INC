import React from 'react';
import {TodoList} from "../Component/TodoList/TodoList";
import {Provider, useSelector} from "react-redux";
import {store, StoreType} from "../Redux-Reducers/store-redux";
import {TodoListsType} from "../Redux-Reducers/Todolist-Reducer";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
    title: "Big Component/Todolist",
    component: TodoList,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        onClickHandler: {action: 'clicked'},
    },
    decorators: [story => <Provider store={store}>
        <div style={{padding: '3rem'}}>{story()}</div></Provider>
    ],
} as ComponentMeta<typeof TodoList>;


const todoLists = useSelector<StoreType, TodoListsType[]>(state => state.todolistReducer);

const Template: ComponentStory<typeof TodoList> = (args) => <Todolist {...args}/>;



export const Todolist = Template.bind({});
Todolist.args = {

}