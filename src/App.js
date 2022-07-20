import React, { Component } from 'react';
import logo from './logo.svg';
import FirstComponent from "./Components/examples/FirstComponent";
import {SecondComponent} from "./Components/examples/SecondComponent";
import ThirdComponent from "./Components/examples/ThirdComponent";
import Counter from "./Components/Counter/Counter";
import TodoApp from './Components/Todo/TodoApp'
import './App.css';
import './bootstrap.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                {/*<Counter></Counter>*/}
                <TodoApp />
            </div>

        )
    }
}
export class LearningComponent extends Component {
    render(){
        return(
            <div className="LearningComponent">
                Hello World
                <FirstComponent />
                <SecondComponent />
                <ThirdComponent />
            </div>
        );
    }
}


export default App;