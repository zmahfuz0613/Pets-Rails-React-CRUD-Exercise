import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import CatsContainer from './components/CatsContainer';
import Header from './components/Header';

function App() {

  return (
    <div className="App">
      <Header />
      <Route path="/cats" component={CatsContainer} />
    </div>
  );
}

export default App;
