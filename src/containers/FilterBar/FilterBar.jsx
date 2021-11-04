import React, {useContext, useState, useEffect} from 'react';

import './FilterBar.css';

import Input from '../../components/Input/Input';
import Select from '../../components/Select/Select';
import Button from '../../components/Button/Button';

import { request } from '../../utils/request';

import { AppContext } from '../../context/AppContext';

const FilterBar = () => {

    const {data,setData} = useContext(AppContext);
    const [filterData,setFilterData] = useState();
    const [value,setValue] = useState();
    const [option,setOption] = useState('Meters');

    useEffect(()=>{
        request()
        .then(res=>res.json())
        .then(data=>setFilterData(data.values))
    },[]);

    const options=[
        {id:1,opt:'Meters'},
        {id:2,opt:'Inches'}
    ]

    

    const handleFilter = ()=>{
        const array = filterData;
        let newArray = []
        if(option==='Meters'){
            newArray = array.filter(item=>item.h_meters === value);
        }else{
            newArray = array.filter(item=>item.h_in === value);
        }
        setData(newArray);
    }

    return (
        <nav className='filter'>
            <Input
                placeholder='Type Height...'
                type='number'
                onChange={(e)=>setValue(e.target.value)}
            />
            <Select
                options={options}
                onChange={(e)=>setOption(e.target.value)}
            />
            <Button
                onClick={handleFilter}
            />
        </nav>
    )
}

export default FilterBar;
