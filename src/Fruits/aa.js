import React, { Component } from 'react';
import './cc.css';
class Fruits extends Component {
	constructor(){
		super()
		this.state={
			className: "red"
		}
	}
	changeColor= () => {
		this.setState({className: "yellow"})
	}
	render(){
	return(
<div>
    <h1 className="header">The Fruit Show</h1>
    <ul className="listOfFruits" className="Kelele">
		<li className="one" className={this.className}> Apple </li>
		<li className="two" className="yellow"> Mango </li>
		<li className="three" className="red"> Peach </li>
		<li className="four" className="green"> Kiwi </li>
		<li className="five" className="orange"> Papaya </li>
		<li className="six" className="green"> Avocado </li>
		<li className="seven" className="yellow"> Lemon </li>
		
	</ul>


	</div>
	)
}
};

export default Fruits;

    
