import { HackathonService } from './../../providers/hackathon-service/hackathon-service';
import { ChooseHackersPage } from './../choose-hackers/choose-hackers';
import { Component } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';





@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              public hackSrvc: HackathonService) {

  }

  newHack() {
    // When auth is implemented, the organizer can also be added to the 
    // current hack
    const newHack = this.hackSrvc.createHackathon();
    this.navCtrl.push(ChooseHackersPage, {hackathonId: newHack.id});
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
