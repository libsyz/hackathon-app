import { HomePage } from './../home/home';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

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
    private authSrvc: AuthProvider, private alertCtrl: AlertController) {
}

  // Probably would make sense to keep both forms in other file and export them
  signUpForm = new FormGroup({
    email: new FormControl('', 
      [
        Validators.required, 
        Validators.email
      ]),
    password: new FormControl('', 
      [
        Validators.required,
        Validators.minLength(6)
      ]),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required),
    company: new FormControl('', Validators.required)
  })


  ionViewDidLoad() {
    console.log(this.signUpForm);
  }

  showForm() {
    console.log(this.signUpForm);
  }

  signUp() {
    // this.authSrvc.signUp();
    if (this.signUpForm.valid) {

      let signUpData = this.signUpForm.value;
      const postResponse = this.authSrvc.signUp(signUpData);
      postResponse.subscribe(
        response => {
          this.authSrvc.userData.token = response['data']['token'];
          this.navCtrl.push(HomePage);
        },
        error => {
          let errorNotification = this.alertCtrl.create();
          errorNotification.setTitle("Whoops!");
          errorNotification.setSubTitle("Something did not work out, sorry!");
          errorNotification.addButton("ok");
          errorNotification.present();
          console.log(error);
        })
    }

    else {
      console.log("sorry bro");
    }
  }
 
}
