import axios, {AxiosResponse} from "axios";
import {AxiosResponseType, ResponseType, TaskTypeResponse} from "../Types/Types_Task_API";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1',
    withCredentials: true,
    headers: {
        'API-KEY': '46d03c13-5122-4b12-95a1-e807d8a6bece'
    }
});

export const TaskAPI = {
    getTasks (todolistId: string) {
        return instance.get<Array<AxiosResponseType>>( `/todo-lists/${todolistId}/tasks`)
            .then(response => response.data);
    },

    createTask (todolistId: string, obj: TaskTypeResponse) {
        return instance.post<any, AxiosResponse<ResponseType<AxiosResponseType>, TaskTypeResponse>>(`/todo-lists/${todolistId}/tasks`, {obj})        ////    good tipisation
            .then(response => {
                if(response.data.resultCode === 0) {
                    response.data
                }});

    },

    deleteTask (todolistId: string, taskId: string) {
        return instance.delete<ResponseType< {} >>(`/todo-list/${todolistId}/tasks/${taskId}`)
            .then(response => {
                if(response.data.resultCode === 0) {
                    response.data
                }});
    },

    updateNameTask (todolistId: string, obj: TaskTypeResponse) {
        return instance.put<any, AxiosResponse<ResponseType<AxiosResponseType>, TaskTypeResponse>>(`/todolist/${todolistId}`, {obj})
            .then(response => response.data);
    },
};
