import { HomePage } from './../home/home';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private authSrvc: AuthProvider) {
}

  // Probably would make sense to keep both forms in other file and export them
  signUpForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    role: new FormControl(''),
    company: new FormControl()
  })


  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  signUp() {
    // this.authSrvc.signUp();
    let signUpData = this.signUpForm.value;

    const postResponse = this.authSrvc.signUp(signUpData);
    postResponse.subscribe(
      response => {
        this.authSrvc.token = response['data']['token'];
        this.navCtrl.push(HomePage)
      },
      error => {
        console.log("Whoops something went horrible!");
        console.log(error);
      })
  }

}
