import React, { useState } from 'react';

import './Form.css';

function Form ({ onReset, onSubmit }) {
    const [pickOut, setPickOut] = useState(true);
    const [rangeValue, setRangeValue] = useState(55);

    function onChange(event) {
        const target = event.target;
        console.log(target);
        setPickOut(!pickOut);
    }

    function rangeOnChange(event) {
        setRangeValue(event.target.value);
    }


    return (
        <form className='main-form'
        onSubmit={onSubmit}>

            <div className='main-form__radio-block block'>
                <p className='main-form__section'>инструменты</p>

                <p className='main-form__text'>{pickOut ? 'Выделение области на карте' : 'Перемещение выделенной области'}</p>
                    <label htmlFor='rectangle' 
                    className='main-form__label'>
                        <input type='radio' 
                        className='main-form__radio-input' 
                        name='choice' 
                        id='rectangle' 
                        onChange={onChange} 
                        checked={pickOut} 
                        value='rectangle' />

                        <div className='main-form__radio rectangle'/>
                    </label>

                    <label htmlFor='hand' 
                    className='main-form__label'>
                        <input type='radio' 
                        className='main-form__radio-input' 
                        name='choice' 
                        id='hand' 
                        value='hand' 
                        onChange={onChange} 
                        checked={!pickOut} />

                        <div className='main-form__radio hand' />
                    </label>
            </div>

            <div className='block'>
                <p className='main-form__section'>фильтрация</p>


                <p className='main-form__text'>Размытие области</p>

                <button type='reset' 
                className='main-form__blur-reset'>&#10006; сбросить</button>

                <span className='main-form__range-value'>{rangeValue} м</span>

                <input type='range' 
                className='main-form__range' 
                onChange={rangeOnChange} 
                step='5'/>
                <span className='main-form__range-number'>0 100м</span>

                
                <label className='main-form__text' 
                htmlFor='inclusion'>
                    <input type='checkbox' 
                    id='inclusion' 
                    name='inclusion' 
                    defaultChecked 
                    className='main-form__checkbox' />
                    Включение объектов
                </label>

                
                <label className='main-form__text' 
                htmlFor='uninclusion'>
                    <input type='checkbox' 
                    id='inclusion' 
                    name='uninclusion' 
                    className='main-form__checkbox' />
                    Невключение объектов
                </label>

                
                <label className='main-form__text' 
                htmlFor='discuss'>
                    <input type='checkbox' 
                    id='inclusion' 
                    name='discuss' 
                    className='main-form__checkbox' />
                    На обсуждении
                </label>

                <button type='submit' 
                className='main-form__submit'>&#10004; Применить все фильтры</button>
                <button type='reset' 
                className='main-form__reset'
                onClick={onReset}>&#10006; Сбросить все фильтры</button>
            </div>

        </form>
    )
}

export default Form;