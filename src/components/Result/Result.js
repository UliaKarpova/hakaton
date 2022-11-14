import React from 'react';

import './Result.css';
import Card from '../Card/Card';
import { cardsData } from '../../utils/cardsData';



function Result ({ isFinded }) {

    const cardElements = cardsData.map((card) => {
        return (
            <li key={Math.random()} className='main-result__list-item block'>
                <Card card={card} />
            </li>
        )
    })
    return (

        <div className={isFinded ? 'main-result' : 'main-result_hidden'}>
            <div className='main-result__head block'>
                <h2 className='main-result__title'>Найдено {cardsData.length} индустриальных квартала</h2>
                <button className='main-result__reset' 
                type='button'>&#10006; сбросить</button>
            </div>
            
            <ul className='main-result__list'>
                {cardElements}
                
            </ul>
        </div>
    )
    
    
}

export default Result;