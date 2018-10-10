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

  hackersChosen: number = 0;
  gotEnoughHackers: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChooseHackersPage');
    this.hackers = [1, 2, 3, 4, 5];
  }
  
}
