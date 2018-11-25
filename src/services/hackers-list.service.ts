import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class hackersList {

    users: {}[] 
    constructor(private http: HttpClient){
    }

    getUsers(){
        this
    }
}