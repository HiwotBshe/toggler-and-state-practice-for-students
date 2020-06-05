import React, { Component } from 'react'

 class Add extends Component {
     constructor(){
         super()
         this.state={
            num: 5,
            on : false
         }
     }
     incNum = () => {
        this.setState({num: this.state.num +1});
      }
      decNum = () => {
        this.setState({num: this.state.num -1});
      }
      showHide = () => {
          this.setState({
              on: !this.state.on
          })
      }
  
    render() {
        return (
            <div>
                {<h1>{this.state.num}</h1> }
                <button  className="btn btn-primary" onClick={this.incNum}>ADD</button> 
                <button  className="btn btn-primary" onClick={this.decNum}>SUB</button> 
                {/* {this.state.on && <h1>hey</h1>} */}
                {/* <button  className="btn btn-primary" onClick={this.showHide}>SUB</button> */}

            </div>
        )
    }
}

export default Add
