import { HackathonService } from './../../providers/hackathon-service/hackathon-service';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FinalWellHackedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-final-well-hacked',
  templateUrl: 'final-well-hacked.html',
})
export class FinalWellHackedPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public hackSrvc: HackathonService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FinalWellHackedPage');
  }

  sendBackHome(){
    this.hackSrvc.clearApplicationState();
   
    this.navCtrl.setRoot(HomePage)
  }

}
