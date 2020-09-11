import React from 'react';
import './Parent.css';
import Parent from './Parent.js';
import Child from './Child.js';
import valueContext from './valueContext';

function App(props) {

    let val = React.useState(45);
  return (
    <valueContext.Provider value={val}>
      <div> App 
      <Parent></Parent>
    </div>
    </valueContext.Provider>
    
  );
}

export default App;