import React from 'react';
import { Link } from 'react-router-dom';

import './Card.css';

function Card ({ card }) {
    return (
        <>
            <div className='card__header'>
                <h2 className='card__title'>{card.name}</h2>

                <Link to='/report' className='card__go'>Перейти</Link>
            </div>

            <ul className='card__list'>
                <li className='card__parametr'>
                    <span className='card__parametr-name'>Адрес</span>
                    <p className='card__value'>{card.address}</p>
                </li>
                <li className='card__parametr'>
                    <span className='card__parametr-name'>Характеристики помещения</span>
                    <p className='card__value'>{card.specification}</p>
                </li>
                <li className='card__parametr'>
                    <span className='card__parametr-name'>Количество рабочих мест</span>
                    <p className='card__value'>{card.workplaces}</p>
                </li>
                <li className='card__parametr'>
                    <span className='card__parametr-name'>Права и обременения</span>
                    <p className='card__value'>{card.rights}</p>
                </li>
                <li className='card__parametr'>
                    <span className='card__parametr-name'>Год постройки</span>
                    <p className='card__value'>{card.year}</p>
                </li>
                <li className='card__parametr'>
                    <span className='card__parametr-name'>Земельный участок</span>
                    <p className='card__value'>{card.land || '-'}</p>
                </li>
            </ul>

            <button type='button' className='card__button'>&#10010; Добавить критерий</button>
        </>
    )    
}

export default Card;