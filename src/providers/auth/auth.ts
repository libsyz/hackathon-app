import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  token: string;
  url = "http://localhost:3000/api/users/sign_in"

  constructor(public http: HttpClient) {
    console.log('Hello AuthProvider Provider');
  }

  signUp(signUpData){
    return this.http.post("http://localhost:3000/api/users", signUpData)
  }

  signIn(loginData){
    return this.http.post(this.url, loginData);
  }

}
