import React from 'react';

import './Button.css';

const Button = ({
    text='Search...'
}) => {
    return (
        <>
            <button className="btn">
                {text}
            </button>
        </>
    )
}

export default Button;
