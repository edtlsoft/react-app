import React from 'react';
import './App.css';

import HelloWorld from './HelloWorld';


function App() {
  return (
    <div className="App">
      This is my component
      <HelloWorld texto="Hello World!" />
      <HelloWorld texto="Hello Continent!" />
      <HelloWorld texto="Hello Country!" />
    </div>
  );
}

export default App;
