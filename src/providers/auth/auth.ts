import { User } from './../../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  userData: User;

  url = "http://localhost:3000/api/users/sign_in"

  constructor(public http: HttpClient) {
    console.log('Hello AuthProvider Provider');
  }

  setCurrentUser(apiData: User) {
    this.userData = apiData;
  }

  signUp(signUpData){
    return this.http.post("http://localhost:3000/api/users", signUpData)
  }

  signIn(loginData){
    return this.http.post(this.url, loginData);
  }

  getUserData(){
    return this.http.get(`http://localhost:3000/api/users/${this.userData['id']}` )
  }

  getAuthenticatedHeaders(){
    if (this.userData.token) {   
    console.log(this.userData.token)
      let headers = new HttpHeaders({
        Authentication: this.userData.token,
      });
      return headers;
    }
    else {
      console.log( "Sorry, something went wrong with the token", 
                   {token: this.userData.token})
    }
  }

}
