
import React, { useState, useReducer, useEffect } from 'react'
import { dogsReducer, initialState } from './redux/reducers'
import getData from './redux/actions/dogActions.js'
import Header from './components/Header'
import Search from './components/Search'
import Acordeon from './components/Acordeon'

function App() {
  const [{dogs, loading}, dispatch] = useReducer(dogsReducer, initialState)
  console.log(dogs);

  useEffect(() => {
    getData(dispatch)
  }, [])

  return (
    <div className="App">
      <Header />
      <Search />
      <select name="dogs" id="dog">
        {Object.keys(dogs).map(i => {
          return <option value={i}>{i}</option>
        })}
      </select>
      <Acordeon />
    </div>
  );
}

export default App;
