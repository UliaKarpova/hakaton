import React from 'react';

import './SliderCard.css';
import image from '../../images/big.png';

function SliderCard ({ card }) {
    return (
        <>
            <img src={image} alt='Изображение' className='slider-card__image' />

            <h3 className='slider-card__title'>Силикатный завод</h3>
            <ul className='slider-card__list'>
                <li className='slider-card__parametr'>
                    <span className='slider-card__parametr-name'>Адрес</span>
                    <p className='slider-card__value'>{card.address}</p>
                </li>
                <li className='slider-card__parametr'>
                    <span className='slider-card__parametr-name'>Характеристики помещения</span>
                    <p className='slider-card__value'>{card.specification}</p>
                </li>
                <li className='slider-card__parametr'>
                    <span className='slider-card__parametr-name'>Количество рабочих мест</span>
                    <p className='slider-card__value'>{card.workplaces}</p>
                </li>
                <li className='slider-card__parametr'>
                    <span className='slider-card__parametr-name'>Права и обременения</span>
                    <p className='slider-card__value'>{card.rights}</p>
                </li>
                <li className='slider-card__parametr'>
                    <span className='slider-card__parametr-name'>Год постройки</span>
                    <p className='slider-card__value'>{card.year}</p>
                </li>
                <li className='slider-card__parametr'>
                    <span className='slider-card__parametr-name'>Земельный участок</span>
                    <p className='slider-card__value'>{card.land || '-'}</p>
                </li>
            </ul>

            <button type='button' className='slider-card__button'>Просмотреть полную информацию</button>
        </>
    )    
}

export default SliderCard;