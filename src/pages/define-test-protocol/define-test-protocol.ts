import { Component, ViewChild, ElementRef } from '@angular/core';
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


  actionArray = [] = [""]
  timeframe: string = "";
  showForms: boolean = false;
  actionLimit: number = 5;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DefineTestProtocolPage');
  }

  logForm(){
    let myForm = this.actionInputs.nativeElement as HTMLElement;
    console.log(myForm.children);
    let myFormArray = Array.from(myForm.children)
    console.log(myFormArray);
    const hiddenElement = myFormArray.find((element)=> {
       return element.classList.contains('hidden') == true;
    })
    hiddenElement.classList.remove('hidden');
  }


  fillAction(actionArrayIndex) {
    this.actionArray[actionArrayIndex] = event.srcElement.value;
    event.srcElement.textContent = this.actionArray[actionArrayIndex];
    console.log(this.actionArray);
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
      }
    })
    timeframeAlert.present();
  }
}
