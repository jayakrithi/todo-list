import React, {Component} from 'react';
import './Counter.css';
import propType from 'prop-types';

class Counter extends Component{
        constructor(){
                super();
                this.state = {
                        counter :0
                }

        }
        render() {
                return (
                    <div className = "App">
                        <CounterButton by = {1} incrementMethod = {this.increment} decrementMethod = {this.decrement}/>
                        <CounterButton by = {5} incrementMethod = {this.increment} decrementMethod = {this.decrement}/>
                        <CounterButton by = {10} incrementMethod = {this.increment} decrementMethod = {this.decrement}/>
                        <span className = 'count'>{this.state.counter}</span>
                            <div> <button onClick={this.reset} className = "reset"> Reset</button></div>
                    </div>
                );
        }

        reset = ()=>{
                this.setState({counter: 0});
        }

        increment = (by) => {
                this.setState( (prevState) =>{
                        return {counter : prevState.counter + by}
                })
        }
        decrement = (by) => {
                this.setState( (prevState) =>{
                        return {counter : prevState.counter - by}
                })
        }
}

class CounterButton extends Component{
        constructor(){
                super();
        }

        render(){
              //  const style = {fontSize : "50px", padding : "15px 30px" }
        return(
            <div className = "Counter ">
                <button onClick = {() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
                <button onClick = {() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
                    {/*<span className = 'count'>{this.state.counter}</span>*/}
            </div>
        );
        }

}

CounterButton.propType = {
        by : propType.number
}
export default Counter;