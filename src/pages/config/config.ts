import { NotificationsPage } from './../notifications/notifications';
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
    this.hackathonPhases = this.configSrvc.activeConfig;
  }

  secondsToMinutes(seconds) {
    return Math.floor(seconds / 60 );
  }

  addMinute(phase) {
    const phaseToAdd = this.findPhaseByNumber(phase);
    if (phaseToAdd['phaseTime'] < 1800){ 
      phaseToAdd['phaseTime'] += 60;
    }
  }

  subtractMinute(phase) {
    const phaseToSubtract = this.findPhaseByNumber(phase);
    if (phaseToSubtract['phaseTime'] > 0){ 
      phaseToSubtract['phaseTime'] -= 60;
    }
  }

  saveNewConfig() {
    this.configSrvc.saveNewConfig(this.hackathonPhases);
    this.navCtrl.pop();
  }

  findPhaseByNumber(phase) {
    return this.hackathonPhases.find((hackathonPhase) => {
      return hackathonPhase['phaseNumber'] == phase['phaseNumber']
    })
  }

  goToFacilitatorAdmin() {
    this.navCtrl.push(NotificationsPage);
  }
}
