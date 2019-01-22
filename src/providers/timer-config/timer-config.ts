import { timerConfig } from './../../models/timer-config.model';

import { Injectable } from '@angular/core';

/*
  Generated class for the TimerConfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TimerConfigProvider {

  constructor() {
  }

  activeConfig: {}[];

  loadConfig() {
    const defaultConfigObject = new timerConfig;
    this.activeConfig = defaultConfigObject.configObject;
  }

  setPhase(phaseNum, setTimeInSeconds) {
    const phaseToChange = this.findPhaseByNum(phaseNum);
    phaseToChange['phaseTime'] = setTimeInSeconds;
  }

  returnTime(phaseNum) {
    const phaseToReturn = this.findPhaseByNum(phaseNum);
    return phaseToReturn['phaseTime'];
  }

  findPhaseByNum(phaseNum) {
    const phaseToReturn = this.activeConfig.find((phase) => {
      return phase['phaseNumber'] == phaseNum;
    })
    return phaseToReturn;
  }

  saveNewConfig(phases) {;
    this.activeConfig = phases;
  }

}