import React, {useEffect, useState} from 'react';
import {TodolistAPI} from "./todolist_api";

export default {
    title: 'API'
}


export const GetTodolists = () => {

    const [state, setState] = useState<any>(null);

    useEffect(() => {
        TodolistAPI.getTodolists()
            .then(data => {
                console.log(data)
                setState(data)
            })
    }, []);

    return <div>{JSON.stringify(state)}</div>
}



export const CreateTodolist = () => {

    const [state, setState] = useState<any>(null);
    const [states, setStates] = useState<any>(null);

    useEffect(() => {
        TodolistAPI.createTodolist(`OPJAT`)
            .then(data => setState(data))

    }, [states])

    return <div> {JSON.stringify(state)}</div>
}



export const DeleteTodolist = () => {

    const [state, setState] = useState<any>(null);

    useEffect(() => {

        const todolistId: string = 'eb486ff6-9cb8-4d84-a7c4-6a4407fc68f1';
        TodolistAPI.deleteTodolist(todolistId)
            .then(data => setState(data))

    }, []);

    return <div>{JSON.stringify(state)}</div>
}


export const UpdateTodolistTitle = () => {

    const [state, setState] = useState<any>(null);

    useEffect(() => {

        const todolistId: string = 'd671cecd-5ad7-46f8-9446-137614aa99c9';
        const title: string = 'HELLOOOOOOOOOOOOOOO GUYSS';
        TodolistAPI.updateNameTodolist(todolistId, title)
            .then(data => setState(data))
    }, []);

    return <div> {JSON.stringify(state)}</div>
}
