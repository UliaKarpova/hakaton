import React, { useState } from 'react';

import './Main.css';

import Form from '../Form/Form';
import MapComp from './Map/MapComp';
import Result from '../Result/Result';

function Main() {
    const [isFinded, setIsFinded] = useState(false);

    function onSubmit(event) {
        event.preventDefault();
        setIsFinded(true);
    }

    function onReset(event) {
        event.preventDefault();
        setIsFinded(false);
    }

    return (
        <div className='main-container'>
            
            <MapComp />

            <Form onReset={onReset} 
            onSubmit={onSubmit} />
            
            
            <Result isFinded={isFinded} />
        </div>
    )
}

export default Main;

