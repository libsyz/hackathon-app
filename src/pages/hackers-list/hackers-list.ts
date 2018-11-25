import { AuthProvider } from './../../providers/auth/auth';
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

 hackerInSlot: any;
 currentHackId: number;
 userId: number;
 slot: number;
 hackers: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private hackersListSrvc: hackersList,
              public viewCtrl: ViewController,
              public hackSrvc: HackathonService,
              public alertCtrl: AlertController,
              public authSrvc: AuthProvider) {

  }


  ionViewDidLoad() {
    this.currentHackId = this.navParams.get("hackathonId");
    this.slot = this.navParams.get("slot");
    this.hackers = this.hackersListSrvc.users
  }

  
  selectHacker(hacker, slot) {
   // Ok mi pana
   const selectionResult = this.hackSrvc.addHackerToHackathon(hacker['id'], this.authSrvc.currentHackId);
   selectionResult.subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
   )
   // Call the API to add a hacker to the current hackathon
   // Three scenarios
   // 200 - The hacker has been added to the hackathon
   // 200 - The hacker was already there, so it could not be added
   // 500 - Something got messed up unexpectedly
  }
  


  hackerAlreadySelectedAlert() {
    let myAlert = this.alertCtrl.create({
      title: 'Whoops!',
      subTitle: 'hacker already selected',
      buttons: ['got it']}
    )
    myAlert.present();
  }

  dropPage() {
    this.hackSrvc.clearHacker(this.currentHackId, this.hackerInSlot);
    this.viewCtrl.dismiss({data: "clear"});
  }

}