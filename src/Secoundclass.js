import React, { Component } from 'react'

export class Secoundclass extends Component {
  render() {
    return (
      <div>
        {this.props.name}
        <button onClick={()=> this.props.getData("data")}>Click</button>
    </div>
    )
  }
}

export default Secoundclass