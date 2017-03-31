import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
    private _url = "https://jsonplaceholder.typicode.com/users";

    constructor(private _http: Http) { }

    getUsers(): Observable<User[]> {
        return this._http.get(this._url)
            .map(res => res.json());
    }

    addUser(user: User){
        return this._http.post(this._url, JSON.stringify(user))
            .map(res => res.json());
    }
}