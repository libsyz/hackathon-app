import { ToolsProblemStatementPage } from './../tools-problem-statement/tools-problem-statement';
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
              public toastCtrl: ToastController,
              public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimerPage');
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

  buildingAmazing() {
    // const buildingAlert  = this.alertCtrl.create({
    //   title: "Coming soon!",
    //   subTitle: 'We are building something amazing',
    //   buttons: ['Got it!']
    // });
    // buildingAlert.present();

    this.navCtrl.push(ToolsProblemStatementPage);
  }
}
