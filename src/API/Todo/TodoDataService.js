import axios from 'axios'

class TodoDataService{
    retrieveAllTodos = (username) => {
        return  axios.get(`http://www.localhost:8080/users/${username}/todos`)
    }

    deleteTodo = (name, id) => {
        console.log("hello")
        return  axios.delete(`http://www.localhost:8080/users/${name}/todos/${id}`)
    }

    retrieveTodo = (name,id) => {
        console.log("Updating a new Todo")
        return  axios.get(`http://www.localhost:8080/users/${name}/todos/${id}`)
    }

    updateTodo = (name,id,todo) => {
        console.log("Updating a new Todo")
        return  axios.put(`http://www.localhost:8080/users/${name}/todos/${id}`,todo)
    }

    createTodo = (name,todo) => {
        console.log("Creating a new Todo");
        return  axios.post(`http://www.localhost:8080/users/${name}/todos/`,todo)
    }
}
export default new TodoDataService();