import { ToolsProvider } from './../../providers/tools/tools';
import { Hackathon } from './../../models/hackathon.model';
import { HackathonService } from './../../providers/hackathon-service/hackathon-service';
// import { ToolsProblemStatementPage } from './../tools-problem-statement/tools-problem-statement';
import { Component } from '@angular/core';
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
              public alertCtrl: AlertController) {
  }

  currentHackathon: Hackathon;
  hackId: number;
  currentPhase: number;
  phaseHeader: string;


  ionViewDidLoad() {
    this.hackId = this.navParams.get("hackathonId");
    this.currentPhase = this.navParams.get("currentPhase");
    this.currentHackathon = this.hackSrvc.findHackathon(this.hackId);
    this.getText();
  }

  callForHelp() {
    let myToast = this.toastCtrl.create({
      message: 'A facilitator is coming to help!',
      duration: 3000,
      position: 'bottom',
      showCloseButton: true
    });
    myToast.present();
  }

  getTools() {
    console.log(this.navParams);
    let currentHackId = this.navParams.get("hackathonId");
    this.navCtrl.push(this.toolsSrvc.getTools(this.currentPhase));
    // const buildingAlert  = this.alertCtrl.create({
    //   title: "Coming soon!",
    //   subTitle: 'We are building something amazing',
    //   buttons: ['Got it!']
    // });
    // buildingAlert.present();

    // this.navCtrl.push(ToolsProblemStatementPage);
  }

  getText() {
    this.currentHackathon.phases.forEach((phase)=> {
      if( phase['phaseNumber'] == this.currentPhase) {
        this.phaseHeader = phase['phaseHeader'];
      }
    })
  }
}
