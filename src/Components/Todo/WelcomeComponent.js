import React, {Component} from "react";
import {Link} from "react-router-dom";
import HelloWorldService from "../../API/Todo/HelloWorldService";

class WelcomeComponent extends Component{
    constructor(props){
        super();
        this.state = {
            welcomeMessage :'',
            errorMessage : ''
        }
    }
    render(){
        return(
            <>
                <h1> Welcome !</h1>
                {this.state.errorMessage==='Something went wrong' && 
                <div>OOPS!! Something went wrong, Please Try refresh the page</div>}
                {this.state.errorMessage === '' && 
                <>
                <div className = "container">
                    Welcome {this.props.params.name}
                    You can manage your todos here <Link to= "/todos">here</Link>
                </div>
                <div className = "container">
                    Click here to get a customised Welcome Page
                    <button onClick={this.retrieveWelcomeMessage} className="btn btn-success">Get Welcome Message </button>
                </div>
                <div className = "container">
                    {this.state.welcomeMessage}
                </div>
                </>
               }
            </>
        );
    }
    retrieveWelcomeMessage = () => {
       // HelloWorldService.executedService().then(r => this.handleSuccessfulLogin(r));
       HelloWorldService.executedHelloWorldBeanPathVariableService(this.props.params.name)
       .then(r => this.handleSuccessfulLogin(r))
       .catch(error => this.handleError(error));

    }

    handleSuccessfulLogin = (response) => {
        this.setState({welcomeMessage: response.data.message});
    }

    handleError = (error) => {
        console.log(error.message);
        let errorMessage = '';
        if(error.message){
            errorMessage += error.message;
        }
        if(error.response && error.response.data){
            errorMessage += error.response.data.message;
        }

        this.setState({errorMessage: error.response.data.message});
    }
}

export default WelcomeComponent