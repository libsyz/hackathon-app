import { timerConfig } from './../../models/timer-config.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TimerConfigProvider } from '../../providers/timer-config/timer-config';

/**
 * Generated class for the ConfigPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-config',
  templateUrl: 'config.html',
})
export class ConfigPage {

  hackathonPhases = [];


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public configSrvc: TimerConfigProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigPage');
    this.hackathonPhases = this.configSrvc.activeConfig;
  }

  secondsToMinutes(seconds) {
    return Math.floor(seconds / 60 );
  }

  addMinute(phase) {
    const phaseToAdd = this.hackathonPhases.find((hackathonPhase) => {
      return hackathonPhase['phaseNumber'] == phase['phaseNumber']
    } )
    if (phaseToAdd['phaseTime'] < 1800){ 
      phaseToAdd['phaseTime'] += 60;
    }
  }

  subtractMinute(phase) {
    const phaseToAdd = this.hackathonPhases.find((hackathonPhase) => {
      return hackathonPhase['phaseNumber'] == phase['phaseNumber']
    } )
    if (phaseToAdd['phaseTime'] > 0){ 
      phaseToAdd['phaseTime'] -= 60;
    }
  }

  saveNewConfig() {
    this.configSrvc.saveNewConfig(this.hackathonPhases);
    this.navCtrl.pop();
  }
}
