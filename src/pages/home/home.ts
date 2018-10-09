import { ChooseHackersPage } from './../choose-hackers/choose-hackers';
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

  newHack() {
    // This should also call the server and generate a new Hack for the current user
    this.navCtrl.push(ChooseHackersPage);
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
