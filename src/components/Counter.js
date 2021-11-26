import React, { Component } from 'react'
import './Counter.css'
 
class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 0 
        }
        
    }

    getState = (e) => {
        this.setState({value: e.target.value})
    }

    incrementCounter = () => {
        this.setState({value: parseInt(this.state.value) + 1})
    }

    decrementCounter = () => {
        this.setState({value: parseInt(this.state.value) - 1})
    }

    
    
    render() {
        return (
            <div>
                <button className="counter plus" onClick={this.incrementCounter}> +</button>
                <button className="counter minus" onClick={this.decrementCounter}>-</button>
                <input type="text" onChange={this.getState} value={this.state.value} placeholder="Type a Number " />

            </div>
        )
    }
}

export default Counter;
