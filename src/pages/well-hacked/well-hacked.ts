import { ReviewHackPage } from './../review-hack/review-hack';
import { Hackathon } from './../../models/hackathon.model';
import { HackathonService } from './../../providers/hackathon-service/hackathon-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TimerPage } from '../timer/timer';

/**
 * Generated class for the WellHackedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-well-hacked',
  templateUrl: 'well-hacked.html',
})
export class WellHackedPage {
  hackId: number;
  currentHackathon: Hackathon;
  finishedPhase: number;
  headerText: string;
  wellHackedText: string;


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public hackSrvc: HackathonService) {
  }

  ionViewDidLoad() {
    debugger
    this.finishedPhase = this.hackSrvc.currentPhase - 1;
    this.currentHackathon = this.hackSrvc.currentHackathon;
    this.getPageText();
  }

  getPageText(){
    this.currentHackathon.phases.forEach(phase => {
      if (phase['phaseOrder'] === this.finishedPhase ) {
        this.headerText = phase['headerText'];
        this.wellHackedText = phase['wellHackedText'];
      }
    }); 
}

  nextPhase(){
    if (this.finishedPhase == 5) {
      this.navCtrl.push(ReviewHackPage);
    }
    else {
      this.navCtrl.push(TimerPage);
    }
 
  }

}
