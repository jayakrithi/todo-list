import React, {Component} from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import withNavigation from "./WithNavigation";
import withParams from "./WithParams";
import WithNavigation from "./WithNavigation";
import Authentication from "./Authentication.js";
import AuthenticatedRoute from "./AuthenticatedRoute.js";
import LoginComponent from "./LoginComponent";
import ListTodoComponent from "./ListTodoComponent";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import WelcomeComponent from "./WelcomeComponent";
import LogoutComponent from "./LogoutComponent";
import ErrorComponent from "./ErrorComponent";
import TodoComponent from "./TodoComponent.jsx"
class TodoApp extends Component {
    render(){
        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        const WelcomeComponentWithParams = withParams(WelcomeComponent);
        const LogoutComponentWithNavigation = WithNavigation(LogoutComponent);
        const HeaderComponentWithNavigation = WithNavigation(HeaderComponent);
        const ListTodosComponentWithNavigation = withNavigation(ListTodoComponent);
        const TodoComponentWithParamsAndNavigation = withParams(withNavigation(TodoComponent));

        return(
        <div className='TodoApp'>
            <Router>
                <HeaderComponentWithNavigation />
                <Routes>
                    <Route path="/login" element={<LoginComponentWithNavigation />} />
                    <Route path = "/welcome/:name" element = {<WelcomeComponentWithParams/>} ></Route>
                    <Route path = "/todos/:id" element={<TodoComponentWithParamsAndNavigation/>}/>
                    <Route path="/todos/" element={<ListTodosComponentWithNavigation />} />
                    <Route path = "/logout" element = {<LogoutComponentWithNavigation />} ></Route>
                <Route path = "*" element = {<ErrorComponent />}> </Route>
                </Routes>
                <FooterComponent />
            </Router>
        </div>
    );
    }
}

export default TodoApp