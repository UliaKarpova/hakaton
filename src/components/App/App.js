import React from 'react';
import { MapProvider } from '../../utils/MapProvider/Provider';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Report from '../Report/Report';

function App() {
  return (
    <div className="App">
      <MapProvider>

        <Routes>
          <Route exact path='/' element={<><Header /><Main /></>} />
          <Route exact path='/report' element={<><Header /><Report /></>} />
        </Routes>

      </MapProvider>

    </div>
  );
}

export default App;
