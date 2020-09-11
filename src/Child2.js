import React from 'react';
import numberReducer from './numberReducer';
import valueContext from './valueContext';
//import './App.css';

function Child2() {
  
let [state, dispatch] = React.useReducer(numberReducer,52);

  return (
    <div> Child 2: {state}
    <br></br>
    <button onClick={ ()=> { dispatch({type:"Increment", value:10}); } }>INCREMENT</button>
    <button onClick={ ()=> { dispatch({type:"Decrement"}); } }>DECREMENT</button>
    <button onClick={ ()=> { dispatch({type:"Double"}); } }>DOUBLE</button>

    </div>
  );
}

export default Child2;