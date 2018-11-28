import { AuthProvider } from './../providers/auth/auth';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Header } from 'ionic-angular';


@Injectable()
export class hackersList {
    HackersEndpoint: string = "https://hackathon-app.herokuapp.com/api/users"
    users: {}[]; 
    constructor(private http: HttpClient,
                private authSrvc: AuthProvider){
    }

    getUsers(){
        const authHeaders = this.authSrvc.getAuthenticatedHeaders();
        this.http.get("https://hackathon-app.herokuapp.com/api/users", { headers: authHeaders}).subscribe(
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