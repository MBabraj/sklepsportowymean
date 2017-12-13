import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {

    currentUser: any;

    constructor(private http: Http) { 
        if (localStorage.getItem('currentUser')) {
            this.currentUser = this.parseJwt(localStorage.getItem('currentUser'));
        }
    }

    login(username: string, password: string) {
        return this.http.post('/users/authenticate', { username: username, password: password })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    this.currentUser = this.parseJwt(user.token);
                    localStorage.setItem('currentUser', user.token);
                }
                return user;
            });
    }

    private parseJwt(token: string) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64))._doc;
    };

    isLogged() {
        return localStorage.getItem('currentUser');
    }

    isAdmin() {
        return !!this.currentUser.admin;
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}