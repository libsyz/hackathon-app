import { PageNavigationProvider } from './../../providers/page-navigation/page-navigation';
  import { DefineProblemPage } from './../../pages/define-problem/define-problem';
  import { HomePage } from './../../pages/home/home';
  import { Alert, AlertController, NavController, NavParams } from 'ionic-angular';
  import { Component, Input, OnInit, AfterViewInit, AfterContentChecked, AfterContentInit, AfterViewChecked } from '@angular/core';
import { TimerConfigProvider } from '../../providers/timer-config/timer-config';

  /**
   * Generated class for the CountdownComponent component.
   *
   * See https://angular.io/api/core/Component for more info on Angular
   * Components.
   */

   // Is there something like when component is ready / when inputs have been fulfilled? 
  @Component({
    selector: 'countdown',
    templateUrl: 'countdown.html'
  })
  export class CountdownComponent implements AfterContentChecked {
    @Input() currentPhase: number;

    countDownActive: boolean = false;
    time: number;
    timerInSeconds: number; // get from the service
    minutes: string = "00"; // could call getminutes function when I got timerInSecods
    seconds: string = "00"; // could call getseceonds function when I got timerInSecods
    info: string = "START";
    countdownIsSet = false;

    constructor(private alertCtrl: AlertController,
                private navCtrl: NavController,
                private navParams: NavParams,
                private pageNavSrvc: PageNavigationProvider,
                private configSrvc: TimerConfigProvider)  {  
    }

    ngAfterContentChecked(){
      if (this.currentPhase != undefined && this.countdownIsSet == false) {
        this.timerInSeconds = this.configSrvc.returnTime(this.currentPhase);
        this.minutes = this.getMinutes(this.timerInSeconds * 1000); // SetInterval works in Milliseconds
        this.seconds = this.getSeconds(this.timerInSeconds * 1000);
        this.countdownIsSet = true;
      } 
    }


 
    startCountDown(){
      if (this.countDownActive == false) {
        let timeNow = Date.now();
        let then = timeNow + this.timerInSeconds * 1000;
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
      let seconds: any = time/1000%60;
      if (seconds < 10) {
        seconds = `0${seconds}`;
      }
      return seconds;
    }

    getText(time, interval) {
      if (time <= 0) {
        clearInterval(interval); 
        this.goToNextPhase();
      }  
      if (time / 1000 < 120) {
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
        const pageToGo = this.pageNavSrvc.getPage(this.currentPhase);
        this.navCtrl.setRoot(pageToGo, 
                            {hackathonId: this.navParams.get("hackathonId")});
      })
      nextPhaseAlert.present();
    }
  }
