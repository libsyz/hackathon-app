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
  currentPhase: number;
  headerText: string;
  contentText: string;


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public hackSrvc: HackathonService) {
  }

  ionViewDidLoad() {
    this.hackId = this.navParams.get("hackathonId");
    this.currentPhase = this.navParams.get("currentPhase");
    this.currentHackathon = this.hackSrvc.findHackathon(this.hackId);
    this.getPageText();
  }

  getPageText(){
    this.currentHackathon.phases.forEach(phase => {
      if (phase['phaseNumber'] === this.currentPhase ) {
        this.headerText = phase['phaseHeader'];
        this.contentText = phase['wellHackedText'];
      }
    }); 
  }

  nextPhase(){
    this.navCtrl.push(TimerPage, {hackathonId: this.hackId, currentPhase: this.currentPhase + 1 } );
  }

}
