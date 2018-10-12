import { HackersListPage } from './../../pages/hackers-list/hackers-list';
import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() slot: any;
  @Output() wasSelected = new EventEmitter();

  hackerSelected: boolean = false;
  hackerImageReference: string;
  text: string;
  currentHackId: number;

  constructor(public modalCtrl: ModalController,
              public navCtrl: NavController,
              public navParams: NavParams) {
    this.currentHackId = this.navParams.get("hackathonId");
    this.text = 'Hello World';
  }


  showHackersModal() {
    console.log(this.slot);
    const myModal = this.modalCtrl.create(HackersListPage, {hackathonId: this.currentHackId, slot: this.slot});
    myModal.onDidDismiss((data)=> {
      this.updateHackerStatus(data);
    })
    myModal.present();
  }

  updateHackerStatus(data) {
    // If the data contains a hacker, we should render the image
    if (data.data != "clear") {
      this.hackerSelected = true;
      this.hackerImageReference = data.data.imageUrl;
      this.wasSelected.emit(this.hackerSelected);
    }
    else {
      this.hackerSelected = false;
      this.hackerImageReference = '';
      this.wasSelected.emit(this.hackerSelected);
    }

  }
}
