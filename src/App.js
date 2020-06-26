import React from 'react';
//import HelloWorld from './HelloWorld';
import './App.css';

// function HelloWorld(props) {
//   console.log(props)
//   return (
//     <div id="hello-world">{ props.texto }</div>
//   )
// }

class HelloWorld extends React.Component {
  state = {
    show: true
  }

  toggleShow() {
    this.setState({show: !this.state.show})
  }

  render() {
    if( !this.state.show ) {
      return (
        <h1>
          There are not elements to show
          <button onClick={() => this.toggleShow()}>Toggle Show</button>
        </h1>
      )
    }

    return (
      <div id="hello-world">
        { this.props.texto }
        <button onClick={() => this.toggleShow()}>Toggle Show</button>
      </div>
    )
  }
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
