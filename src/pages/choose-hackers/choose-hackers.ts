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

  hackersChosen: number = 1; // Default, the organizer already counts for 1
  gotEnoughHackers: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    this.hackerSlots = [0, 1, 2, 3, 4];
  }

  updateHackersChosen(boolean) {
    if (boolean == true) {
      this.hackersChosen++;
    }
    else if (boolean == false && this.hackersChosen == 0){
    }
    else {
      this.hackersChosen--;
    }
    this.checkForEnoughHackers();
  }

  checkForEnoughHackers(){
    this.hackersChosen > 2 ? this.gotEnoughHackers = true : this.gotEnoughHackers = false;
  }
  
  holdOn(){
    const myAlert = this.alertCtrl.create();
    myAlert.setTitle("Hold on!");
    myAlert.setSubTitle("We are building something amazing!");
    myAlert.addButton("Got It!");
    myAlert.present();
  }
}
