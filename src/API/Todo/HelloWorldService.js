import axios from 'axios'

class HelloWorldService {
    executedService = () => {
        return  axios.get("http://localhost:8080/hello-world")
    }
    executedHelloWorldBeanPathVariableService = (name) => {
        let username = "user123@email.com"
        let password = "dummy"

        let basicAuthHeader = 'Basic '+window.btoa(username + ":" + password); 
        return  axios.get(`http://localhost:8080/hello-world-bean/path-variable/${name}`, 
        {
            headers : {
                Authorization : basicAuthHeader     
            }
        }
        
        )
    }
    
}

export default new HelloWorldService();