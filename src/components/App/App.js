import React from 'react';
/*import { Route, Switch, Routes } from 'react-router-dom';*/
import { MapProvider } from '../../utils/MapProvider/Provider';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';

function App() {



  return (
    <div className="App">
      <MapProvider >
          <Header />
          <Main />
      </MapProvider>
    </div>
  );
}

export default App;
