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
    this.slot = this.navParams.get("slot");
    this.hackerInSlot = this.navParams.get("hackerId");
    this.hackers = this.hackersListSrvc.users
  }

  
  selectHacker(hacker) {
   // Ok mi pana
   const selectionResult = this.hackSrvc.addHackerToHackathon(hacker['id'], this.hackerInSlot, this.hackSrvc.currentHackId);
   selectionResult.subscribe(
      response => {
        console.log(response);
        this.manageSelectionResult(response, hacker);
      },
      error => {
        console.log(error)
        this.somethingWentWrong();;
      }
   )
  }
  
  manageSelectionResult(ApiData, hacker){
    if (ApiData['status'] == 'already selected') {
      this.hackerAlreadySelectedAlert();
    }
    else {
      this.viewCtrl.dismiss({ hacker: hacker });
    }
  }

  hackerAlreadySelectedAlert() {
    let myAlert = this.alertCtrl.create({
      title: 'Whoops!',
      subTitle: 'hacker already selected',
      buttons: ['got it']}
    )
    myAlert.present();
  }

  somethingWentWrong(){
    let errorAlert = this.alertCtrl.create({
      title: 'Whoops!',
      subTitle: 'Something went wrong',
      buttons: ['got it']}
    )
    errorAlert.present();
  }

  dropPage() {
    if (this.hackerInSlot){
      const cleared = this.hackSrvc.clearHacker(this.hackerInSlot);
      cleared.subscribe();
     }
    this.viewCtrl.dismiss({ data: "clear" });

  }

}