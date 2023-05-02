const { useState } = require("react");
const { AUTH_ENDPOINT, CREDENTIALS_NAME } = require("../constanst");
const { default: axios } = require("axios");
const { useEffect } = require("react");

export const useAuth = () => {
    const [ credentials, setCredentials ] = useState({ username: null, displayName: null, token: null });
    const [ error, setError ] = useState(null);
    const [ processing, setProcessing ] = useState(null);

    useEffect(() => {
        loadCredentials();
    }, []);

    const login = async (username, password) => {
        const loginInfo = { username: username, password: password };
        setProcessing(true);
    
        try {
            const response = await axios.post(`${AUTH_ENDPOINT}/login`, loginInfo);
            
            const token = response.headers['authorization'].replace("Bearer ", "");
            storeCredentials(token);
            setProcessing(false);

        } catch (error) {    
            console.error(error);
            setError("O login não pode ser realizado");
            setProcessing(false);
        }

    }

    const logout = () => {
        sessionStorage.removeItem(CREDENTIALS_NAME);
        setCredentials({ username: null, displayName: null, token: null });
    }

    const storeCredentials = (token) => {
        const tokenData = atob(token.split(".")[1]);
        const credentials = { username: tokenData.sub, displayName: tokenData.displayName, token: token };
        sessionStorage.setItem(CREDENTIALS_NAME, JSON.stringify(credentials));
        setCredentials(credentials);
    }

    const loadCredentials = () => {
        const storedCredentials = sessionStorage.getItem(CREDENTIALS_NAME);

            if(storedCredentials !== null) {
                setCredentials(JSON.parse(storedCredentials));
            }
    }

    const isAuthenticated = () => {
        return sessionStorage.getItem(CREDENTIALS_NAME) !== null;
    }

    return { login, logout, isAuthenticated, credentials, error, processing }
}