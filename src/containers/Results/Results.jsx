import React, {useContext} from 'react';

import './Results.css';

import Card from '../../components/Card/Card';
import NoResults from '../NoResults/NoResults';

import { AppContext } from '../../context/AppContext';

const Results = () => {
    const {data} = useContext(AppContext);
    return (
        <section className='results'>
            { 
            data.length?
            data.map((item,index)=>{
                return <Card
                            key={index}
                            name={`${item.first_name} ${item.last_name}`} 
                            dataMeters={item.h_meters}  
                            dataInches={item.h_in} 
                        />
            })
            :
            <NoResults/>
            }
        </section>
    )
}

export default Results;
