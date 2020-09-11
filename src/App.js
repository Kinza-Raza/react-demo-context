import React from 'react';
import './Parent.css';
import Parent from './Parent.js';
import Child from './Child.js';

function App(props) {

    let [number, setNumber] = React.useState(45);
  return (
    <div> App 
      <Parent num={number}></Parent>
      <button onClick={ ()=> {setNumber(++number)} }>Increase number</button>
    </div>
  );
}

export default App;