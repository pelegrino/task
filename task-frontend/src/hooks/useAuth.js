const { useState } = require("react");
const { AUTH_ENDPOINT, CREDENTIALS_NAME } = require("../constanst");
const { default: axios } = require("axios");

const useAuth = () => {
    const [ credentials, setCredentials ] = useState({ username: null, displayName: null, token: null });
    const [ error, setError ] = useState(null);

    const login = (username, password) => {
        const loginInfo = { username: username, password: password };
        axios
            .post(`${AUTH_ENDPOINT}/login`, loginInfo)
            .then(response => {
                const token = response.headers['authorization'].replace("Bearer ", "");
                storeCredentials(token);

            }).catch(error => {
                console.error(error);
                setError("O login não pode ser realizado");
            });
    }

    const storeCredentials = (token) => {
        const tokenData = atob(token.split(".")[1]);
        const credentials = { username: tokenData.sub, displayName: tokenData.displayName, token: token };
        sessionStorage.setItem(CREDENTIALS_NAME, JSON.stringify(credentials));
        setCredentials(credentials);
    }
}