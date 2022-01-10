import React from 'react';

type TodoListHeaderPropsType = {
    title: string
}
// function TodoListHeader : React.FC<TodoListPropsType> = ({title}) {return logic}
function TodoListHeader({title}: TodoListHeaderPropsType) {
    return (
        <div>
            <h3>{title}</h3>
        </div>
    );
};

export default TodoListHeader;