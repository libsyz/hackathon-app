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
    this.currentHackId = this.navParams.get("hackathonId");
    this.slot = this.navParams.get("slot");
    this.hackers = this.hackersListSrvc.getUsers();
  }

  dropPage() {
    this.hackSrvc.clearHacker(this.currentHackId, this.slot);
    this.viewCtrl.dismiss({data: "clear"});
  }

  selectHacker(hacker, slot) {
    let operationPossible = this.hackSrvc.addHacker(this.currentHackId, hacker, slot);

    if (operationPossible == "granted") {
      this.viewCtrl.dismiss({data: hacker, 
                           hackathonId: this.currentHackId});
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