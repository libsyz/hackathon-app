import { HackathonService } from './../../providers/hackathon-service/hackathon-service';
import { WellHackedPage } from './../well-hacked/well-hacked';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Hackathon } from '../../models/hackathon.model';

/**
 * Generated class for the DefineProblemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-define-problem',
  templateUrl: 'define-problem.html',
})
export class DefineProblemPage {
  hackId: number;
  maxChars: number = 120;
  chars: number = 0;
  problemInput: string = "";
  problemIsLongEnough: boolean = false;
  problemIsTooLong: boolean = false;
  problemMinLength: number = 20;
  problemMaxLength: number = 120;
  charsColor: string = "black";

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public toastCtrl: ToastController,
              public hackSrvc: HackathonService) {
  }

  // There should be an element that displays the total amount of
  // characters in the problem, and also sets a max

  ionViewDidLoad(){
    this.problemInput = "";
    }

  updateProblem(){
    let problemChars = this.problemInput.split('');
    this.chars = problemChars.length;
    this.checkForProblemMinLength();
    this.checkForProblemMaxLength();
  }

  onContinue() {
    if (this.problemIsLongEnough == false) {
    this.showToast("Your problem should be at least 20 characters long");
    }
    else if (this.problemIsLongEnough && this.problemIsTooLong) {
      this.showToast("Your problem should not exceed 120 characters long");
    }
    else {
      this.hackSrvc.saveProblemStatement(this.problemInput).subscribe(response => {
        this.hackSrvc.currentHackathon = response;
        this.hackSrvc.updateCurrentPhase();
        this.navCtrl.push(WellHackedPage);
      }, error => {
        this.showToast("Sorry, something went wrong!")
      });
      
    }
  }

  checkForProblemMinLength() {
    this.chars > this.problemMinLength ? this.problemIsLongEnough = true : this.problemIsLongEnough = false;
  }
  checkForProblemMaxLength() {
    if (this.chars > this.problemMaxLength) {
      this.charsColor = "red";
      this.problemIsTooLong = true;
    }
    else {
    this.charsColor = "black";
    this.problemIsTooLong = false;
    }
  }

  showToast(message) {
    const myToast = this.toastCtrl.create(
      {
        message: message,
        duration: 2000,
        position: 'bottom',
        showCloseButton: true
    })
    myToast.present();
  }



}
