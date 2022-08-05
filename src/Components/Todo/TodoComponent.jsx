import React , {Component} from "react";
import withParams from "./WithParams";
import withNavigation from "./WithNavigation";
import TodoDataService from "../../API/Todo/TodoDataService";
import moment from 'moment'
import {Field, Form, Formik, ErrorMessage} from 'formik'
import Authentication from "./Authentication";

class TodoComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            id: this.props.params.id,
            description: '',
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }
    }

    onSubmit= (values) => {
        let username = Authentication.getLoggedInUser();
        if(this.state.id === -1){
        TodoDataService.createTodo(username, {
            id : this.state.id,
            description: values.description,
            targetDate: values.targetDate
        })
       } else 
       {
        TodoDataService.updateTodo(username, this.state.id, {
            id : this.state.id,
            description: values.description,
            targetDate: values.targetDate
        })
       }
    }

    validate = (values)=>{
        let errors = {}
        if(!values.description){
            errors = {description : 'Should have a Description field'}
        } else if(values.description.length < 5){
            errors = {description : 'Should have a Description with atleast 5 characters'}
        }

        if(!moment(values.targetDate).isValid()){
            errors.targetDate = 'Enter a Valid Date'
        } 
        return errors;
    }

    componentDidMount(){
        if(this.state.id === -1){
            return;
        }
        let username = Authentication.getLoggedInUser();
        TodoDataService.retrieveTodo(username, this.state.id)
        .then(response => 
            this.setState({
                description : response.data.description,
                targetDate: moment(response.data.targetDate).format('YYYY-MM-DD')
            }))
    }

    render(){
    let {description,targetDate} = this.state;
        return(
        <div>
            <h1>Todo Update</h1>
            <div className = "container">
                <Formik
                  initialValues = {{description,targetDate}}
                   onSubmit = {this.onSubmit} 
                   validateOnChange = {false}
                   validateOnBlur = {false}
                   validate = {this.validate}
                   enableReinitialize = {true}
                   >
                    {(props) => (
                             <Form>
                                <ErrorMessage name = "targetDate" component = "div" className = "alert-alert-warning "/>
                                <ErrorMessage name = "description" component = "div" className = "alert-alert-warning "/>
                                <fieldset className = "form-group">
                                    <label>description</label>
                                    <Field className = "form-group" type = "text" name = "description"></Field>
                                </fieldset>
                                <fieldset className = "form-group">
                                    <label>Date</label>
                                    <Field className = "form-group" type = "text" name = "targetDate"></Field>
                                </fieldset>
                                <button className = "btn btn-sucess" type= "submit">Save</button>
                             </Form>

                    )
                    }
                </Formik>
            </div>
            <div>Todo Component for ID =  {this.state.Componentid} </div>
        </div>
        );
    }
    
}

export default TodoComponent;