import React from 'react';
import './Parent.css';
import Child from './Child.js';

function Parent(props) {
  return (
    <div>Parent 
      <Child></Child>
    </div>
  );
}

export default Parent;
