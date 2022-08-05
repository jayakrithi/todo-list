import React, {Component} from "react";
import Authentication from "./Authentication";

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
            <div className="login">
                <div className = "container">
                    <h2> Login </h2>
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessLogin && <div>Login Successful</div>}
                    userName: <input type ="text" name = "username" value = {this.state.username} onChange={this.handleChange}/>
                    password: <input type ="password" name = "password" value = {this.state.password} onChange={this.handleChange}/>
                    <button className = "btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
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
            Authentication.registerUserLogin(this.state.username);
        } else {
            this.setState({hasLoginFailed: true})
            this.setState({showSuccessLogin: false})
            console.log('Invalid');
        }
    }
}

export default LoginComponent