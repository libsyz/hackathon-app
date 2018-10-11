import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, GESTURE_TOGGLE } from 'ionic-angular';

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
  hackers: number[];

  hackersChosen: number = 1;
  gotEnoughHackers: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.hackers = [1, 2, 3, 4, 5];
  }

  updateHackersChosen(boolean) {
    if (boolean == true) {
      this.hackersChosen++;
      console.log({hackersChosen: this.hackersChosen});
    }
    else if (boolean == false && this.hackersChosen == 0){
      console.log({hackersChosen: this.hackersChosen});
    }
    else {
      this.hackersChosen--;
      console.log({hackersChosen: this.hackersChosen});
    }
    this.enoughHackers();
  }

  enoughHackers(){
    this.hackersChosen > 2 ? this.gotEnoughHackers = true : this.gotEnoughHackers = false;
  }
  
}
