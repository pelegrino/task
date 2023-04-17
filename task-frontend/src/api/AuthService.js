import axios from "axios";
import {AUTH_ENDPOINT, JWT_TOKEN_NAME} from "../constanst"

class AuthService {

    login(username, password, onLogin) {
        
        axios
            .post(`${AUTH_ENDPOINT}/login`, { username: username, password: password })
            .then(response => {
                const jwtToken = response.headers['authorization'].replace("Bearer ", "");
                sessionStorage.setItem(JWT_TOKEN_NAME, jwtToken);
                onLogin(true);
            }).catch(error => {
                console.error(error);
                onLogin(false);
            });
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new AuthService();