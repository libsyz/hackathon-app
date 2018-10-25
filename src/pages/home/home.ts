import { ConfigPage } from './../config/config';
import { timerConfig } from './../../models/timer-config.model';
import { TimerConfigProvider } from './../../providers/timer-config/timer-config';
import { GalleryPage } from './../gallery/gallery';
import { HackathonService } from './../../providers/hackathon-service/hackathon-service';
import { ChooseHackersPage } from './../choose-hackers/choose-hackers';
import { Component } from '@angular/core';
import { NavController, AlertController, NavParams, ModalController } from 'ionic-angular';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              public hackSrvc: HackathonService,
              public timerSrvc: TimerConfigProvider,
              public modalCtrl: ModalController) {
    this.timerSrvc.loadConfig();
  }

  newHack() {
    const newHack = this.hackSrvc.createHackathon();
    this.navCtrl.push(ChooseHackersPage, {hackathonId: newHack.id});
  }

  goToGallery() {
    this.navCtrl.push(GalleryPage);
  }

  goToSettings(){
    console.log(this.timerSrvc.activeConfig);
    const configModal = this.modalCtrl.create(ConfigPage);
    configModal.present();
  }

}
