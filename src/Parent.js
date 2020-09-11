import React from 'react';
import './Parent.css';
import Child from './Child.js';
import Child2 from './Child2';

function Parent(props) {
  return (
    <div>Parent 
      <Child></Child>
      <Child2></Child2>
    </div>
  );
}

export default Parent;
