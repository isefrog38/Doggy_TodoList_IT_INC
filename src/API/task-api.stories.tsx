import React, {useEffect, useState} from 'react';
import {TodolistAPI} from "./todolist_api";
import {TaskAPI} from "./task_api";
import {TaskTypeResponse} from "../Types/Types_Task_API";

export default {
    title: 'task_api'
}


export const GetTasks = () => {

    const [state, setState] = useState<any>(null);

    useEffect(() => {

        const todolistId: string = 'd671cecd-5ad7-46f8-9446-137614aa99c9    ';
        TaskAPI.getTasks(todolistId)
            .then(data => setState(data));

    }, []);

    return <div>{JSON.stringify(state)}</div>
}



export const CreateTask = () => {

    const [state, setState] = useState<any>(null);
    const [states, setStates] = useState<any>(null);

    useEffect(() => {

        const todolistId: string = 'd671cecd-5ad7-46f8-9446-137614aa99c9';
        const obj: TaskTypeResponse = {
            description: "Hi",
            title: "I'm Pavel",
            completed: true,
            status: 2,
            priority: 4,
            startDate: new Date,
            deadline: new Date,
        };
        TaskAPI.createTask(todolistId, obj)
            .then(data => setState(data));

    }, [state])

    return <div> {JSON.stringify(state)}</div>
}



export const DeleteTask = () => {

    const [state, setState] = useState<any>(null);

    useEffect(() => {

        const todolistId: string = 'd671cecd-5ad7-46f8-9446-137614aa99c9';
        const taskId: string = '1'
        TaskAPI.deleteTask(todolistId, taskId)
            .then(data => setState(data));

    }, []);

    return <div>{JSON.stringify(state)}</div>
}


export const UpdateTaskTitle = () => {

    const [state, setState] = useState<any>(null);

    useEffect(() => {

        const todolistId: string = 'd671cecd-5ad7-46f8-9446-137614aa99c9';
        const obj: TaskTypeResponse = {
            description: "Hi",
            title: "I'm Pavel",
            completed: true,
            status: 2,
            priority: 4,
            startDate: new Date,
            deadline: new Date,
        };
        TaskAPI.updateNameTask(todolistId, obj)
            .then(data => setState(data));

    }, []);

    return <div> {JSON.stringify(state)}</div>
}
