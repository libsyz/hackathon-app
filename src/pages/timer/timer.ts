import { NotificationsProvider } from './../../providers/notifications/notifications';
import { ToolsProvider } from './../../providers/tools/tools';
import { Hackathon } from './../../models/hackathon.model';
import { HackathonService } from './../../providers/hackathon-service/hackathon-service';
// import { ToolsProblemStatementPage } from './../tools-problem-statement/tools-problem-statement';
import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Alert, AlertController } from 'ionic-angular';
import { CountdownComponent } from '../../components/countdown/countdown';


/**
 * Generated class for the TimerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-timer',
  templateUrl: 'timer.html',
})
export class TimerPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public hackSrvc: HackathonService,
              public toolsSrvc: ToolsProvider,
              public toastCtrl: ToastController,
              public alertCtrl: AlertController,
              public notificationSrvc: NotificationsProvider) {
  }


  currentHackathon: any;
  hackId: number;
  currentPhase: number;
  headerText: string;
  helperText: string;


  ionViewDidLoad() {
  
    this.currentPhase = this.hackSrvc.currentPhase;
    this.currentHackathon = this.hackSrvc.currentHackathon;
    this.getText();
  }

  callForHelp() {
    let myToast = this.toastCtrl.create({
      message: 'A facilitator is coming to help!',
      duration: 3000,
      position: 'bottom',
      showCloseButton: true
    });
    this.sendCallForHelp();
    myToast.present();
  }

  getTools() {
    let pageToDeliver = this.toolsSrvc.getTools(this.currentPhase);
    this.navCtrl.push(pageToDeliver);
  }

  getText() {
    this.currentHackathon.phases.forEach((phase)=> {
      if( phase['phaseOrder'] == this.currentPhase) {
        this.headerText = phase['headerText'];
        this.helperText = phase['helperText'];
      }
    })
  }

  sendCallForHelp(){
  this.notificationSrvc.addNotification().toPromise()
  .then(res => {
        console.log(res);
      },err => { 
        console.log(err)
      })
  }
}
