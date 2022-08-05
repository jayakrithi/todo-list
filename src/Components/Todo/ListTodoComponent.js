import React, {Component} from "react";
import TodoDataService from "../../API/Todo/TodoDataService";
import Authentication from "./Authentication";
import moment from 'moment';
class ListTodoComponent extends Component{
    constructor(props){
        super(props);
        this.state =
            {todos:[],
             message: ''
            }

    }

    componentDidMount(){
        this.refreshPage();
    }

    refreshPage=() => {
        let username = Authentication.getLoggedInUser();
        TodoDataService.retrieveAllTodos(username)
        .then(response => {
            this.setState({
                todos: response.data
            })
            this.refreshPage();
        })
    }


    updateTodoClick= (id) => {
        console.log('update ' + id)
        this.props.navigate(`/todos/${id}`)
    }

    deleteTodoClick=(id)=>{
        let username = Authentication.getLoggedInUser();
      //  console.log(id + " " + username);
      TodoDataService.deleteTodo(username,id).then(
        response => {
            this.setState({
                message : `Delete todo ${id} successful`
            })
        }
      )
    }

    addTodoClicked = () => {
        console.log("Adding a new one");
        this.props.navigate(`/todos/-1`);  
    }

    render(){
        return(
            <div>
                <h1>List Todos</h1>
                {this.state.message && <div classsName = 'alert alert-success'>{this.state.message}</div>}
                <div className = "container">
                <div className = "btn btn-success" onClick={this.addTodoClicked}>Add</div>
                    <table className = "table">
                        <thead>
                        <tr>
                            <th> description </th>
                            <th> Completed </th>
                            <th> Targeted </th>
                            <th> Delete </th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.todos.map(
                            todo =>
                                <tr>
                                    <td> {todo.id}</td>
                                    <td> {todo.description}</td>
                                    <td> {todo.done.toString()}</td>
                                    <td> {moment(todo.targetDate).format('YYYY-MM-DD')}</td>
                                    <td><button className = "btn btn-warning" onClick={() => this.deleteTodoClick(todo.id)}>Delete</button></td>
                                    <td><button className = "btn btn-success" onClick={() => this.updateTodoClick(todo.id)}>Update</button></td>                                   
                                </tr>
                        )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListTodoComponent