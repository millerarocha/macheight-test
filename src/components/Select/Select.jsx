import React from 'react';

import './Select.css';

const Select = ({
    value='Select an option',
    options=[{id:'1',opt:'Option 1'},{id:'2',opt:'Option 2'}]
}) => {
    return (
        <>
            <select 
                className='select'
            >  
                {(options||[]).map((item)=>{
                    return <option 
                        value={item.opt}
                        key={item.id}
                    >
                        {item.opt}
                    </option>
                })}
            </select>
        </>
    )
}

export default Select
