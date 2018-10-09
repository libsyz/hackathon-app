import { HackersListPage } from './../../pages/hackers-list/hackers-list';
import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';


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
              public navCtrl: NavController) {
    console.log('Hello HackerAvatarComponent Component');
    this.text = 'Hello World';
  }

  showHackersModal() {
    const myModal = this.modalCtrl.create(HackersListPage, {data: "someIndex"})
    myModal.present();
    myModal.dismiss({data:"Sending over some good stuff!"});
  }


}
