import React from 'react';

import './Main.css';

import Form from '../Form/Form';
import Result from '../Result/Result';

function Main() {
    return (
        <div className='main-container'>
            <Form />
            <Result />
        </div>
    )
}

export default Main;