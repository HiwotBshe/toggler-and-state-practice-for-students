import React, { Component } from 'react'
import Fruits from './Fruits/aa'

export class Sub extends Component {
        constructor(){
            super()
            this.state={
                val: 0,
                asay: false
            }
        }
        add= () => {
          this.setState({
           val: this.state.val +1
          })
        }
        sub= () => {
            this.setState({
             val: this.state.val -1
            })
          }
          showHide= () => {
            this.setState({
            on: this.state.asay= !this.state.asay
            })
          }
    render() {
        return (
            <div>
                {/* <h1>{this.state.val}</h1> */}
             {/* <button type="button" class="btn btn-dark"  onClick={this.add}>Tsedi</button>
             <button type="button" class="btn btn-dark"  onClick={this.sub}>Tsedineg</button> */}
             
             
             {this.state.asay && <Fruits/> }
             <button type="button" class="btn btn-dark"  onClick={this.showHide}>Tsedi</button>
            
            </div>

        )
    }
}

export default Sub;
