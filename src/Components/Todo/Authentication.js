import axios from "axios";

class Authentication {
    registerUserLogin(username, password){
        console.log('Authentication successful');
        sessionStorage.setItem('AuthenticatedUsername', username);
        this.setupAxiosInterceptors()
    }

    logout(){
        sessionStorage.removeItem('AuthenticatedUsername');
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem('AuthenticatedUsername')
        if(user === null) return false;
        else return true;
    }

    getLoggedInUser(){
        let user = sessionStorage.getItem('AuthenticatedUsername');
        if(user===null) return "";
        else return user;
    }

    setupAxiosInterceptors(){
        let username = "user123@email.com"
        let password = "dummy"

        let basicAuthHeader = 'Basic ' +window.btoa(username + ":" + password)
        axios.interceptors.request.use(
            (config) =>  {
                if(this.isUserLoggedIn()){
                    config.headers.authorization = basicAuthHeader
                }
                return config
            }
        )
    }
}

export default new Authentication();