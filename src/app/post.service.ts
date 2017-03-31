import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {
    private _url = "https://jsonplaceholder.typicode.com/posts";

    constructor(private _http: Http) { }

    getPosts() {
        return this._http.get(this._url)
            .map(res => res.json());
    }
}