import { AuthProvider } from './../../providers/auth/auth';
import { ConfigPage } from './../config/config';
import { timerConfig } from './../../models/timer-config.model';
import { TimerConfigProvider } from './../../providers/timer-config/timer-config';
import { GalleryPage } from './../gallery/gallery';
import { HackathonService } from './../../providers/hackathon-service/hackathon-service';
import { ChooseHackersPage } from './../choose-hackers/choose-hackers';
import { Component } from '@angular/core';
import { NavController, AlertController, NavParams, ModalController, ToastController } from 'ionic-angular';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public toastCtrl: ToastController,
              public hackSrvc: HackathonService,
              public timerSrvc: TimerConfigProvider,
              public modalCtrl: ModalController,
              public authSrvc: AuthProvider) {            
  }

  ionViewDidLoad(){
    console.log(this.navParams);
    this.welcomeUser(this.navParams.get("firstName"));
    this.timerSrvc.loadConfig();
  }

  welcomeUser(firstName){
    if (firstName) {
      const welcomeToast = this.toastCtrl.create();
      welcomeToast.setMessage(`Welcome back ${firstName}`);
      welcomeToast.setPosition("top");
      welcomeToast.setDuration(2000);
      welcomeToast.present();
    }
  } 

  newHack() {
    debugger
    const newHack = this.hackSrvc.createHackathon();
    newHack.subscribe(
      response => {
        console.log(response);
        this.hackSrvc.currentHackathon = response;
        this.hackSrvc.currentHackId = response['hackathon_id'];
        this.hackSrvc.updateCurrentPhase();

        this.navCtrl.push(ChooseHackersPage);
    },
      error => {
        console.log("something went wrong");
        console.log(error);
      })
  }

  goToGallery() {
    this.navCtrl.push(GalleryPage);
  }

  goToSettings(){
    const configModal = this.modalCtrl.create(ConfigPage);
    configModal.present();
    configModal.onDidDismiss(()=> {
    })
  }

}
