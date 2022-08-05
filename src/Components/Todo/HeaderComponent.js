import React, {Component} from "react";
import Authentication from "./Authentication";
import {Link} from "react-router-dom";

class HeaderComponent extends Component {
    render(){
        const checkUserAuthStatus = Authentication.isUserLoggedIn();
        console.log(checkUserAuthStatus);
        return(
            <header>
                <nav className="navbar navbar-expand md navbar-dark bg-dark">
                    <div className="brand-name"> <a href="https://www.todo-app-byKrithi.com">TODO</a></div>
                    <ul className="navbar-nav">
                        {checkUserAuthStatus && <li><Link className="nav-link" to="/welcome">Home</Link></li>}
                        {checkUserAuthStatus && <li><Link className="nav-link" to="/todos">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!checkUserAuthStatus && <li><Link className="nav-link" to="/login">Login </Link></li>}
                        {checkUserAuthStatus && <li><Link className="nav-link" to="/logout" onClick={Authentication.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        );
    }
}

export default HeaderComponent