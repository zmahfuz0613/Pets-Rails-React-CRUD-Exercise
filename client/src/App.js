import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import CatsContainer from './components/CatsContainer';
import DogsContainer from './components/DogsContainer';
import Header from './components/Header';

function App() {

  return (
    <div className="App">
      <Header />
      <Route path="/cats" component={CatsContainer} />
      <Route path="/dogs" component={DogsContainer} />
    </div>
  );
}

export default App;
