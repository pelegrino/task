class AuthService {

    login(username, password) {
        console.log(`Login: username = ${username}, password = ${password}`);

    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new AuthService();