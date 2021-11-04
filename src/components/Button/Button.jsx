import React from 'react';

import './Button.css';

const Button = ({
    text='Search...',
    onClick
}) => {
    return (
        <>
            <button 
                className="btn"
                onClick={onClick}
            >
                {text}
            </button>
        </>
    )
}

export default Button;
