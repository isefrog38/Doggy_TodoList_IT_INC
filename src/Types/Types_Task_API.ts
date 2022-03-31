
export type TaskTypeResponse = {
    description: string
    title: string
    completed: boolean
    status: number
    priority: number
    startDate: Date
    deadline: Date
};
export type ArrayTaskResponseType = TaskTypeResponse & {
    id: string
    todoListId: string
    order: number
    addedDate: Date
};
export type AxiosResponseType = {
    items :  ArrayTaskResponseType
};
export type ResponseType<D> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
};
