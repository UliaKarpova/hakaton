import React from 'react';

import './Card.css';

function Card ({ card }) {
    return (
        <>
            <div className='card__header'>
                <h2 className='card__title'>{card.name}</h2>

                <button type='button' className='card__button'>Перейти</button>
            </div>

            <ul className='card__list'>
                <li className='card__parametr'>
                    <span className='card__parametr-name'>Параметр 1</span>
                    <p className='card__value'>{card.parametr1}</p>
                </li>
                <li className='card__parametr'>
                    <span className='card__parametr-name'>Адрес</span>
                    <p className='card__value'>{card.address}</p>
                </li>
                <li className='card__parametr'>
                    <span className='card__parametr-name'>Параметр 2</span>
                    <p className='card__value'>{card.parametr2}</p>
                </li>
                <li className='card__parametr'>
                    <span className='card__parametr-name'>Параметр 3</span>
                    <p className='card__value'>{card.parametr3}</p>
                </li>
                <li className='card__parametr'>
                    <span className='card__parametr-name'>Год постройки</span>
                    <p className='card__value'>{card.year}</p>
                </li>
            </ul>
        </>
    )    
}

export default Card;