import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Item } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
}
