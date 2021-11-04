import React, {useState,useEffect,useContext} from 'react';

import './NoResults.css';

import emptyimg from '../../assets/images/illustration-empty.svg';

import Button from '../../components/Button/Button';
import { request } from '../../utils/request';

import { AppContext } from '../../context/AppContext';

const NoResults = () => {
    const {setData} = useContext(AppContext);
    const [allData,setAllData] = useState([]);

    useEffect(()=>{
        request()
        .then(res=>res.json())
        .then(data=>setAllData(data.values))
    },[]);

    const handleAllData = () =>{
        setData(allData)
    }

    return (
        <div className='no-results'>
            <img src={emptyimg} alt="No results" className="no-results__img"/>
            <h3 className="no-results__title">There is no results.</h3>
            <p className="no-results__text">Hmmm, we're not getting any results. Try another search.</p>
            <Button
                text='See all data'
                onClick={handleAllData}
            />
        </div>
    )
}

export default NoResults
