import { AuthProvider } from './../../providers/auth/auth';
import { hackersList } from './../../services/hackers-list.service';
import { HackathonService } from './../../providers/hackathon-service/hackathon-service';
import { TimerPage } from './../timer/timer';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Alert } from 'ionic-angular';

/**
 * Generated class for the ChooseHackersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-choose-hackers',
  templateUrl: 'choose-hackers.html',
})
export class ChooseHackersPage {
  hackerSlots: number[];
  // Default, the organizer already counts for 1
  gotEnoughHackers: boolean = false;
  hackId;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public authSrvc: AuthProvider, 
              public alertCtrl: AlertController,
              public hackSrvc: HackathonService,
              public hackListSrvc: hackersList) {
  }

  ionViewDidLoad() {
    this.hackerSlots = [0, 1, 2, 3, 4];
    this.hackId = this.hackSrvc.currentHackId;
    this.hackListSrvc.getUsers();
  }

  updateHackersChosen(eventEmitterObj) {
    const numberOfHackers = this.hackSrvc.getNumberOfHackers();
    numberOfHackers.subscribe(response => {
        console.log(response);
        const hackersEnlisted = response['hackathon']['hackers_enlisted'];
        this.checkForEnoughHackers(hackersEnlisted);
    } )
  }

  checkForEnoughHackers(hackersEnlisted){
    this.gotEnoughHackers = this.hackSrvc.checkForEnoughHackers(hackersEnlisted);
  }

  goToTimer(){
  this.navCtrl.push(TimerPage);
  }

  // What do I need to decide

  // How to figure out what is the next phase

  // Everytime I do a get request to know if the hackathon is done

  // When is it appropropriate to do so

  // This is crucial for the flow of the app - 
  // As soon as possible 

  // Where to store that information appropriately
}
