import React, {useContext, useState} from 'react';

import './FilterBar.css';

import Input from '../../components/Input/Input';
import Select from '../../components/Select/Select';
import Button from '../../components/Button/Button';

import { AppContext } from '../../context/AppContext';

const FilterBar = () => {

    const {data,setData} = useContext(AppContext);
    const [value,setValue] = useState();
    const [option,setOption] = useState('Meters');

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
