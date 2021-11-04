import React from 'react';

import './Card.css';

const Card = ({
    name='Miller Rocha',
    dataMeters="1.73",
    dataInches="68.11"
}) => {
    return (
        <div className='card'>
            <h2 className="card__title">{name}</h2>
            <div className="card__data">
                <p className="card__text">{dataMeters} meters</p>
                <p className="card__text">{dataInches} inches</p>
            </div>

        </div>
    )
}

export default Card;
