import { HackersListPage } from './../../pages/hackers-list/hackers-list';
import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the HackerAvatarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'hacker-avatar',
  templateUrl: 'hacker-avatar.html'
})
export class HackerAvatarComponent {

  text: string;

  constructor(public modalCtrl: ModalController,
              public navCtrl: NavController,
              public navParams: NavParams) {
    console.log(this.navParams.data);
    this.text = 'Hello World';
  }

  showHackersModal() {
    const myModal = this.modalCtrl.create(HackersListPage, {data: "someIndex"})
    myModal.present();
    // How do I send data from the modal to the avatar?
  }


}
