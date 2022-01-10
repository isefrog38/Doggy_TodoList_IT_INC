import React from 'react';

type ButtonPropsType = {
    title: string
}

function Button(props: ButtonPropsType) {
    return <button>{props.title}</button>
}

export default Button;