
import react, { useState, useReducer, useEffect } from 'react'
import { dogsReducer, initialState } from './redux/reducers'
import getData from './redux/actions/dogActions.js'

function App() {
  const [{dogs, loading}, dispatch] = useReducer(dogsReducer, initialState)
  console.log(dogs);

  useEffect(() => {
    getData(dispatch)
  }, [])

  return (
    <div className="App">
      <select name="dogs" id="dog">
        {Object.keys(dogs).map(i => {
          return <option value={i}>{i}</option>
        })}
      </select>
    </div>
  );
}

export default App;
