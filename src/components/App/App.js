import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Report from '../Report/Report';

function App() {


  return (
    <div className="App">
        <Routes>
            <Route exact path='/' element={<><Header /><Main /></>} /> 
            <Route exact path='/report' element={<><Header /><Report /></>} />
        </Routes>    
    </div>
  );
}

export default App;
