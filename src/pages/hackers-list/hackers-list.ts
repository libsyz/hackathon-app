import { Hackathon } from './../../models/hackathon.model';
import { HackathonService } from './../../providers/hackathon-service/hackathon-service';
import { hackersList } from './../../services/hackers-list.service';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';

/**
 * Generated class for the HackersListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hackers-list',
  templateUrl: 'hackers-list.html',
})
export class HackersListPage {


 hackers: any;
 currentHackId:  number;
 slot: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private hackersListSrvc: hackersList,
              public viewCtrl: ViewController,
              public hackSrvc: HackathonService,
              public alertCtrl: AlertController) {

  }


  ionViewDidLoad() {
    console.log(this.navParams.data);
    console.table(this.hackersListSrvc.getUsers());
    this.currentHackId = this.navParams.get("hackathonId");
    this.slot = this.navParams.get("slot");
    this.hackers = this.hackersListSrvc.getUsers();
  }

  dropPage() {
    // Drop page needs to know if the slot was filled or not

    // If the slot was filled, it should tell choose-hackers to 
    // take off a number

    // If the slot was not filled yet and the user clears, then 
    // the counter should remain as it was.
    this.hackSrvc.clearHacker(this.currentHackId, this.slot);
    this.viewCtrl.dismiss({data: "clear"});
  }

selectHacker(hacker, slot) {

  // Now this method -
  // If you are putting a hacker into an empty spot, it should
  // tell choose-hackers to increase the counter
  
  // If you are replacing a filled spot with another hacker, 
  // it should tell choose-hackers to remain the same 
  console.log(this.navParams.data);
  let operationPossible = this.hackSrvc.addHacker(this.currentHackId, hacker, slot);
  console.log(operationPossible);
  if (operationPossible == "granted") {
    this.viewCtrl.dismiss({data: hacker});
  }
  else {
    let myAlert = this.alertCtrl.create({
      title: 'Whoops!',
      subTitle: 'hacker already selected',
      buttons: ['got it']}
    )
    myAlert.present();
  }

  }

}
