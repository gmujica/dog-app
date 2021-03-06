
import React, { useState, useReducer, useEffect } from 'react'
import { dogsReducer, initialState } from './redux/reducers'
import getData from './redux/actions/dogActions.js'
import Header from './components/Header'
import Search from './components/Search'
import Acordeon from './components/Acordeon'

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Acordeon />
    </div>
  );
}

export default App;
