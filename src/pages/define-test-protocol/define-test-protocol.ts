import { HackathonService } from './../../providers/hackathon-service/hackathon-service';
import { WellHackedPage } from './../well-hacked/well-hacked';
import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, Item, AlertController, Form } from 'ionic-angular';
import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';

/**
 * Generated class for the DefineTestProtocolPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-define-test-protocol',
  templateUrl: 'define-test-protocol.html',
})
export class DefineTestProtocolPage {
  @ViewChild('formTemplate')actionInputs: ElementRef;
  @ViewChild('button')actionsButton: ElementRef;

  someAttribute: string = "";
  hackId: number;
  actionArray: string[] = ["", "", "", ""];
  timeframe: string = "";
  showForms: boolean = false;
  visibleInputs: number = 1;
  maxVisibleInputs: number = 4;
  nextStepDisabled: boolean = true;

  constructor(public navCtrl: NavController, 
              public hackSrvc: HackathonService,
              public navParams: NavParams,
              public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log(this.navParams);
    this.hackId = this.navParams.get("hackathonId");
    console.log('ionViewDidLoad DefineTestProtocolPage');
  }

  addFormInput(){
    let myForm = this.actionInputs.nativeElement as HTMLElement;
    let myFormArray = Array.from(myForm.children)
    this.showNextInput(myFormArray);
    this.updateActionsButton();
  }

  showNextInput(myFormArray) {
    const hiddenInput = myFormArray.find((element)=> {
      return element.classList.contains('hidden') == true;
   })
   hiddenInput.classList.remove('hidden');
   this.visibleInputs++
  }

  updateActionsButton() {
    let button = this.actionsButton.nativeElement as HTMLButtonElement;
    if (this.visibleInputs == this.maxVisibleInputs) {
      button.style.visibility = 'hidden';
    }
  }

  checkForValidForm(){
    const filledInputs = this.actionArray.filter((input)=> 
     input != "");
     if ( filledInputs.length == this.visibleInputs && this.timeframe != "") {
       this.nextStepDisabled = false;
     }
     else {
        this.nextStepDisabled = true;
      }
  }

  goToNext(){
    this.saveInformation();
    this.navCtrl.push(WellHackedPage, {hackathonId: this.hackId,
                                        currentPhase: 5});
  }


  saveInformation() {
    this.hackSrvc.saveTestActions(this.hackId, this.actionArray);
    this.hackSrvc.saveTestTimeframe(this.hackId, this.timeframe);
}


  addTimeframe(){
    let timeframeAlert = this.alertCtrl.create();
    timeframeAlert.setTitle("Choose a timeframe");
    timeframeAlert.addInput({
      type: "radio",
      label: "1 Week",
      value: "1 Week"
    })
    timeframeAlert.addInput({
      type: "radio",
      label: "2 Weeks",
      value: "2 Weeks"
    })
    timeframeAlert.addInput({
      type: "radio",
      label: "3 Weeks",
      value: "3 Weeks"
    })
    timeframeAlert.addInput({
      type: "radio",
      label: "4 Weeks",
      value: "4 Weeks"
    })
    timeframeAlert.addInput({
      type: "radio",
      label: "5 Weeks",
      value: "5 Weeks"
    })
    timeframeAlert.addButton({
      text: "Cancel"
    })
    timeframeAlert.addButton({
      text: "Okay",
      handler: data =>  {
        this.timeframe = data;
        this.checkForValidForm;
      }
    })
    timeframeAlert.onDidDismiss(() => {
      this.checkForValidForm()
    });
    timeframeAlert.present();
  }
}
