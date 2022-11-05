import React from 'react';

import './Result.css';
import Card from '../Card/Card';
import { cardsData } from '../../utils/cardsData';



function Result () {

    const cardElements = cardsData.map((card) => {
        return (
            <li key={Math.random()} className='main-result__list-item'>
                <Card card={card} />
            </li>
        )
    })
    return (

        <div className='main-result'>
            <h2 className='main-result__title'>Найдено {cardsData.length} индустриальных квартала</h2>
            
            <ul className='main-result__list'>
                {cardElements}
                
            </ul>
        </div>
    )
    
    
}

export default Result;