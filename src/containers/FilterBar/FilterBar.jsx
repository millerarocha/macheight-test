import React from 'react';

import './FilterBar.css';

import Input from '../../components/Input/Input';
import Select from '../../components/Select/Select';
import Button from '../../components/Button/Button';

const FilterBar = () => {
    const options=[
        {id:1,opt:'Meters'},
        {id:2,opt:'Inches'}
    ]
    return (
        <nav className='filter'>
            <Input
                placeholder='Type Height'
                type='number'
            />
            <Select
                options={options}
            />
            <Button/>
        </nav>
    )
}

export default FilterBar;
