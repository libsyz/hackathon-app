import { HomePage } from './../home/home';
import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertButton, AlertController } from 'ionic-angular';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/abstract_emitter';

/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private authSrvc: AuthProvider,
              private alertCtrl: AlertController) {
  }

  username: string; 
  password: string;

  loginData = {
               email: "miguel@miguel.com",
               password: "123456"
              };

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
  }

  signIn(){
    console.log(this.loginData);
    let signInData = this.authSrvc.signIn(this.loginData);
    signInData.subscribe(
      data => {
      console.log(data);
      this.authSrvc.token = data['token'];
      this.navCtrl.push(HomePage);
    },
      error => {
        let errorNotification = this.alertCtrl.create();
        errorNotification.setTitle("Whoops!");
        errorNotification.setSubTitle("either your email or your password is wrong")
        errorNotification.addButton("ok");
        errorNotification.present();
        console.log(error);
      });

  }

}
