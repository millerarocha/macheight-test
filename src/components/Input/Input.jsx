import React from 'react';

import './Input.css'

const Input = ({
    type="text",
    placeholder='Type a value...',
    onChange
}) => {
    return (
        <>
            <input 
                className='input'
                type={type}
                onChange={onChange}
                placeholder={placeholder}
            />
        </>
    )
}

export default Input
