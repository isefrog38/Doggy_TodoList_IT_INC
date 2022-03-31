import axios from "axios";
import {AxiosTodolistType, ResponseType} from "../Types/Types_Todolists_API";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1',
    withCredentials: true,
    headers: {
        'API-KEY': '46d03c13-5122-4b12-95a1-e807d8a6bece'
    }
});


export const TodolistAPI = {
    getTodolists () {
        return instance.get<Array<AxiosTodolistType>>('/todo-lists/')
            .then(response => response.data);
    },

    createTodolist(title: string) {
        return instance.post<Array<ResponseType<{item: AxiosTodolistType}>>>('/todo-lists/', {title})
            .then(response => response.data);

    },

    deleteTodolist (todolistId: string) {
        return instance.delete<Array<ResponseType>>(`/todo-list/${todolistId}`)
          .then(response => response.data)
    },

    updateNameTodolist (todolistId: string, title: string) {
        return instance.put<Array<ResponseType>>(`/todolist/${todolistId}`, {title})
            .then(response => response.data)
    },
};

