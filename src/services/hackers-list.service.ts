import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class hackersList {
    HackersEndpoint: string = "http://localhost:3000/api/users"
    users: {}[]; 
    constructor(private http: HttpClient){
    }

    getUsers(){
        this.http.get("http://localhost:3000/api/users").subscribe(
            data => {
                const usersFromApi = data as {}[];
                this.users = usersFromApi;
                console.log(this.users);
            },
            error => {
                console.log(error);
            }
        )
    }
}