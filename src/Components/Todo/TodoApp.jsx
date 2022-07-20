import React, {Component} from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import withNavigation from "./WithNavigation";
import withParams from "./WithParams";

class TodoApp extends Component {
    render(){
        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        const WelcomeComponentWithParams = withParams(WelcomeComponent);
        return(
        <div className='TodoApp'>
            <Router>
                <HeaderComponent />
                <Routes>
                    <Route path="/login" element={<LoginComponentWithNavigation />} />
                    <Route path="/login" element={<LoginComponentWithNavigation />} />
                <Route path = "/welcome/:name" element = {<WelcomeComponentWithParams />} ></Route>
                    <Route path = "/todos" element = {<ListTodoComponent />} ></Route>
                <Route path = "*" element = {<ErrorComponent />}> </Route>
                </Routes>
                <FooterComponent />
            </Router>
        </div>
    );
    }
}

function ErrorComponent(){
    return <>Not Found - Error Occured</>
}

class LoginComponent extends Component{
    constructor(props){
        super(props);
        this.state =  {
            username : 'user123@email.com',
            password : '',
            hasLoginFailed : false,
            showSuccessLogin : false
        }

    }
    render(){
        return(
            <>
                {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
                {this.state.showSuccessLogin && <div>Login Successful</div>}
            userName: <input type ="text" name = "username" value = {this.state.username} onChange={this.handleChange}/>
                password: <input type ="password" name = "password" value = {this.state.password} onChange={this.handleChange}/>
                <button onClick={this.loginClicked}>Login</button>
            </>
        );
    }

    handleChange = (event) => {
        console.log(event.target.name)
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    loginClicked = () => {
        if(this.state.username === 'user123@email.com' && this.state.password === 'dummy'){
            this.props.navigate(`/welcome/${this.state.username}`)
        } else {
            this.setState({hasLoginFailed: true})
            this.setState({showSuccessLogin: false})
            console.log('Invalid');
        }
    }
}
class ListTodoComponent extends Component{
    constructor(props){
        super(props);
        this.state =
            {todos:
                    [
                        {id : 1, description : 'have roti', done : true , targetDate : new Date()},
                        {id : 2, description : 'have ramen', done : false , targetDate : new Date()},
                        {id : 3, description : 'have sushi', done : true , targetDate : new Date()}
                    ]
            }
    }
    render(){
        return(
            <div>
                <h1>List Todos</h1>
                <table>
                    <thead>
                    <tr>
                    <th> id </th>
                        <th> description </th>
                        <th> Completed </th>
                        <th> Targeted </th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.todos.map(
                            todo =>
                                <tr>
                                    <td> {todo.id}</td>
                                   <td> {todo.description}</td>
                                    <td> {todo.done.toString()}</td>
                                    <td> {todo.targetDate.toString()}</td>
                                </tr>
                                    )
                    }

                    </tbody>
                </table>
            </div>
        );
    }
}

class HeaderComponent extends Component {
    render(){
        return(
            <div>
            Header
            </div>
        );
    }
}

class FooterComponent extends Component {
    render(){
        return(
            <div>
                Footer
            </div>
        );
    }
}
class WelcomeComponent extends Component{
    render(){
        return(
            <div>
                Welcome {this.props.params.name}
                You can manage your todos here <Link to= "/todos">here</Link>
            </div>
        );
    }
}

export default TodoApp