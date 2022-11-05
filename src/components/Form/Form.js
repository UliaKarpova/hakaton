import React from 'react';

import './Form.css';

function Form () {
    return (
        <form className='main-form'>

            <p className='main-form__text'>Выделение области на карте</p>

            <div className='main-form__radio-block'>
                <label htmlFor='rectangle' className='main-form__label'>
                    <input type='radio' className='main-form__radio-input' name='choice' id='rectangle' defaultChecked value='rectangle' />

                    <div className='main-form__radio rectangle'/>
                </label>

                <label htmlFor='hand' className='main-form__label'>
                    <input type='radio' className='main-form__radio-input' name='choice' id='hand' value='hand' />

                    <div className='main-form__radio hand' />
                </label>
            </div>

            <p className='main-form__text'>Размытие области</p>

            <button type='reset' className='main-form__blur-reset'>&#10006; сбросить</button>

            <span className='main-form__range-value'>55 м</span>

            <input type='range' className='main-form__range'step='5'/>
            <span className='main-form__range-number'>0 100м</span>

            
            <label className='main-form__text' htmlFor='inclusion'>
                <input type='checkbox' id='inclusion' name='inclusion' defaultChecked className='main-form__checkbox' />
                Включение объектов
            </label>

            
            <label className='main-form__text' htmlFor='uninclusion'>
                <input type='checkbox' id='inclusion' name='uninclusion' className='main-form__checkbox' />
                Невключение объектов
            </label>

            
            <label className='main-form__text' htmlFor='discuss'>
                <input type='checkbox' id='inclusion' name='discuss' className='main-form__checkbox' />
                На обсуждении
            </label>

            <button type='submit' className='main-form__submit'>&#10004; Применить все фильтры</button>
            <button type='reset' className='main-form__reset'>&#10006; Сбросить все фильтры</button>

        </form>
    )
}

export default Form;