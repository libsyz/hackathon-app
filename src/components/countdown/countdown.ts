import { PageNavigationProvider } from './../../providers/page-navigation/page-navigation';
  import { DefineProblemPage } from './../../pages/define-problem/define-problem';
  import { HomePage } from './../../pages/home/home';
  import { Alert, AlertController, NavController, NavParams } from 'ionic-angular';
  import { Component, Input } from '@angular/core';
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
  export class CountdownComponent {
    @Input() currentPhase: number;

    countDownActive: boolean = false;
    time: number;
    TimerInSeconds: number; // get from the service
    minutes: string; // could call getminutes function when I got timerInSecods
    seconds: string; // could call getseceonds function when I got timerInSecods
    info: string = "START";

    constructor(private alertCtrl: AlertController,
                private navCtrl: NavController,
                private navParams: NavParams,
                private pageNavSrvc: PageNavigationProvider,
                private configSrvc: TimerConfigProvider)  {  
    }

    // Strategy one (not preferred) => Pass params that send 
    // mention the current phase, since the class needs navparams 
    // to be built, those will be readily available as soon as
    // the component is initialized


    // Strategy two => Look for some way of doing onComponentDidLoad()
    // so I can rest assured that the Input has been captured

    // Strategy three => looking for a way to listen to the inputs
    // being there, and then start arranging data
    
    startCountDown(){
      if (this.countDownActive == false) {
        let timeNow = Date.now();
        let then = timeNow + this.TimerInSeconds * 1000;
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
        const pageToGo = this.pageNavSrvc.getPage(this.currentPhase);
        this.navCtrl.setRoot(pageToGo, 
                            {hackathonId: this.navParams.get("hackathonId")});
      })
      nextPhaseAlert.present();
    }
  }
