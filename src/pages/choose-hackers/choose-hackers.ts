import { HackathonService } from './../../providers/hackathon-service/hackathon-service';
import { TimerPage } from './../timer/timer';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Alert } from 'ionic-angular';

/**
 * Generated class for the ChooseHackersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-choose-hackers',
  templateUrl: 'choose-hackers.html',
})
export class ChooseHackersPage {
  hackerSlots: number[];
  // Default, the organizer already counts for 1
  gotEnoughHackers: boolean = false;
  hackId: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public alertCtrl: AlertController,
              public hackSrvc: HackathonService) {
  }

  ionViewDidLoad() {
    this.hackerSlots = [0, 1, 2, 3, 4];
    this.hackId = this.navParams.get("hackathonId")
  }

  updateHackersChosen(boolean) {
    let numberOfHackers = this.hackSrvc.getNumberOfHackers(this.navParams.data);
    this.checkForEnoughHackers(numberOfHackers);
  }


  checkForEnoughHackers(numberOfHackers){
    numberOfHackers > 1 ? this.gotEnoughHackers = true : this.gotEnoughHackers = false;
  }
  
  goToTimer(){
  this.navCtrl.push(TimerPage, {hackathonId: this.hackId});
  }
}
