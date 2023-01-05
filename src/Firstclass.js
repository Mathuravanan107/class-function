import React, { Component } from 'react'
import Secoundclass from './Secoundclass'

export class Firstclass extends Component {
    getData=(Svkarai)=>{
        console.log("Svkarai",Svkarai);
    }
  render() {
    return (
      <div>
        <h2>Mathuravanan</h2>
        <Secoundclass name="Tenkasi" getData={this.getData}/>
      </div>
    )
  }
}

export default Firstclass