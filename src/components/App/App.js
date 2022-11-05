import React from 'react';
/*import { Route, Switch, Routes } from 'react-router-dom';*/

import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Report from '../Report/Report';

function App() {
  return (
    <div className="App">

          <Header />
          <Main />
          <Report />
      
    </div>
  );
}

export default App;
