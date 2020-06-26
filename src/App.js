import React from 'react';
//import HelloWorld from './HelloWorld';
import './App.css';

function HelloWorld(props) {
  console.log(props)
  return (
    <div id="hello-world">{ props.texto }</div>
  )
}

function App() {
  return (
    <div className="App">
      This is my component
      <HelloWorld id="uno" texto="Hello World!" />
      <HelloWorld texto="Hello Continent!" />
      <HelloWorld texto="Hello Country!" />
    </div>
  );
}

export default App;
