import { Alert, AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the HelperMethodsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HelperMethodsProvider {

  constructor(public http: HttpClient,
              public alertCtrl: AlertController) {
    console.log('Hello HelperMethodsProvider Provider');
  }

  buildingAmazing(){
    let myAlert = this.alertCtrl.create({
      title: "Hold up!",
      subTitle: "We are building something amazing!",
      buttons: ["Got it!"]
    })

    myAlert.present();
  }
}
