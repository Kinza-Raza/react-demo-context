import React from 'react';
import valueContext from './valueContext';
//import './App.css';

function Child() {
  
  let val = React.useContext(valueContext);
  
  return (
    <div> Child number: {val[0]}
    <br></br>
    <button onClick = { ()=> {val[1](++val[0])} }>Increase Number</button>
    </div>
  );
}

export default Child;