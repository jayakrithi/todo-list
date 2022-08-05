import React, {Component} from 'react'
import Authentication from "./Authentication.js";
import { Navigate } from "react-router-dom";

class AuthenticatedRoute extends Component{
    render(){
        if(Authentication.isUserLoggedIn()){
            return {...this.props.children}
        }
        //else return <Navigate to='/login' />
    }
}

export default AuthenticatedRoute