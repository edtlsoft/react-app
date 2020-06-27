import React from 'react'

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

export default HelloWorld