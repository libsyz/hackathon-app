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
 slot: number;
 hackers: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private hackersListSrvc: hackersList,
              public viewCtrl: ViewController,
              public hackSrvc: HackathonService,
              public alertCtrl: AlertController) {

  }


  ionViewDidLoad() {
    this.hackers = this.hackersListSrvc.getUsers();
    this.currentHackId = this.navParams.get("hackathonId");
    this.slot = this.navParams.get("slot");
  }

  dropPage() {
    this.hackSrvc.clearHacker(this.currentHackId, this.hackerInSlot);
    this.viewCtrl.dismiss({data: "clear"});
  }

  selectHacker(hacker, slot) {
    debugger
    let alreadySelected = this.hackSrvc.addHacker(this.currentHackId, hacker);

    if (alreadySelected == false) {
      this.viewCtrl.dismiss({
                             hacker: hacker, 
                             hackathonId: this.currentHackId
                            });
    }
    else {
      this.hackerAlreadySelectedAlert();
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

}