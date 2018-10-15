import { DefineProblemPage } from './../../pages/define-problem/define-problem';
import { HomePage } from './../../pages/home/home';
import { Alert, AlertController, NavController } from 'ionic-angular';
import { Component } from '@angular/core';

/**
 * Generated class for the CountdownComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'countdown',
  templateUrl: 'countdown.html'
})
export class CountdownComponent {
  countDownActive: boolean = false;
  time: number;
  minutes: any = "00";
  seconds: any = "01";
  info: string = "START";
  fifteenMinutes: number = 1;

  constructor(private alertCtrl: AlertController,
              private navCtrl: NavController) {
    console.log('Hello CountdownComponent Component');
  }

  startCountDown(){
    if (this.countDownActive == false) {
      let timeNow = Date.now();
      let then = timeNow + this.fifteenMinutes * 1000;
      this.time = then - timeNow;
      this.info = "GO!"; 
      this.updateTimer()
      this.countDownActive = true;    
    }
  }

  updateTimer() {
    let timerInterval = setInterval(()=> {
      this.time = this.time - 1000;
      this.minutes = this.getMinutes(this.time);
      this.seconds = this.getSeconds(this.time);
      this.getText(this.time, timerInterval);
    }, 1000)

  }

  getMinutes(time) {
    let minutes: any = Math.floor(time/1000/60);
    if (minutes < 10 ) {
      minutes = `0${minutes}`
      }
    return minutes;
    }

  getSeconds(time) {
    let seconds: any = this.time/1000%60;
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    return seconds;
  }

  getText(time, interval) {
    if (time == 0) {
      clearInterval(interval); 
      this.goToNextPhase();
    }  
    if (time / 1000 / 60 < 120) {
      this.info = "HURRY UP!";
    }
  }

  goToNextPhase(){
    const nextPhaseAlert = this.alertCtrl.create({
      title: "Excellent!",
      subTitle: "Let's go to the next phase!",
      buttons: ["Got it!"]
    })
    nextPhaseAlert.onDidDismiss(()=>{

      this.navCtrl.setRoot(DefineProblemPage);
    })
    nextPhaseAlert.present();
  }
}
