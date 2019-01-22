import { SignUpPage } from './../sign-up/sign-up';
import { SignInPage } from './../sign-in/sign-in';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SignInOrUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-in-or-up',
  templateUrl: 'sign-in-or-up.html',
})
export class SignInOrUpPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  signIn() {
    this.navCtrl.setRoot(SignInPage)
  }
  signUp() {
    this.navCtrl.setRoot(SignUpPage)
  }
  
}
