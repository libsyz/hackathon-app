import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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



  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChooseHackersPage');
    this.hackers = [1, 2, 3, 4, 5];
  }

  getOut(index){
    console.log('tapped!', index);
  }
}
