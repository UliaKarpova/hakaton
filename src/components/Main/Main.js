import React from 'react';
import './Main.css';

import Form from './Form/Form';
import MapComp from './Map/MapComp';

function Main() {
  return (
    <div className='main'>
      <Form />
      <MapComp />
    </div>
  );
}

export default Main;

