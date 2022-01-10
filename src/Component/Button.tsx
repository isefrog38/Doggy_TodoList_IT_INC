import React from 'react';

type ButtonPropsType = {
    title: string
    onClickHandler: () => void
}

function Button({
                    title,
                    onClickHandler
                }: ButtonPropsType) {
    return <button onClick={onClickHandler}>
        {title}
    </button>
}

export default Button;