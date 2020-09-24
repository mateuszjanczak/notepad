import {IToken} from "../Interfaces/IToken";

class AuthService {

    url = "http://localhost:8080/auth";

    registerAccount(username: string, password: string, email: string): Promise<Response> {
        return fetch(`${this.url}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password,
                email
            }),
        }).then(res => {
            if (!res.ok) throw res;
            return res;
        });
    }


    executeJwtAuthenticationService(username: string, password: string): Promise<IToken> {
        return fetch(`${this.url}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password
            }),
        }).then(res => {
            if (!res.ok) throw res;
            return res.json();
        });
    }

    registerSuccessfulLoginForJwt(username: string, token: string) {
        sessionStorage.setItem('authenticatedUser', username);
        sessionStorage.setItem('jwtToken', token);
    }

    getHeaders(): string {
        return 'Bearer ' + sessionStorage.getItem('jwtToken') || '';
    }

    isLogged(): boolean {
        return sessionStorage.getItem('authenticatedUser') !== null && sessionStorage.getItem('jwtToken') !== null;
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser');
        sessionStorage.removeItem('jwtToken');
    }
}

export default new AuthService();