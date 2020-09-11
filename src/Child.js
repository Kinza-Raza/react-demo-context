import React from 'react';
import valueContext from './valueContext.js';
//import './App.css';

function Child(props) {
    
    let val = React.useContext(valueContext);
    
  return (
    <div> Child number: {val}</div>
  );
}

export default Child;