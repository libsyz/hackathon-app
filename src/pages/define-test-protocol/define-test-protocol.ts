import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Item, AlertController } from 'ionic-angular';

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
  @ViewChild('itemContainer')itemContainer: ElementRef;

  timeframe: string = "";

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DefineTestProtocolPage');
  }

  addField() {
    const myField = `<input placeholder="Action 1" type="text">
                      </input>`
    const inputFields = this.itemContainer.nativeElement as HTMLDivElement;
    inputFields.innerHTML = inputFields.innerHTML + myField;

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
