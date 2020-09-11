import React from 'react';
import valueContext from './valueContext';
//import './App.css';

function Child() {
  
  let val = React.useContext(valueContext);
  
  return (
    <div> Child number: {val}</div>
  );
}

export default Child;