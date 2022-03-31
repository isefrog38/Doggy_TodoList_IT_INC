
export type AxiosTodolistType = {
    id: string
    addedDate: string
    order: number
    title: string
};
export type ResponseType<D = {} > = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
};