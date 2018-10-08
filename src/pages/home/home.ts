import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController) {

  }

  buildingAmazing() {
    const buildingAlert  = this.alertCtrl.create({
      title: "Coming soon!",
      subTitle: 'We are building something amazing',
      buttons: ['Got it!']
    });
    buildingAlert.present();
  }

}
